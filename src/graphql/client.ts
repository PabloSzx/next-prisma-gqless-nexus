import { schema, Query, Mutation } from "./generated";

import { createUseQuery, createUseMutation } from "gqless-hooks";

const endpoint = "http://localhost:3000/api/graphql";

export const useQuery = createUseQuery<Query>({
  schema,
  endpoint
});

export const useMutation = createUseMutation<Mutation>({
  schema,
  endpoint
});
