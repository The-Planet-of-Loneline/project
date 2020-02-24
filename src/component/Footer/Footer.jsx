import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './footer.scss'
import Switch from'./imgs/switch.png'
import MyOn from './imgs/my-on.png'
import MyOff from './imgs/my-off.png'
import SqrOn from './imgs/sqr-on.png'
import SqrOff from './imgs/sqr-off.png'

export default class Footer extends Component {

  static defaultProps={
    mode:'need'
    // my 选中我的
    // need 选中需求广场（默认）
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toNight () {
    Taro.redirectTo({
      url: '/pages/daySwitch/daySwitch?to=nighthome'
    })
  }

  toMy () {
    if (this.props.mode==='my') { return undefined }
    Taro.redirectTo({
      url:'../my/my'
    })
  }

  toNeed () {
    if (this.props.mode==='need') { return undefined }
    Taro.redirectTo({
      url:'../day/day'
    })
  }

  changeMode () {
    if (this.props.mode==='my'){
      this.setState({
        modeNeed:'need-off word',
        modeMy:'my-on word'
      })
      return 1;
    } else {
      this.setState({
        modeNeed:'need-on word',
        modeMy:'my-off word'
      })
      return 0;
    }
  }

  render () {
    const { modeNeed, modeMy } = this.state;
    return (     
      <View className='footer'>
        <View className='s-logo' onClick={this.toNeed}>
          <Image src={this.changeMode()?SqrOff:SqrOn} className='s-img' />
          <View className={modeNeed}>需求广场</View>
        </View>
        <Image src={Switch} className='switch' onClick={this.toNight} />
        <View className='s-logo' onClick={this.toMy}>
          <Image src={this.changeMode()?MyOn:MyOff} className='s-img' />
          <View className={modeMy}>我的</View>
        </View>
      </View>
    )
  }
}
