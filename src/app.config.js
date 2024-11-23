export default defineAppConfig({
  usingComponents: {},
  pages: [
    'pages/emoji/index',
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#333333',
    selectedColor: 'red',
    backgroundColor: '#f4f5f6',
    list: [
      {
        pagePath: 'pages/emoji/index',
        text: '表情包'
      },
      {
        pagePath: 'pages/index/index',
        text: '首页'
      }
    ]
  }
})
