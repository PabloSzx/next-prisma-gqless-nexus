// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  ScalarNode,
  Arguments,
  ArgumentsField,
  EnumNode,
  InputNode,
  InputNodeField,
} from "gqless";

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get profiles() {
          return new FieldNode(
            new ArrayNode(schema.Profile, false),
            undefined,
            false
          );
        },
        get users() {
          return new FieldNode(
            new ArrayNode(schema.User, false),
            undefined,
            false
          );
        },
        get posts() {
          return new FieldNode(
            new ArrayNode(schema.Post, false),
            undefined,
            false
          );
        },
        get ok() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get Profile() {
    return new ObjectNode(
      {
        get bio() {
          return new FieldNode(schema.String, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get user() {
          return new FieldNode(schema.User, undefined, false);
        },
        get userId() {
          return new FieldNode(schema.Int, undefined, false);
        },
      },
      { name: "Profile", extension: ((extensions as any) || {}).Profile }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String,
    });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int,
    });
  },
  get User() {
    return new ObjectNode(
      {
        get profile() {
          return new FieldNode(schema.Profile, undefined, true);
        },
        get role() {
          return new FieldNode(schema.Role, undefined, false);
        },
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get email() {
          return new FieldNode(schema.String, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get posts() {
          return new FieldNode(
            new ArrayNode(schema.Post, false),
            new Arguments({
              get skip() {
                return new ArgumentsField(schema.Int, false);
              },
              get after() {
                return new ArgumentsField(schema.PostWhereUniqueInput, true);
              },
              get before() {
                return new ArgumentsField(schema.PostWhereUniqueInput, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, false);
              },
              get last() {
                return new ArgumentsField(schema.Int, false);
              },
            }),
            false
          );
        },
      },
      { name: "User", extension: ((extensions as any) || {}).User }
    );
  },
  get Role() {
    return new EnumNode({ name: "Role" });
  },
  get PostWhereUniqueInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: "PostWhereUniqueInput" }
    );
  },
  get Post() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get title() {
          return new FieldNode(schema.String, undefined, false);
        },
        get author() {
          return new FieldNode(schema.User, undefined, false);
        },
        get authorId() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get categories() {
          return new FieldNode(
            new ArrayNode(schema.Category, false),
            new Arguments({
              get skip() {
                return new ArgumentsField(schema.Int, false);
              },
              get after() {
                return new ArgumentsField(
                  schema.CategoryWhereUniqueInput,
                  true
                );
              },
              get before() {
                return new ArgumentsField(
                  schema.CategoryWhereUniqueInput,
                  true
                );
              },
              get first() {
                return new ArgumentsField(schema.Int, false);
              },
              get last() {
                return new ArgumentsField(schema.Int, false);
              },
            }),
            false
          );
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, false);
        },
        get published() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
      },
      { name: "Post", extension: ((extensions as any) || {}).Post }
    );
  },
  get CategoryWhereUniqueInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: "CategoryWhereUniqueInput" }
    );
  },
  get Category() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get posts() {
          return new FieldNode(
            new ArrayNode(schema.Post, false),
            new Arguments({
              get skip() {
                return new ArgumentsField(schema.Int, false);
              },
              get after() {
                return new ArgumentsField(schema.PostWhereUniqueInput, true);
              },
              get before() {
                return new ArgumentsField(schema.PostWhereUniqueInput, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, false);
              },
              get last() {
                return new ArgumentsField(schema.Int, false);
              },
            }),
            false
          );
        },
      },
      { name: "Category", extension: ((extensions as any) || {}).Category }
    );
  },
  get DateTime() {
    return new ScalarNode({
      name: "DateTime",
      extension: ((extensions as any) || {}).DateTime,
    });
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean,
    });
  },
  get Mutation() {
    return new ObjectNode(
      {
        get createOneUser() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get data() {
                  return new ArgumentsField(schema.UserCreateInput, false);
                },
              },
              true
            ),
            false
          );
        },
        get createOneCategory() {
          return new FieldNode(
            schema.Category,
            new Arguments(
              {
                get data() {
                  return new ArgumentsField(schema.CategoryCreateInput, false);
                },
              },
              true
            ),
            false
          );
        },
        get createOneProfile() {
          return new FieldNode(
            schema.Profile,
            new Arguments(
              {
                get data() {
                  return new ArgumentsField(schema.ProfileCreateInput, false);
                },
              },
              true
            ),
            false
          );
        },
        get ok() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
      },
      { name: "Mutation", extension: ((extensions as any) || {}).Mutation }
    );
  },
  get UserCreateInput() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, false);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get role() {
          return new InputNodeField(schema.Role, true);
        },
        get posts() {
          return new InputNodeField(
            schema.PostCreateManyWithoutAuthorInput,
            true
          );
        },
        get profile() {
          return new InputNodeField(
            schema.ProfileCreateOneWithoutUserInput,
            true
          );
        },
      },
      { name: "UserCreateInput" }
    );
  },
  get PostCreateManyWithoutAuthorInput() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(
            new ArrayNode(schema.PostCreateWithoutAuthorInput, true),
            true
          );
        },
        get connect() {
          return new InputNodeField(
            new ArrayNode(schema.PostWhereUniqueInput, true),
            true
          );
        },
      },
      { name: "PostCreateManyWithoutAuthorInput" }
    );
  },
  get PostCreateWithoutAuthorInput() {
    return new InputNode(
      {
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get title() {
          return new InputNodeField(schema.String, false);
        },
        get published() {
          return new InputNodeField(schema.Boolean, true);
        },
        get categories() {
          return new InputNodeField(
            schema.CategoryCreateManyWithoutPostsInput,
            true
          );
        },
      },
      { name: "PostCreateWithoutAuthorInput" }
    );
  },
  get CategoryCreateManyWithoutPostsInput() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(
            new ArrayNode(schema.CategoryCreateWithoutPostsInput, true),
            true
          );
        },
        get connect() {
          return new InputNodeField(
            new ArrayNode(schema.CategoryWhereUniqueInput, true),
            true
          );
        },
      },
      { name: "CategoryCreateManyWithoutPostsInput" }
    );
  },
  get CategoryCreateWithoutPostsInput() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false);
        },
      },
      { name: "CategoryCreateWithoutPostsInput" }
    );
  },
  get ProfileCreateOneWithoutUserInput() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(schema.ProfileCreateWithoutUserInput, true);
        },
        get connect() {
          return new InputNodeField(schema.ProfileWhereUniqueInput, true);
        },
      },
      { name: "ProfileCreateOneWithoutUserInput" }
    );
  },
  get ProfileCreateWithoutUserInput() {
    return new InputNode(
      {
        get bio() {
          return new InputNodeField(schema.String, false);
        },
      },
      { name: "ProfileCreateWithoutUserInput" }
    );
  },
  get ProfileWhereUniqueInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
      },
      { name: "ProfileWhereUniqueInput" }
    );
  },
  get CategoryCreateInput() {
    return new InputNode(
      {
        get name() {
          return new InputNodeField(schema.String, false);
        },
        get posts() {
          return new InputNodeField(
            schema.PostCreateManyWithoutCategoriesInput,
            true
          );
        },
      },
      { name: "CategoryCreateInput" }
    );
  },
  get PostCreateManyWithoutCategoriesInput() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(
            new ArrayNode(schema.PostCreateWithoutCategoriesInput, true),
            true
          );
        },
        get connect() {
          return new InputNodeField(
            new ArrayNode(schema.PostWhereUniqueInput, true),
            true
          );
        },
      },
      { name: "PostCreateManyWithoutCategoriesInput" }
    );
  },
  get PostCreateWithoutCategoriesInput() {
    return new InputNode(
      {
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get title() {
          return new InputNodeField(schema.String, false);
        },
        get published() {
          return new InputNodeField(schema.Boolean, true);
        },
        get author() {
          return new InputNodeField(
            schema.UserCreateOneWithoutPostsInput,
            false
          );
        },
      },
      { name: "PostCreateWithoutCategoriesInput" }
    );
  },
  get UserCreateOneWithoutPostsInput() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(schema.UserCreateWithoutPostsInput, true);
        },
        get connect() {
          return new InputNodeField(schema.UserWhereUniqueInput, true);
        },
      },
      { name: "UserCreateOneWithoutPostsInput" }
    );
  },
  get UserCreateWithoutPostsInput() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, false);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get role() {
          return new InputNodeField(schema.Role, true);
        },
        get profile() {
          return new InputNodeField(
            schema.ProfileCreateOneWithoutUserInput,
            true
          );
        },
      },
      { name: "UserCreateWithoutPostsInput" }
    );
  },
  get UserWhereUniqueInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get email() {
          return new InputNodeField(schema.String, true);
        },
      },
      { name: "UserWhereUniqueInput" }
    );
  },
  get ProfileCreateInput() {
    return new InputNode(
      {
        get bio() {
          return new InputNodeField(schema.String, false);
        },
        get user() {
          return new InputNodeField(
            schema.UserCreateOneWithoutProfileInput,
            false
          );
        },
      },
      { name: "ProfileCreateInput" }
    );
  },
  get UserCreateOneWithoutProfileInput() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(schema.UserCreateWithoutProfileInput, true);
        },
        get connect() {
          return new InputNodeField(schema.UserWhereUniqueInput, true);
        },
      },
      { name: "UserCreateOneWithoutProfileInput" }
    );
  },
  get UserCreateWithoutProfileInput() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, false);
        },
        get name() {
          return new InputNodeField(schema.String, true);
        },
        get role() {
          return new InputNodeField(schema.Role, true);
        },
        get posts() {
          return new InputNodeField(
            schema.PostCreateManyWithoutAuthorInput,
            true
          );
        },
      },
      { name: "UserCreateWithoutProfileInput" }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        },
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              },
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue,
      }
    );
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        },
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue,
      }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive,
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get NonNegativeInt() {
    return new ScalarNode({
      name: "NonNegativeInt",
      extension: ((extensions as any) || {}).NonNegativeInt,
    });
  },
  get PositiveInt() {
    return new ScalarNode({
      name: "PositiveInt",
      extension: ((extensions as any) || {}).PositiveInt,
    });
  },
  get URL() {
    return new ScalarNode({
      name: "URL",
      extension: ((extensions as any) || {}).URL,
    });
  },
  get EmailAddress() {
    return new ScalarNode({
      name: "EmailAddress",
      extension: ((extensions as any) || {}).EmailAddress,
    });
  },
  get JSON() {
    return new ScalarNode({
      name: "JSON",
      extension: ((extensions as any) || {}).JSON,
    });
  },
  get JSONObject() {
    return new ScalarNode({
      name: "JSONObject",
      extension: ((extensions as any) || {}).JSONObject,
    });
  },
};

lazyGetters(schema);
