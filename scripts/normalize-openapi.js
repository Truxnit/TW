#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Usage "normalize-openapi.js <filename> ...
 *
 * Normalize multiple openapi-files
 *
 * Bring all object properties in a canonical order to allow easier comparison
 * with other openapis.
 *
 * Overwrites the input file if the extension is ".yml", writes a correpsonding ".yml" file if it is not.
 *
 **/

const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");
const { normalizeSpec } = require("./normalize/normalizeSpec");

const filenames = process.argv.slice(2);

for (const filename of filenames) {
  normalizeFile(filename);
}

function normalizeFile(filename) {
  const fileContents = fs.readFileSync(filename, "utf-8");
  const openapiSpec = yaml.load(fileContents);

  if (!isOpenApiSpec(openapiSpec)) {
    console.log(
      `Ignoring ${filename}, because it does not seem to be an openapi file`
    );
    return;
  }

  const normalizedSpec = normalizeSpec(openapiSpec);

  const outputFile = path.join(
    path.dirname(filename),
    path.basename(filename, ".yml") + ".yml"
  );

  fs.writeFileSync(outputFile, yaml.dump(normalizedSpec));
}

function isOpenApiSpec(openapiSpec) {
  if (openapiSpec.openapi) {
    return openapiSpec.openapi.match(/^3\./);
  }
  return false;
}
