import { useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Popup, Cell } from "@nutui/nutui-react-taro";
import "./index.scss";

export default () => {
  const [popupVisible, setPopupVisible] = useState(false);
  // const barrageList = ["画美不看画美不看画美不看画美不看"];
  return (
    <View className="barrage-page">
      <View className="barrage-container">欢迎郭老师来日</View>
      <View
        className="circle-img-wrap"
        onClick={() => setPopupVisible(true)}
      ></View>
      <Popup
        visible={popupVisible}
        position="bottom"
        onClose={() => {
          setPopupVisible(false);
        }}
        lockScroll
      >
        <Cell
          title="标题"
          value="内容"
          onClick={() => {
            setPopupVisible(false);
          }}
        />
      </Popup>
    </View>
  );
};
