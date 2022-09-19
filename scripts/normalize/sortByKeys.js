/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

function sortByKeysIfObject(arrayObjectNumberOrString) {
  if (Array.isArray(arrayObjectNumberOrString)) {
    return arrayObjectNumberOrString;
  }
  if (typeof arrayObjectNumberOrString === "object") {
    return sortByKeys(arrayObjectNumberOrString, {});
  }
  return arrayObjectNumberOrString;
}

function sortByKeys(
  obj,
  {
    firstKeys = [],
    transformerByKey = {},
    defaultTransformer = sortByKeysIfObject,
  }
) {
  const result = {};
  const keyOrder = Object.keys(obj);
  keyOrder.sort();
  // remove "firstkeys"...
  firstKeys.forEach((key) => {
    const keyIndex = keyOrder.indexOf(key);
    if (keyIndex >= 0) {
      keyOrder.splice(keyIndex, 1);
    }
  });
  // and prepend them
  keyOrder.unshift(...firstKeys);

  keyOrder.forEach((key) => {
    if (Object.hasOwnProperty.call(obj, key)) {
      const transformer = transformerByKey[key] || defaultTransformer;
      result[key] = transformer(obj[key]);
    }
  });
  return result;
}

module.exports = {
  sortByKeys,
};
