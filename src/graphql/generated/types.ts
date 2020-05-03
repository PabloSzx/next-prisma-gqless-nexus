import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  ScalarType,
  FieldsTypeArg,
  EnumType,
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;
    profiles: t_Profile[];
    users: t_User[];
    posts: t_Post[];
    ok: t_Boolean;
  },
  Extension<"Query">
>;

/**
 * @name Profile
 * @type OBJECT
 */
type t_Profile = FieldsType<
  {
    __typename: t_String<"Profile">;
    bio: t_String;
    id: t_Int;
    user: t_User;
    userId: t_Int;
  },
  Extension<"Profile">
>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name User
 * @type OBJECT
 */
type t_User = FieldsType<
  {
    __typename: t_String<"User">;
    profile?: t_Profile | null;
    role: t_Role;
    id: t_Int;
    email: t_String;
    name?: t_String | null;
    posts: FieldsTypeArg<
      {
        skip: number;
        after?: PostWhereUniqueInput | null;
        before?: PostWhereUniqueInput | null;
        first: number;
        last: number;
      },
      t_Post[]
    >;
  },
  Extension<"User">
>;

/**
 * @name Role
 * @type ENUM
 */
type t_Role = EnumType<"USER" | "ADMIN">;

/**
 * @name PostWhereUniqueInput
 * @type INPUT_OBJECT
 */
export type PostWhereUniqueInput = { id?: number | null };

/**
 * @name Post
 * @type OBJECT
 */
type t_Post = FieldsType<
  {
    __typename: t_String<"Post">;
    id: t_Int;
    title: t_String;
    author: t_User;
    authorId: t_Int;
    categories: FieldsTypeArg<
      {
        skip: number;
        after?: CategoryWhereUniqueInput | null;
        before?: CategoryWhereUniqueInput | null;
        first: number;
        last: number;
      },
      t_Category[]
    >;
    createdAt: t_DateTime;
    published: t_Boolean;
  },
  Extension<"Post">
>;

/**
 * @name CategoryWhereUniqueInput
 * @type INPUT_OBJECT
 */
export type CategoryWhereUniqueInput = { id?: number | null };

/**
 * @name Category
 * @type OBJECT
 */
type t_Category = FieldsType<
  {
    __typename: t_String<"Category">;
    id: t_Int;
    name: t_String;
    posts: FieldsTypeArg<
      {
        skip: number;
        after?: PostWhereUniqueInput | null;
        before?: PostWhereUniqueInput | null;
        first: number;
        last: number;
      },
      t_Post[]
    >;
  },
  Extension<"Category">
>;

/**
 * @name DateTime
 * @type SCALAR
 */
type t_DateTime<T extends any = any> = ScalarType<T, Extension<"DateTime">>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<"Mutation">;
    createOneUser: FieldsTypeArg<{ data: UserCreateInput }, t_User>;
    createOneCategory: FieldsTypeArg<{ data: CategoryCreateInput }, t_Category>;
    createOneProfile: FieldsTypeArg<{ data: ProfileCreateInput }, t_Profile>;
    ok: t_Boolean;
  },
  Extension<"Mutation">
>;

/**
 * @name UserCreateInput
 * @type INPUT_OBJECT
 */
export type UserCreateInput = {
  email: string;
  name?: string | null;
  role?: Role | null;
  posts?: PostCreateManyWithoutAuthorInput | null;
  profile?: ProfileCreateOneWithoutUserInput | null;
};

/**
 * @name PostCreateManyWithoutAuthorInput
 * @type INPUT_OBJECT
 */
export type PostCreateManyWithoutAuthorInput = {
  create?: PostCreateWithoutAuthorInput[] | null;
  connect?: PostWhereUniqueInput[] | null;
};

/**
 * @name PostCreateWithoutAuthorInput
 * @type INPUT_OBJECT
 */
export type PostCreateWithoutAuthorInput = {
  createdAt?: any | null;
  title: string;
  published?: boolean | null;
  categories?: CategoryCreateManyWithoutPostsInput | null;
};

/**
 * @name CategoryCreateManyWithoutPostsInput
 * @type INPUT_OBJECT
 */
export type CategoryCreateManyWithoutPostsInput = {
  create?: CategoryCreateWithoutPostsInput[] | null;
  connect?: CategoryWhereUniqueInput[] | null;
};

/**
 * @name CategoryCreateWithoutPostsInput
 * @type INPUT_OBJECT
 */
export type CategoryCreateWithoutPostsInput = { name: string };

/**
 * @name ProfileCreateOneWithoutUserInput
 * @type INPUT_OBJECT
 */
export type ProfileCreateOneWithoutUserInput = {
  create?: ProfileCreateWithoutUserInput | null;
  connect?: ProfileWhereUniqueInput | null;
};

/**
 * @name ProfileCreateWithoutUserInput
 * @type INPUT_OBJECT
 */
export type ProfileCreateWithoutUserInput = { bio: string };

/**
 * @name ProfileWhereUniqueInput
 * @type INPUT_OBJECT
 */
export type ProfileWhereUniqueInput = { id?: number | null };

/**
 * @name CategoryCreateInput
 * @type INPUT_OBJECT
 */
export type CategoryCreateInput = {
  name: string;
  posts?: PostCreateManyWithoutCategoriesInput | null;
};

/**
 * @name PostCreateManyWithoutCategoriesInput
 * @type INPUT_OBJECT
 */
export type PostCreateManyWithoutCategoriesInput = {
  create?: PostCreateWithoutCategoriesInput[] | null;
  connect?: PostWhereUniqueInput[] | null;
};

/**
 * @name PostCreateWithoutCategoriesInput
 * @type INPUT_OBJECT
 */
export type PostCreateWithoutCategoriesInput = {
  createdAt?: any | null;
  title: string;
  published?: boolean | null;
  author: UserCreateOneWithoutPostsInput;
};

/**
 * @name UserCreateOneWithoutPostsInput
 * @type INPUT_OBJECT
 */
export type UserCreateOneWithoutPostsInput = {
  create?: UserCreateWithoutPostsInput | null;
  connect?: UserWhereUniqueInput | null;
};

/**
 * @name UserCreateWithoutPostsInput
 * @type INPUT_OBJECT
 */
export type UserCreateWithoutPostsInput = {
  email: string;
  name?: string | null;
  role?: Role | null;
  profile?: ProfileCreateOneWithoutUserInput | null;
};

/**
 * @name UserWhereUniqueInput
 * @type INPUT_OBJECT
 */
export type UserWhereUniqueInput = {
  id?: number | null;
  email?: string | null;
};

/**
 * @name ProfileCreateInput
 * @type INPUT_OBJECT
 */
export type ProfileCreateInput = {
  bio: string;
  user: UserCreateOneWithoutProfileInput;
};

/**
 * @name UserCreateOneWithoutProfileInput
 * @type INPUT_OBJECT
 */
export type UserCreateOneWithoutProfileInput = {
  create?: UserCreateWithoutProfileInput | null;
  connect?: UserWhereUniqueInput | null;
};

/**
 * @name UserCreateWithoutProfileInput
 * @type INPUT_OBJECT
 */
export type UserCreateWithoutProfileInput = {
  email: string;
  name?: string | null;
  role?: Role | null;
  posts?: PostCreateManyWithoutAuthorInput | null;
};

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    kind: t___TypeKind;
    name?: t_String | null;
    description?: t_String | null;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces?: t___Type[] | null;
    possibleTypes?: t___Type[] | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields?: t___InputValue[] | null;
    ofType?: t___Type | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description?: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    name: t_String;
    description?: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: t_String | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "VARIABLE_DEFINITION"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name NonNegativeInt
 * @type SCALAR
 */
type t_NonNegativeInt<T extends any = any> = ScalarType<
  T,
  Extension<"NonNegativeInt">
>;

/**
 * @name PositiveInt
 * @type SCALAR
 */
type t_PositiveInt<T extends any = any> = ScalarType<
  T,
  Extension<"PositiveInt">
>;

/**
 * @name URL
 * @type SCALAR
 */
type t_URL<T extends any = any> = ScalarType<T, Extension<"URL">>;

/**
 * @name EmailAddress
 * @type SCALAR
 */
type t_EmailAddress<T extends any = any> = ScalarType<
  T,
  Extension<"EmailAddress">
>;

/**
 * @name JSON
 * @type SCALAR
 */
type t_JSON<T extends { [K: string]: any } = { [K: string]: any }> = ScalarType<
  T,
  Extension<"JSON">
>;

/**
 * @name JSONObject
 * @type SCALAR
 */
type t_JSONObject<T extends any = any> = ScalarType<T, Extension<"JSONObject">>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name Profile
 * @type OBJECT
 */
export type Profile = TypeData<t_Profile>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name User
 * @type OBJECT
 */
export type User = TypeData<t_User>;

/**
 * @name Role
 * @type ENUM
 */
export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

/**
 * @name Post
 * @type OBJECT
 */
export type Post = TypeData<t_Post>;

/**
 * @name Category
 * @type OBJECT
 */
export type Category = TypeData<t_Category>;

/**
 * @name DateTime
 * @type SCALAR
 */
export type DateTime = TypeData<t_DateTime>;

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  LIST = "LIST",
  NON_NULL = "NON_NULL",
}

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  QUERY = "QUERY",
  MUTATION = "MUTATION",
  SUBSCRIPTION = "SUBSCRIPTION",
  FIELD = "FIELD",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  VARIABLE_DEFINITION = "VARIABLE_DEFINITION",
  SCHEMA = "SCHEMA",
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  INPUT_OBJECT = "INPUT_OBJECT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION",
}

/**
 * @name NonNegativeInt
 * @type SCALAR
 */
export type NonNegativeInt = TypeData<t_NonNegativeInt>;

/**
 * @name PositiveInt
 * @type SCALAR
 */
export type PositiveInt = TypeData<t_PositiveInt>;

/**
 * @name URL
 * @type SCALAR
 */
export type URL = TypeData<t_URL>;

/**
 * @name EmailAddress
 * @type SCALAR
 */
export type EmailAddress = TypeData<t_EmailAddress>;

/**
 * @name JSON
 * @type SCALAR
 */
export type JSON = TypeData<t_JSON>;

/**
 * @name JSONObject
 * @type SCALAR
 */
export type JSONObject = TypeData<t_JSONObject>;
