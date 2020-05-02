import { applyMiddleware } from "graphql-middleware";
import { nexusPrismaPlugin } from "nexus-prisma";
import { resolve } from "path";

import { makeSchema } from "@nexus/schema";

import { IS_DEVELOPMENT, PWD } from "../utils/constants";
import { permissions } from "./permissions";
import * as types from "./types";

const nexusSchema = makeSchema({
  types,
  shouldGenerateArtifacts: IS_DEVELOPMENT,
  outputs: {
    schema: resolve(PWD, "./src/graphql/generated/schema.graphql"),
    typegen: resolve(PWD, "./src/graphql/generated/apiTypings.ts"),
  },
  typegenAutoConfig: {
    headers: ['import { Context } from "@pages/api/graphql";'],
    sources: [],
    backingTypeMap: {
      DateTime: "Date",
      NonNegativeInt: "number",
      PositiveInt: "number",
      URL: "string",
    },
    contextType: "Context",
  },
  nonNullDefaults: {
    output: true,
    input: true,
  },
  prettierConfig: {},
  plugins: [
    nexusPrismaPlugin({
      outputs: {
        typegen: resolve(PWD, "./src/graphql/generated/apiPrismaTypings.ts"),
      },
      shouldGenerateArtifacts: IS_DEVELOPMENT,
    }),
  ],
});

export const schema = applyMiddleware(nexusSchema, permissions);

if (process.env.GENERATE) {
  console.log("✔ Nexus schema types generated!");
}
