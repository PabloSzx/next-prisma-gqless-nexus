import { resolve } from "path";

import { makeSchema } from "@nexus/schema";

import * as types from "./types";
import { IS_DEVELOPMENT } from "../utils/constants";

export const schema = makeSchema({
  types,
  outputs: IS_DEVELOPMENT
    ? {
        schema: resolve(
          process.env.PWD ?? "",
          "./src/graphql/generated/schema.graphql"
        ),
        typegen: resolve(
          process.env.PWD ?? "",
          "./src/graphql/generated/apiTypings.ts"
        ),
      }
    : false,

  typegenAutoConfig: {
    headers: ['import { ObjectId } from "mongodb";'],
    sources: [],
    backingTypeMap: {
      ObjectId: "ObjectId",
      DateTime: "Date",
      NonNegativeInt: "number",
      PositiveInt: "number",
      URL: "string",
    },
  },
  nonNullDefaults: {
    output: true,
    input: true,
  },
  prettierConfig: {},
});
