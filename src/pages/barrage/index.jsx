import { useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtFloatLayout } from "taro-ui";
import "taro-ui/dist/style/index.scss";

import "./index.scss";

export default () => {
  const [visible, setVisible] = useState(false);
  // const barrageList = ["画美不看画美不看画美不看画美不看"];
  return (
    <View className="barrage-page">
      <View className="barrage-container">欢迎郭老师来日</View>
      <View className="circle-img-wrap" onClick={() => setVisible(true)}></View>
      <AtFloatLayout
        isOpened={visible}
        title="弹幕设置"
        onClose={() => setVisible(false)}
      >
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    </View>
  );
};
