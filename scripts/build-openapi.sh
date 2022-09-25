#!/usr/bin/env bash

set -e

if [ -z "$npm_package_name" ] ; then
  echo "This script is supposed to be executed via 'yarn openapi'"
  exit 1
fi

SERVICE_NAME=two-worlds-api

TARGET_DIR="src/apiclient/backend/${SERVICE_NAME}/generated"
OPENAPI_JSON="src/apiclient/backend/${SERVICE_NAME}/${SERVICE_NAME}.json"
OPENAPI_JSON_YAML="src/apiclient/backend/${SERVICE_NAME}/${SERVICE_NAME}.json.yml"

OPENAPI_GENERATED_JSON="${TARGET_DIR}/${SERVICE_NAME}.json"
OPENAPI_RESOLVED_JSON="${TARGET_DIR}/${SERVICE_NAME}.resolved.json"
TYPES_D_TS="${TARGET_DIR}/types.d.ts"

mkdir -p "src/apiclient/backend/${SERVICE_NAME}/generated"

echo "Normalizing ${OPENAPI_JSON}"
node ./scripts/normalize-openapi.js "${OPENAPI_JSON}"

echo "Generating ${OPENAPI_GENERATED_JSON}"
js-yaml ${OPENAPI_JSON_YAML} > ${OPENAPI_GENERATED_JSON}

echo "Generating ${OPENAPI_RESOLVED_JSON} with resolved references"
node scripts/resolve-non-schema-references.js ${OPENAPI_GENERATED_JSON} ${OPENAPI_RESOLVED_JSON}

prettier --loglevel warn --write ${OPENAPI_GENERATED_JSON} ${OPENAPI_RESOLVED_JSON}

echo "Generating ${TYPES_D_TS}"
echo '/* eslint-disable */' > ${TYPES_D_TS}
tyogen ${OPENAPI_RESOLVED_JSON} >> ${TYPES_D_TS}
#npx oazapfts "$(pwd)/${OPENAPI_RESOLVED_JSON}" >> "$(pwd)/${TYPES_D_TS}"
