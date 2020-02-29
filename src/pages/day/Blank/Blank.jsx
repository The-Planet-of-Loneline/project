import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './blank.scss'
import Sun from './imgs/sun.png'

export default class Blank extends Component {

  static defaultProps = {
    
  }

  render () {
    return (
      <View className='blank-container'>
        <Image src={Sun} className='sun' />
        <View className='blank-word'>没有筛出想要的需求哦......</View>
      </View>
    )
  }
}