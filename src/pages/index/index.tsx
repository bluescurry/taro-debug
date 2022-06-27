import { View } from "@tarojs/components";

definePageConfig({
  navigationBarTitleText: "首页",
});

const Center = () => {
  const onClick = () => {
    window.location.href = "https://www.baidu.com";
  };

  return (
    <View>
      <View>123</View>
      <View onClick={onClick}>点击跳转</View>
    </View>
  );
};

export default Center;
