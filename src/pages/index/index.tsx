import { useEffect, useRef, useState, useReducer } from "react";
import { useUpdate } from "ahooks";
import { Input, View } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";

definePageConfig({
  navigationBarTitleText: "首页",
});

class Color {
  color: string;

  constructor(value: string) {
    this.color = value;
  }

  setColor(value: string) {
    this.color = value;
  }

  getColor() {
    return `#${this.color}`;
  }
}

const colorClass = new Color("fff");

function reducer(state: string, action: "change") {
  console.log("state ---> ", state);
  if (action === "change") {
    colorClass.setColor("ddd");
  }
  return colorClass.getColor();
}

const Center = () => {
  const onClick = () => {
    window.location.href = "https://www.baidu.com";
  };

  // const forceUpdate = useUpdate();
  // const { current: colorClass } = useRef(new Color("fff"));
  // const [color, setColor] = useState("#fff");
  const [state, dispatch] = useReducer(reducer, "#fff");

  const navToGoods = () => {
    navigateTo({ url: "pages/goods/index" });
  };

  console.log("render");
  return (
    <View>
      <View className="border-all-r24-cc8c8c8 rounded-24 p-20 py-12 px-20 right-0 bottom-10 text-24 text-555 !p-10">
        123
      </View>
      <View className="bg-[#ffffff] text-44">Button</View>
      <View className="bg-[#b2a8bb] text-[#fff] whitespace-normal">456</View>
      <View onClick={onClick}>点击跳转</View>
      <View>
        <View>---------------</View>
        <View>获取颜色{state}</View>
        <View
          onClick={() => {
            // forceUpdate();
            // colorClass.setColor("ddd");
            // setColor(colorClass.getColor());
            dispatch("change");
          }}
        >
          切换颜色
        </View>
      </View>
      <View className="bg-[rgba(0,0,0,1)] h-300 row-center">
        <View className="flex-1">123</View>
        <View className="flex-1">456</View>
        <View className="flex-1">789</View>
      </View>
      <View onClick={navToGoods}>跳转到商品页</View>
    </View>
  );
};

export default Center;
