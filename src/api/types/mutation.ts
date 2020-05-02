import { mutationType } from "@nexus/schema";

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser();
    t.crud.createOneCategory();
    t.crud.createOneProfile();

    t.boolean("ok", {
      resolve() {
        return true;
      },
    });
  },
});
