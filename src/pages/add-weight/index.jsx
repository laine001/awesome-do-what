import { useState } from 'react';
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtCalendar, AtFloatLayout } from 'taro-ui'
import "taro-ui/dist/style/index.scss";
import './index.scss'

export default () => {
  const [openValue, setOpenValue] = useState(false)
  const open = () => {
    setOpenValue(true)
  }
  return (
    <View className="add-weight-page">
      <AtForm className="weight-form">
        <AtInput
          name='height'
          title='📏 身高'
          type='text'
          placeholder='单位是cm哦~'
        />
        <AtInput
          name='weight'
          title={<View>⚖️&nbsp;体重</View>}
          type='text'
          placeholder='单位是kg哦~'
        />
        <AtInput
          name='date'
          title='📅 日期'
          type='text'
          // editable={false}
          placeholder='单行文本'
          onClick={open.bind(this)}
        />
        <AtInput
          name='bmi'
          title='🤔 BMI'
          type='text'
          placeholder='单行文本'
        />
        <AtButton formType='submit'>提交</AtButton>
        {/* <AtButton formType='reset'>重置</AtButton> */}
      </AtForm>
      <AtFloatLayout isOpened={openValue} title='日历'>
        <AtCalendar />
      </AtFloatLayout>
    </View>
  )
}