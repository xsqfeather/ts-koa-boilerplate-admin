export const REST_API =
  process.env.NODE_ENV === "production"
    ? "https://apiv1.beingred.com/api"
    : "http://127.0.0.1:8001/api/v1";

export const HOST =
  process.env.NODE_ENV === "production"
    ? "https://apiv1.beingred.com"
    : "http://127.0.0.1:3000";

export const qiniuDOMAIN =
  process.env.NODE_ENV === "production"
    ? "https://videos.beingred.com"
    : "https://videos.beingred.com";
export const APP_KEY = "ABgBJUAzbaJYoudW8hlqfUaoIKKh2aA8";
