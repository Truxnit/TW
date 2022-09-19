// eslint-disable-next-line no-restricted-imports
import OpenAPIClientAxios, { Document } from "openapi-client-axios";
import { Client, PathsDictionary } from "./generated/types";
import twoWorldsApiDefinition from "./generated/two-worlds-api.json";

const api = new OpenAPIClientAxios({
  definition: twoWorldsApiDefinition as Document,
});

export const twoWorldsAxios = api.initSync() as Client;
export type ApiPaths = keyof PathsDictionary;
