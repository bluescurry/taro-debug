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
      <View className="border-all-r24-cc8c8c8 rounded-24 p-20 py-12 px-20 right-0 bottom-10 text-24 text-555 !p-10">
        123
      </View>
      <View className="bg-[#ffffff] text-44">Button</View>
      <View className="bg-[#b2a8bb] text-[#fff] whitespace-normal">456</View>
      <View onClick={onClick}>点击跳转</View>
    </View>
  );
};

export default Center;
