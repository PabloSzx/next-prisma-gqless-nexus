import { ApolloServer } from "apollo-server-micro";

import { PrismaClient } from "@prisma/client";
import { schema } from "@src/api/schema";
import { IS_DEVELOPMENT } from "@src/utils/constants";

import type { NextApiRequest, NextApiResponse, PageConfig } from "next";

export type Context = ReturnType<typeof buildContext>;

export const buildContext = ({}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};

declare global {
  interface NexusGen {
    context: Context;
  }
}

const server = new ApolloServer({
  schema,
  introspection: IS_DEVELOPMENT,
  playground: IS_DEVELOPMENT && {
    settings: {
      "request.credentials": "same-origin",
      "editor.theme": "dark",
    },
  },
  tracing: IS_DEVELOPMENT,
  context: buildContext,
});

const apolloServerHandler = server.createHandler({
  path: "/api/graphql",
});

export default apolloServerHandler;

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
