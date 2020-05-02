import { objectType } from "@nexus/schema";

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.model.bio();
    t.model.id();
    t.model.user();
    t.model.userId();
  },
});
