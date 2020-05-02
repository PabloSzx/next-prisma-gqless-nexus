import { shield, allow, rule } from "graphql-shield";

import type { Context } from "@pages/api/graphql";

const isAuthenticated = rule({ cache: "contextual" })(
  (_parent, _args, _ctx: Context, _info) => {
    return false;
  }
);

export const permissions = shield(
  {
    Query: {
      users: allow,
    },
  },
  {
    fallbackRule: allow,
  }
);
