// eslint-disable-next-line no-restricted-imports
import OpenAPIClientAxios, { OpenAPIV3 } from "openapi-client-axios";
import { Client, PathsDictionary } from "./generated/types";
import twoWorldsApiDefinition from "./generated/two-worlds-api.json";

const api = new OpenAPIClientAxios({
  definition: twoWorldsApiDefinition as OpenAPIV3.Document,
});

export const twoWorldsAxios = api.initSync<Client>();
export type ApiPaths = keyof PathsDictionary;
