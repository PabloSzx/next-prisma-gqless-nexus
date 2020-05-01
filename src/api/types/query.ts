import { queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.boolean("ok", {
      resolve() {
        return true;
      },
    });
  },
});
