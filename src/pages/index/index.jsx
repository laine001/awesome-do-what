// import { Component } from 'react'
// import { connect } from 'react-redux'
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { CoverView, CoverImage } from "@tarojs/components";
import "./index.scss";

// const selectedColor = "#DC143C";
// const color = "#000000";

const res = Taro.getSystemInfoSync()
const themeMode = res.theme
console.log(themeMode, 'themeMode')

export default () => {
  const [theme, setTheme] = useState(themeMode)
  const list = [
    {
      pagePath: "/pages/emoji/index",
      // selectedIconPath: "../images/tabbar_home_on.png",
      // iconPath: '../images/tabbar_home.png',
      text: "表情包",
    },
    {
      pagePath: "/pages/weight/index",
      // selectedIconPath: "../images/tabbar_cate_on.png",
      // iconPath: '../images/tabbar_cate.png',
      text: "记体重",
    },
    {
      pagePath: "/pages/barrage/index",
      // selectedIconPath: "../images/tabbar_cate_on.png",
      // iconPath: '../images/tabbar_cate.png',
      text: "手持弹幕",
    },
  ];
  const nav2page = (item) => {
    Taro.navigateTo({
      url: item.pagePath,
    });
  };
  const computedClassNames = () => {
    if (theme === 'light') {
      return 'index-page'
    }
    else if (theme === 'dark') {
      return 'index-page is-dark'
      // return 'index-page'
    }
   };
  return (
    <View className={computedClassNames()}>
      <View className="bg"></View>
      <View className="nav-list">
        {
          list.map((item, index) => {
            return (
              <View key={index} className="nav-btn" onClick={() => nav2page(item)}>
                {item.text}
              </View>
            );
          })
        }
      </View>
      {/* <CoverView className="tab-bar">
        <CoverView className="tab-bar-border"></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView
              key={index}
              className="tab-bar-item"
              onClick={() => switchTab(index, item.pagePath)}
            >
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
              <CoverView
                style={{
                  color: selectedIndex === index ? selectedColor : color,
                }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </CoverView> */}
    </View>
  );
};
// import { add, minus, asyncAdd } from '../../actions/counter'

// import './index.scss'

// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
// class Index extends Component {
//   componentWillReceiveProps (nextProps) {
//     console.log(this.props, nextProps)
//   }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Button className='add_btn' onClick={this.props.add}>+</Button>
//         <Button className='dec_btn' onClick={this.props.dec}>-</Button>
//         <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
//         <View><Text>{this.props.counter.num}</Text></View>
//         <View><Text>Hello, World</Text></View>
//       </View>
//     )
//   }
// }

// export default Index
