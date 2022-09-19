/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const { sortByKeys } = require("./sortByKeys");
const { compareBy } = require("./compareBy");

function normalizeSpec(spec) {
  return sortByKeys(spec, {
    firstKeys: ["openapi", "info", "paths", "components"],
    transformerByKey: {
      info: (info) =>
        sortByKeys(info, {
          firstKeys: ["title", "description", "version"],
        }),
      paths: (paths) =>
        sortByKeys(paths, { defaultTransformer: normalizePath }),
    },
  });
}

function normalizePath(pathObject) {
  return sortByKeys(pathObject, {
    firstKeys: ["parameters"],
    defaultTransformer: normalizeOperation,
  });
}

function normalizeOperation(operationObject) {
  return sortByKeys(operationObject, {
    firstKeys: [
      "operationsId",
      "tags",
      "summary",
      "description",
      "requestBody",
      "parameters",
      "responses",
    ],
    transformerByKey: {
      parameters: normalizeParameters,
    },
  });
}

function normalizeParameters(parametersArray) {
  const result = [...parametersArray.map(normalizeParameter)];
  result.sort(compareBy((value) => value.name));
  return result;
}

function normalizeParameter(parameterObject) {
  return sortByKeys(parameterObject, {
    firstKeys: ["name", "in", "required", "schema"],
  });
}

module.exports = {
  normalizeSpec,
};
