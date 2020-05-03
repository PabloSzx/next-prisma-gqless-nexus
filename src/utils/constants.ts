export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const PWD = process.env.PWD || "";
export const IS_BROWSER = typeof window !== "undefined";
