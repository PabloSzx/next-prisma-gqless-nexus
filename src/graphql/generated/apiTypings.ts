import { Context } from "@pages/api/graphql";

import { core } from "@nexus/schema";
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    dateTime<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<
        core.GetGen3<"inputTypes", TypeName, FieldName>
      >
    ): void; // "DateTime";
    nonNegativeInt<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<
        core.GetGen3<"inputTypes", TypeName, FieldName>
      >
    ): void; // "NonNegativeInt";
    positiveInt<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<
        core.GetGen3<"inputTypes", TypeName, FieldName>
      >
    ): void; // "PositiveInt";
    url<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<
        core.GetGen3<"inputTypes", TypeName, FieldName>
      >
    ): void; // "URL";
    emailAddress<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<
        core.GetGen3<"inputTypes", TypeName, FieldName>
      >
    ): void; // "EmailAddress";
    json<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<
        core.GetGen3<"inputTypes", TypeName, FieldName>
      >
    ): void; // "JSON";
    jsonObject<FieldName extends string>(
      fieldName: FieldName,
      opts?: core.ScalarInputFieldConfig<
        core.GetGen3<"inputTypes", TypeName, FieldName>
      >
    ): void; // "JSONObject";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    dateTime<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "DateTime";
    nonNegativeInt<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "NonNegativeInt";
    positiveInt<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "PositiveInt";
    url<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "URL";
    emailAddress<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "EmailAddress";
    json<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "JSON";
    jsonObject<FieldName extends string>(
      fieldName: FieldName,
      ...opts: core.ScalarOutSpread<TypeName, FieldName>
    ): void; // "JSONObject";
  }
}
declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, "crud">;
    model: NexusPrisma<TypeName, "model">;
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CategoryCreateInput: {
    // input type
    name: string; // String!
    posts?: NexusGenInputs["PostCreateManyWithoutCategoriesInput"] | null; // PostCreateManyWithoutCategoriesInput
  };
  CategoryCreateManyWithoutPostsInput: {
    // input type
    connect?: NexusGenInputs["CategoryWhereUniqueInput"][] | null; // [CategoryWhereUniqueInput!]
    create?: NexusGenInputs["CategoryCreateWithoutPostsInput"][] | null; // [CategoryCreateWithoutPostsInput!]
  };
  CategoryCreateWithoutPostsInput: {
    // input type
    name: string; // String!
  };
  CategoryWhereUniqueInput: {
    // input type
    id?: number | null; // Int
  };
  PostCreateManyWithoutAuthorInput: {
    // input type
    connect?: NexusGenInputs["PostWhereUniqueInput"][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs["PostCreateWithoutAuthorInput"][] | null; // [PostCreateWithoutAuthorInput!]
  };
  PostCreateManyWithoutCategoriesInput: {
    // input type
    connect?: NexusGenInputs["PostWhereUniqueInput"][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs["PostCreateWithoutCategoriesInput"][] | null; // [PostCreateWithoutCategoriesInput!]
  };
  PostCreateWithoutAuthorInput: {
    // input type
    categories?: NexusGenInputs["CategoryCreateManyWithoutPostsInput"] | null; // CategoryCreateManyWithoutPostsInput
    createdAt?: Date | null; // DateTime
    published?: boolean | null; // Boolean
    title: string; // String!
  };
  PostCreateWithoutCategoriesInput: {
    // input type
    author: NexusGenInputs["UserCreateOneWithoutPostsInput"]; // UserCreateOneWithoutPostsInput!
    createdAt?: Date | null; // DateTime
    published?: boolean | null; // Boolean
    title: string; // String!
  };
  PostWhereUniqueInput: {
    // input type
    id?: number | null; // Int
  };
  ProfileCreateInput: {
    // input type
    bio: string; // String!
    user: NexusGenInputs["UserCreateOneWithoutProfileInput"]; // UserCreateOneWithoutProfileInput!
  };
  ProfileCreateOneWithoutUserInput: {
    // input type
    connect?: NexusGenInputs["ProfileWhereUniqueInput"] | null; // ProfileWhereUniqueInput
    create?: NexusGenInputs["ProfileCreateWithoutUserInput"] | null; // ProfileCreateWithoutUserInput
  };
  ProfileCreateWithoutUserInput: {
    // input type
    bio: string; // String!
  };
  ProfileWhereUniqueInput: {
    // input type
    id?: number | null; // Int
  };
  UserCreateInput: {
    // input type
    email: string; // String!
    name?: string | null; // String
    posts?: NexusGenInputs["PostCreateManyWithoutAuthorInput"] | null; // PostCreateManyWithoutAuthorInput
    profile?: NexusGenInputs["ProfileCreateOneWithoutUserInput"] | null; // ProfileCreateOneWithoutUserInput
    role?: NexusGenEnums["Role"] | null; // Role
  };
  UserCreateOneWithoutPostsInput: {
    // input type
    connect?: NexusGenInputs["UserWhereUniqueInput"] | null; // UserWhereUniqueInput
    create?: NexusGenInputs["UserCreateWithoutPostsInput"] | null; // UserCreateWithoutPostsInput
  };
  UserCreateOneWithoutProfileInput: {
    // input type
    connect?: NexusGenInputs["UserWhereUniqueInput"] | null; // UserWhereUniqueInput
    create?: NexusGenInputs["UserCreateWithoutProfileInput"] | null; // UserCreateWithoutProfileInput
  };
  UserCreateWithoutPostsInput: {
    // input type
    email: string; // String!
    name?: string | null; // String
    profile?: NexusGenInputs["ProfileCreateOneWithoutUserInput"] | null; // ProfileCreateOneWithoutUserInput
    role?: NexusGenEnums["Role"] | null; // Role
  };
  UserCreateWithoutProfileInput: {
    // input type
    email: string; // String!
    name?: string | null; // String
    posts?: NexusGenInputs["PostCreateManyWithoutAuthorInput"] | null; // PostCreateManyWithoutAuthorInput
    role?: NexusGenEnums["Role"] | null; // Role
  };
  UserWhereUniqueInput: {
    // input type
    email?: string | null; // String
    id?: number | null; // Int
  };
}

export interface NexusGenEnums {
  Role: "ADMIN" | "USER";
}

export interface NexusGenRootTypes {
  Category: {
    // root type
    id: number; // Int!
    name: string; // String!
  };
  Mutation: {};
  Post: {
    // root type
    authorId: number; // Int!
    createdAt: Date; // DateTime!
    id: number; // Int!
    published: boolean; // Boolean!
    title: string; // String!
  };
  Profile: {
    // root type
    bio: string; // String!
    id: number; // Int!
    userId: number; // Int!
  };
  Query: {};
  User: {
    // root type
    email: string; // String!
    id: number; // Int!
    name?: string | null; // String
    role: NexusGenEnums["Role"]; // Role!
  };
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: Date;
  EmailAddress: any;
  JSON: any;
  JSONObject: any;
  NonNegativeInt: number;
  PositiveInt: number;
  URL: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CategoryCreateInput: NexusGenInputs["CategoryCreateInput"];
  CategoryCreateManyWithoutPostsInput: NexusGenInputs["CategoryCreateManyWithoutPostsInput"];
  CategoryCreateWithoutPostsInput: NexusGenInputs["CategoryCreateWithoutPostsInput"];
  CategoryWhereUniqueInput: NexusGenInputs["CategoryWhereUniqueInput"];
  PostCreateManyWithoutAuthorInput: NexusGenInputs["PostCreateManyWithoutAuthorInput"];
  PostCreateManyWithoutCategoriesInput: NexusGenInputs["PostCreateManyWithoutCategoriesInput"];
  PostCreateWithoutAuthorInput: NexusGenInputs["PostCreateWithoutAuthorInput"];
  PostCreateWithoutCategoriesInput: NexusGenInputs["PostCreateWithoutCategoriesInput"];
  PostWhereUniqueInput: NexusGenInputs["PostWhereUniqueInput"];
  ProfileCreateInput: NexusGenInputs["ProfileCreateInput"];
  ProfileCreateOneWithoutUserInput: NexusGenInputs["ProfileCreateOneWithoutUserInput"];
  ProfileCreateWithoutUserInput: NexusGenInputs["ProfileCreateWithoutUserInput"];
  ProfileWhereUniqueInput: NexusGenInputs["ProfileWhereUniqueInput"];
  UserCreateInput: NexusGenInputs["UserCreateInput"];
  UserCreateOneWithoutPostsInput: NexusGenInputs["UserCreateOneWithoutPostsInput"];
  UserCreateOneWithoutProfileInput: NexusGenInputs["UserCreateOneWithoutProfileInput"];
  UserCreateWithoutPostsInput: NexusGenInputs["UserCreateWithoutPostsInput"];
  UserCreateWithoutProfileInput: NexusGenInputs["UserCreateWithoutProfileInput"];
  UserWhereUniqueInput: NexusGenInputs["UserWhereUniqueInput"];
  Role: NexusGenEnums["Role"];
}

export interface NexusGenFieldTypes {
  Category: {
    // field return type
    id: number; // Int!
    name: string; // String!
    posts: NexusGenRootTypes["Post"][]; // [Post!]!
  };
  Mutation: {
    // field return type
    createOneCategory: NexusGenRootTypes["Category"]; // Category!
    createOneProfile: NexusGenRootTypes["Profile"]; // Profile!
    createOneUser: NexusGenRootTypes["User"]; // User!
    ok: boolean; // Boolean!
  };
  Post: {
    // field return type
    author: NexusGenRootTypes["User"]; // User!
    authorId: number; // Int!
    categories: NexusGenRootTypes["Category"][]; // [Category!]!
    createdAt: Date; // DateTime!
    id: number; // Int!
    published: boolean; // Boolean!
    title: string; // String!
  };
  Profile: {
    // field return type
    bio: string; // String!
    id: number; // Int!
    user: NexusGenRootTypes["User"]; // User!
    userId: number; // Int!
  };
  Query: {
    // field return type
    ok: boolean; // Boolean!
    posts: NexusGenRootTypes["Post"][]; // [Post!]!
    profiles: NexusGenRootTypes["Profile"][]; // [Profile!]!
    users: NexusGenRootTypes["User"][]; // [User!]!
  };
  User: {
    // field return type
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
    posts: NexusGenRootTypes["Post"][]; // [Post!]!
    profile: NexusGenRootTypes["Profile"] | null; // Profile
    role: NexusGenEnums["Role"]; // Role!
  };
}

export interface NexusGenArgTypes {
  Category: {
    posts: {
      // args
      skip: number; // Int!
    };
  };
  Mutation: {
    createOneCategory: {
      // args
      data: NexusGenInputs["CategoryCreateInput"]; // CategoryCreateInput!
    };
    createOneProfile: {
      // args
      data: NexusGenInputs["ProfileCreateInput"]; // ProfileCreateInput!
    };
    createOneUser: {
      // args
      data: NexusGenInputs["UserCreateInput"]; // UserCreateInput!
    };
  };
  Post: {
    categories: {
      // args
      skip: number; // Int!
    };
  };
  User: {
    posts: {
      // args
      skip: number; // Int!
    };
  };
}

export interface NexusGenAbstractResolveReturnTypes {}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames =
  | "Category"
  | "Mutation"
  | "Post"
  | "Profile"
  | "Query"
  | "User";

export type NexusGenInputNames =
  | "CategoryCreateInput"
  | "CategoryCreateManyWithoutPostsInput"
  | "CategoryCreateWithoutPostsInput"
  | "CategoryWhereUniqueInput"
  | "PostCreateManyWithoutAuthorInput"
  | "PostCreateManyWithoutCategoriesInput"
  | "PostCreateWithoutAuthorInput"
  | "PostCreateWithoutCategoriesInput"
  | "PostWhereUniqueInput"
  | "ProfileCreateInput"
  | "ProfileCreateOneWithoutUserInput"
  | "ProfileCreateWithoutUserInput"
  | "ProfileWhereUniqueInput"
  | "UserCreateInput"
  | "UserCreateOneWithoutPostsInput"
  | "UserCreateOneWithoutProfileInput"
  | "UserCreateWithoutPostsInput"
  | "UserCreateWithoutProfileInput"
  | "UserWhereUniqueInput";

export type NexusGenEnumNames = "Role";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames =
  | "Boolean"
  | "DateTime"
  | "EmailAddress"
  | "Float"
  | "ID"
  | "Int"
  | "JSON"
  | "JSONObject"
  | "NonNegativeInt"
  | "PositiveInt"
  | "String"
  | "URL";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes:
    | NexusGenTypes["inputNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["scalarNames"];
  allOutputTypes:
    | NexusGenTypes["objectNames"]
    | NexusGenTypes["enumNames"]
    | NexusGenTypes["unionNames"]
    | NexusGenTypes["interfaceNames"]
    | NexusGenTypes["scalarNames"];
  allNamedTypes:
    | NexusGenTypes["allInputTypes"]
    | NexusGenTypes["allOutputTypes"];
  abstractTypes: NexusGenTypes["interfaceNames"] | NexusGenTypes["unionNames"];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<
    TypeName extends string,
    FieldName extends string
  > {}
  interface NexusGenPluginSchemaConfig {}
}
