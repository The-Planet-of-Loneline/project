import Taro, { Component } from '@tarojs/taro'
import { View,  Image} from '@tarojs/components'
import './card.scss'
import Refresh from './imgs/refresh.png'

export default class Card extends Component {
  static defaultProps={
    index:'0',
    detail:{
      date: '周一 2：00-4：00',
      place: '教学楼jj',
      requirement_id: 0,
      tag: '学习',
      title: '标题'
    }
  }

  state = {
    spaning: false,
    Style: {}
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

  onChangeInfo (e) {
    const index = this.props.index
    const { spaning } = this.state
    if (!spaning&&this.props.onChangeInfo(index)) {
      this.setState({
        spaning: true,
        Style:{
          animation: 'span-c 0.5s linear 0s 1'
        }
      }, () => {
        setTimeout(() => {
          this.setState({
            spaning: false,
            Style:{
              animation: ''
            }
          })
        }, 600)
      })
    }
    e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
  }

  toCardDetail () {
    // color pass index/content pass id
    const requirement_id = this.props.detail.requirement_id
    const index = this.props.index;
    Taro.navigateTo({
      url: `../cardDetails/cardDetails?req_id=${requirement_id}&indexId=${index}&able=able`
    })
  }

  render () {
    const { date, place, title, tag } = this.props.detail;
    const index = this.props.index;
    const { Style } = this.state
    return (
      <View className={'b-tag '+this.changeColor(index)} onClick={this.toCardDetail}>
        <View className='tag-container'>
          {tag!==''?<View className='spe-tag'>{tag}</View>:null}
          <View className='spe-tag'>{place}</View>
        </View>
        <View className='title'>{title}</View>
        <View className='time'>时间:{date}</View>
        <Image src={Refresh} className='refresh-img' onClick={this.onChangeInfo} style={Style.animation === ''?null:Style} />
      </View>
    )
  }
} 