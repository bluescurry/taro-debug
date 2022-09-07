import { defineConfig } from "windicss/helpers";
import path from "path";

const range = (size: number) =>
  Object.fromEntries([...Array(size).keys()].slice(1).map((i) => [`${i}_${size}`, `${(i / size) * 100}%`]));

const generateSpacing = (num: number) => {
  return new Array(num).fill(1).reduce((cur, _next, index) => ({ ...cur, [index]: `${index}px` }), {});
};

module.exports = defineConfig({
  separator: "_",
  compile: false,
  globalUtility: false,
  darkMode: "media",
  attributify: true,
  preflight: false,
  prefixer: false,
  extract: {
    exclude: ["node_modules", ".git", "dist"],
  },
  // important: true,
  corePlugins: {
    container: false,
    space: false,
    divideStyle: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    // 涉及到通配符（*），wx 小程序不支持
    ringWidth: false,
    ringColor: false,
    ringOpacity: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    // web 浏览器相关功能，wx 小程序不支持
    appearance: false,
    cursor: false,
    outline: false,
    placeholderColor: false,
    pointerEvents: false,
    stroke: false,
    tableLayout: false,
    userSelect: false,
    // tabSize 生成的 css 带 '\'，导致小程序编译报错
    tabSize: false,
  },
  // 样式类名黑名单，包含在里面的不会被 windicss 解析，可以用于过滤一些有问题的类名
  blocklist: ["!visible"],
  shortcuts: {
    // #region flex 布局
    row: "flex flex-row",

    "row-x-start": "row justify-start",
    "row-x-center": "row justify-center",
    "row-x-end": "row justify-end",
    "row-x-between": "row justify-between",
    "row-x-around": "row justify-around",
    "row-x-evenly": "row justify-evenly",

    "row-y-start": "row items-start",
    "row-y-center": "row items-center",
    "row-y-end": "row items-end",
    "row-y-baseline": "row items-baseline",
    "row-y-stretch": "row items-stretch",

    "row-center": "row justify-center items-center",

    column: "flex flex-col",

    "column-x-start": "column items-start",
    "column-x-center": "column items-center",
    "column-x-end": "column items-end",
    "column-x-baseline": "column items-baseline",
    "column-x-stretch": "column items-stretch",

    "column-y-start": "column justify-start",
    "column-y-center": "column justify-center",
    "column-y-end": "column justify-end",
    "column-y-between": "column justify-between",
    "column-y-around": "column justify-around",
    "column-y-evenly": "column justify-evenly",

    "column-center": "column justify-center items-center",
    // #endregion
  },
  theme: {
    extend: {
      colors: {
        primary: "#222",
        input: {
          /** 输入框字体颜色 */
          value: "#333a4e",
          placeholder: "#bbb",
        },
        green: {
          theme: "#27AE60",
        },
        blue: {
          theme: "#2F80ED",
        },
        gray: {
          "desc-50": "#f7f8f9",
          "desc-100": "#BDBDBD",
          "desc-200": "#828282",
          "0006": "#00000066",
          "0004": "#00000044",
          f2f: "#f2f2f2",
          f9f: "#f9f9f9",
          979797: "#979797",
          E6E6E6: "#E6E6E6",
          DDD: "#DDD",
        },
        red: {
          primary: "#ff420f",
          old: "#e60000",
          e70: "#E70000",
          fce: "#FCE5E5",
          ffe: "#FFE9E9",
          ff7: "#FF7F7F",
          ff3: "#ff3030",
          FFE6E6: "#FFE6E6",
          FF2424: "#FF2424",
        },
        c3c6cd: "#c3c6cd",
        697185: "#697185",
        222: "#222",
        333: "#333",
        555: "#555",
        888: "#888",
        999: "#999",
        bbb: "#bbb",
        ccc: "#ccc",
        "0F1214": "#0F1214",
        808080: "#808080",
        F2F2F2: "#F2F2F2",
        F7F7F7: "#F7F7F7",
      },
    },
    spacing: {
      ...generateSpacing(301),
    },
    boxShadow: {
      vehicle: "0px 4px 14px 0px #0000001a",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      // primary: '#3490dc',
    }),
    fontSize: (theme) => theme("spacing"),
    borderWidth: (theme) => theme("spacing"),
    lineHeight: (theme) => theme("spacing"),
    translate: (theme) => theme("spacing"),
    inset: (theme) => theme("spacing"),
    borderRadius: (theme) => theme("spacing"),
    width: (theme) => ({
      auto: "auto",
      full: "100%",
      screen: "100vw",
      ...Object.assign(...[2, 3, 4, 5, 6, 12].map(range)),
      ...theme("spacing"),
    }),
    height: (theme) => ({
      auto: "auto",
      full: "100%",
      screen: "100vh",
      ...Object.assign(...[2, 3, 4, 5, 6, 12].map(range)),
      ...theme("spacing"),
      866: "866px",
      1206: "1206px",
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
  },
  variants: {
    backgroundColor: [
      "group-focus-within",
      "group-focus-visible",
      "group-active",
      "group-visited",
      "group-disabled",
      "hocus",
      "group-hocus",
      "can-hover",
      "no-hover",
    ],
  },
  plugins: [
    require("windicss/plugin/line-clamp"),
    require(path.resolve(__dirname, "windicss/plugins/border")),
    require(path.resolve(__dirname, "windicss/plugins/color")),
  ],
});
