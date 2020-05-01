import { ApolloServer } from "apollo-server-micro";

import { IS_DEVELOPMENT } from "../../src/utils/constants";

import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { schema } from "../../src/api/schema";

const buildContext = ({}: { req: NextApiRequest; res: NextApiResponse }) => {
  return {};
};

declare global {
  interface NexusGen {
    context: ReturnType<typeof buildContext>;
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
