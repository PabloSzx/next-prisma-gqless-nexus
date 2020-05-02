import { GraphQLDateTime } from "graphql-iso-date";
import {
  EmailAddressResolver,
  JSONObjectResolver,
  JSONResolver,
  NonNegativeIntResolver,
  PositiveIntResolver,
  URLResolver,
} from "graphql-scalars";

import { asNexusMethod } from "@nexus/schema";

export const DateTime = asNexusMethod(GraphQLDateTime, "dateTime");
export const NonNegativeInt = asNexusMethod(
  NonNegativeIntResolver,
  "nonNegativeInt"
);
export const PositiveInt = asNexusMethod(PositiveIntResolver, "positiveInt");
export const URLScalar = asNexusMethod(URLResolver, "url");
export const EmailAddress = asNexusMethod(EmailAddressResolver, "emailAddress");
export const JSONScalar = asNexusMethod(JSONResolver, "json");
export const JSONObject = asNexusMethod(JSONObjectResolver, "jsonObject");
