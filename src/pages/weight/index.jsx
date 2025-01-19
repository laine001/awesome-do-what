import { View, Image, Text } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtFab } from 'taro-ui'
import Taro from '@tarojs/taro';
import "taro-ui/dist/style/index.scss";
import "./index.scss";

export default () => {
  const int = useState(34)
  const float = useState(89)
  //跳转新增体重页面
  const addWeight = () => {
    Taro.navigateTo({
      url: '/pages/add-weight/index',
    })
  }
  return (
    <View className='page'>
      <View className='current-container'>
        <View className="top-container-bg"></View>
        <View style={{ marginTop: 70 }}>
          <View className='current-info'>
            <View className='current-info-item'>
              <View>体脂率</View>
              <View>20%</View>
            </View>
            <View className='current-info-kg'>
              <View className='current-info-kg-unit'>公斤</View>
              <View>
                <Text className='current-info-int'>{int}</Text>
                <Text>.</Text>
                <Text className='current-info-float'>{float}</Text>
              </View>
            </View>
            <View className='current-info-bmi'>
              <View>BMI</View>
              <View>{int}</View>
            </View>
          </View>
          <View className='current-info-tips'>你已经瘦了1公斤了，加油</View>
        </View>
      </View>

      <View>
        <AtFab className='fab-container' onClick={addWeight}>
          <Text className='at-fab__icon at-icon at-icon-add'></Text>
        </AtFab>
      </View>
    </View>
  )
}