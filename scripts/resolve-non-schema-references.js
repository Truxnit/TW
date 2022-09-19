#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const jsonRefs = require("json-refs");

const openApiJsonFile = process.argv[2];
const outputFile = process.argv[3];

if (openApiJsonFile == null || outputFile == null) {
  console.log("Usage " + process.argv[1] + "input-file.json output-file.json");
  console.log(`

Resolves all references in the input-json, that so do not point to a json-schema.
The reason is that those references are not resolved automatically by openapi-client-axios-typegen. 
  `);
  process.exit(1);
}

function shouldRefBeInlined(refDetails) {
  return !refDetails.uri.startsWith("#/components/schemas/");
}

const openApiDefinition = JSON.parse(fs.readFileSync(openApiJsonFile, "utf-8"));

jsonRefs
  .resolveRefs(openApiDefinition, {
    filter: shouldRefBeInlined,
  })
  .then(function (result) {
    fs.writeFileSync(outputFile, JSON.stringify(result.resolved), "utf8");
  })
  .catch(function (ex) {
    console.error(ex.stack);
    process.exit(1);
  });
