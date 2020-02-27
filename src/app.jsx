import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/login/login',
      'pages/index/index',
      'pages/day/day',
      'pages/my/my',
      'pages/share/share',
      'pages/myDetail/myDetail',
      'pages/cardDetails/cardDetails',
      'pages/nighthome/nighthome',
      'pages/writeSecret/writeSecret',
      'pages/Mine/Mine',
      'pages/cardHistory/cardHistory',
      'pages/Info/info',
      'pages/edit/edit',
      'pages/daySwitch/daySwitch',
      'pages/commentNight/comment',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '孤独星球',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
