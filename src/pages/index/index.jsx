import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Footer from '../../component/Footer/Footer'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleView: '孤独星球'
  }

  to () {
    Taro.redirectTo({
      url:'../share/share'
    })
  }

  render () {
    return (
      <View>
        {this.to()}
        <Footer mode='need' />
      </View>
    )
  }
}