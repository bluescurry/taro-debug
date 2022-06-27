/// <reference path="node_modules/@tarojs/taro/types/index.d.ts" />
/// <reference path="./node_modules/@tarojs/plugin-platform-lark/types/shims-lark.d.ts" />

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// @ts-ignore
declare const process: {
  env: {
    TARO_ENV:
      | "weapp"
      | "swan"
      | "alipay"
      | "h5"
      | "rn"
      | "tt"
      | "quickapp"
      | "qq"
      | "jd"
      | "lark";
    [key: string]: any;
  };
};
