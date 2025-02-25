export default defineAppConfig({
  usingComponents: {},
  darkmode: true,
  pages: [
    'pages/index/index',
    'pages/weight/index',
    'pages/barrage/index',
    'pages/add-weight/index',
    'pages/emoji/index'
  ],
  window: {
    // navigationStyle: 'custom',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   custom: false,
  //   color: '#333333',
  //   selectedColor: 'red',
  //   backgroundColor: '#f4f5f6',
  //   list: [
  //     {
  //       pagePath: 'pages/emoji/index',
  //       text: '表情包'
  //     },
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '首页'
  //     }
  //   ]
  // }
})
