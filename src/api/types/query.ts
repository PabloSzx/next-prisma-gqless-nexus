import { queryType } from "@nexus/schema";

export const Query = queryType({
  definition(t) {
    t.list.field("profiles", {
      type: "Profile",
      resolve(_root, _args, ctx) {
        return ctx.prisma.profile.findMany();
      },
    });
    t.list.field("users", {
      type: "User",
      async resolve(_root, _args, ctx) {
        const users = await ctx.prisma.user.findMany();

        return users;
      },
    });

    t.list.field("posts", {
      type: "Post",

      async resolve(_root, _args, ctx) {
        const arrayData = await ctx.prisma.post.findMany();

        return arrayData.map((value) => {
          return {
            ...value,
            id: 123,
          };
        });
      },
    });
    t.boolean("ok", {
      resolve() {
        return true;
      },
    });
  },
});
