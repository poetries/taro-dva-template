import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import './app.scss'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import dva from './utils/dva'
import appModels from './models/index'
import Home from './pages/home/index'


const dvaApp = dva.createApp({
  initialState: {},
  models: appModels,
});

const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  // 全局配置。在页面中配置会覆盖这里
  config = {
    pages: [
      'pages/home/index',
      'pages/demos/cate/index',
      'pages/demos/cart/index',
      'pages/demos/user/index',
      'pages/demos/echarts/echarts',
      'pages/user-login/user-login',
      'pages/user-login-email/user-login-email',
      'pages/webview/webview'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1DBAF1', // rn、微信都 支持
      navigationBarTextStyle: "white", // rn、微信都 支持。只有black、white两种选择
      enablePullDownRefresh: true, // 小程序支持
    },
    tabBar: {
      color: "#bfbfbf",
      selectedColor: "#1DBAF1",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      // 只能配置最少 2 个、最多 5 个 tab
      list: [{
        pagePath: "pages/home/index",
        iconPath: "./assets/tab-bar/home.png", // 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，不支持网络图片。
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      }, {
        pagePath: "pages/demos/cate/index",
        iconPath: "./assets/tab-bar/cate.png",
        selectedIconPath: "./assets/tab-bar/cate-active.png",
        text: "分类"
      }, {
        pagePath: "pages/demos/cart/index",
        iconPath: "./assets/tab-bar/cart.png",
        selectedIconPath: "./assets/tab-bar/cart-active.png",
        text: "购物车"
      }, {
        pagePath: "pages/demos/user/index",
        iconPath: "./assets/tab-bar/user.png",
        selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "个人"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

// RN下去掉黄屏警告 
// https://nervjs.github.io/taro/docs/react-native.html#%E9%BB%84%E5%B1%8F%E8%AD%A6%E5%91%8A
console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

Taro.render(<App />, document.getElementById('app'))
