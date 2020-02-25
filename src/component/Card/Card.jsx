import Taro, { Component } from '@tarojs/taro'
import { View,  Image} from '@tarojs/components'
import './card.scss'
import Refresh from './imgs/refresh.png'

export default class Card extends Component {
  static defaultProps={
    index:'0',
    detail:{
      kind:1,
      place:0,
      title:'标题',
      time:'周一 2：00-4：00'
    }
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
  
  changeKind (kind) {
    switch (kind) {
      case 1 :return "学习"
      case 2 :return "运动"
      case 3 :return "娱乐"
      case 4 :return "其他"
    }
  }

  onChangeInfo (e) {
    const index = this.props.index
    this.props.onChangeInfo(index)
    e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
  }

  toCardDetail (index) {
    // color pass index/content pass id
    Taro.navigateTo({
      url: `../cardDetails/cardDetails?indexId=${index}&able=able`
    })
  }

  render () {
    const { kind, place, title, time } = this.props.detail;
    const index = this.props.index;
    return (
      <View className={'b-tag '+this.changeColor(index)} onClick={this.toCardDetail.bind(this,index)}>
        <View className='tag-container'>
          <View className='spe-tag'>{this.changeKind(kind)}</View>
          <View className='spe-tag'>{0?place:'教学楼'}</View>
        </View>
        <View className='title'>{title}</View>
        <View className='time'>时间:{time}</View>
        <Image src={Refresh} className='refresh-img' onClick={this.onChangeInfo} />
      </View>
    )
  }
} 