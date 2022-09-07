import { View } from "@tarojs/components";
import { switchTab, navigateBack } from "@tarojs/taro";

definePageConfig({
  navigationBarTitleText: "商品页",
});

const Center = () => {
  const navBackToHome = () => {
    if (process.env.TARO_ENV === "h5") {
      switchTab({ url: "pages/index/index" });
      // navigateBack();
    } else {
      switchTab({ url: "pages/index/index" });
    }
  };

  return (
    <View>
      <View>商品页</View>
      <View onClick={navBackToHome}>点击返回首页</View>
    </View>
  );
};

export default Center;
