export default defineAppConfig({
  pages: ["pages/index/index", "pages/center/index", "pages/order/index", "pages/goods/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    // custom: true, // 仅 微信小程序支持自定义 需修改 custom-tab-bar 组件
    color: "#555",
    selectedColor: "#222",
    backgroundColor: "#FFF",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/order/index",
        text: "订单",
      },
      {
        pagePath: "pages/center/index",
        text: "我的",
      },
    ],
  },
});
