import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './footerDay.scss'
import Switch from'../img/switch.png'
import MyOn from '../img/my-on.png'
import MyOff from '../img/my-off.png'
import SqrOn from '../img/sqr-on.png'
import SqrOff from '../img/sqr-off.png'

export default class FooterDay extends Component {

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

  toNight() {
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  } 


  toMy () {
   
  }

  toNeed () {
   
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
        <Image src={Switch} className='switch' onClick={this.toNight.bind(this)} />
        <View className='s-logo' onClick={this.toMy}>
          <Image src={this.changeMode()?MyOn:MyOff} className='s-img' />
          <View className={modeMy}>我的</View>
        </View>
      </View>
    )
  }
}
