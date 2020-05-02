import { objectType } from "@nexus/schema";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.posts();
  },
});

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.author();
    t.model.authorId();
    t.model.categories();
    t.model.createdAt();
    t.model.published();
  },
});
