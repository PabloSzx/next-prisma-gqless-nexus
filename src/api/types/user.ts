import { objectType } from "@nexus/schema";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.profile();
    t.model.role();
    t.model.id();
    t.model.email();
    t.model.name();
    t.model.posts();
  },
});
