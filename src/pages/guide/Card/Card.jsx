import Taro, { Component } from '@tarojs/taro'
import { View,  Image} from '@tarojs/components'
import './Card.scss'
import Refresh from '../imgs/refresh.png'

export default class Card extends Component {
  static defaultProps={
    index:0
  }

  changeColor (index) {
    switch (index) {
      case 0 :return 'card-a'
      case 1 :return 'card-b'
      case 2 :return 'card-c'
      case 3 :return 'card-d'
      case 4 :return 'card-e'
      case 5 :return 'card-f'
    }
  }

  render () {
    const index = this.props.index;
    return (
      <View className={'b-tag '+this.changeColor(index)}>
        <View className='tag-container'>
          <View className='spe-tag'>学习</View>
          <View className='spe-tag'>教学楼</View>
        </View>
        <View className='title'>标题</View>
        <View className='time'>时间:周一 2: 00-4:00</View>
        <Image src={Refresh} className='refresh-img' />
      </View>
    )
  }
} 
