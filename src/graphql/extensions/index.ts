export const Query = {};

export declare const DateTime: string;

export declare const PositiveInt: number;
export declare const NonNegativeInt: number;
export declare const URL: string;
export declare const JSONObject: Record<string, any>;
export declare const JSON: any;
export declare const EmailAddress: string;

/**
 * Add a key to a type
 */
// export const User = {
//   [GET_KEY]: (user) => user.id
// }

/**
 * Add custom data to a type
 * @example
 * query.users[0].follow()
 */
// export const User = (user) => ({
//   follow() {
//     console.log('follow', user.id)
//   }
// })
