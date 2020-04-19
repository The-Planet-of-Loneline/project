import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Guide.scss'
import Card from './Card/Card'
import SqrOn from './imgs/sqr-on.png'
import MyOff from './imgs/my-off.png'
import Share from './imgs/share.png'
import Switch from './imgs/switch.png'
import LineHeader from './imgs/line-header.png'
import LineShare from './imgs/line-share.png'
import LineSun from './imgs/line-switch.png'
import LineMy from './imgs/line-my.png'
import Refresh from './imgs/refresh.png'

export default class Day extends Component {

  static defaultProps = {
    
  }

  state = {
    step: 0,
    zShare:7,
    zHeader: 13,
    zRefresh: 1
  }

  componentWillMount () {
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
  }  

  config = {
    navigationBarTitleText: '孤独星球',
    enablePullDownRefresh: true
  }

  changetwo () {
    this.setState({
      step: 1,
      zShare: 1,
      zHeader: 1,
      zRefresh: 10
     })
  }
 
  toDay () {
    Taro.redirectTo({
      url: '../day/day'
    })
  }
  
  render () {
    const { step, zShare, zHeader, zRefresh } = this.state
    const res=Taro.getSystemInfoSync()
    
    const Style = {
      top: `${0.5*res.windowHeight}`+'px',
      left: `${0.5*res.windowWidth}`+'px',
      zIndex: 10
    }
    const ShareS = {
      zIndex: zShare
    }
    const HeaderS = {
      zIndex:zHeader
    }
    const RefreshS = {
      zIndex: zRefresh
    }
    return (
      <View>
          {!step&&<View className='goon' style={Style} onClick={this.changetwo}>让我们继续~</View>}
          {step&&<View className='goon' style={Style} onClick={this.toDay}>OK~我知道了 !</View>}
        <View className={!step?'divide-con bor':'divide-con'} style={HeaderS}>
          <View className='divide shadow-box'>
            <View className='s-tag chosen'>学习</View>
            <View className='s-tag'>运动</View>
            <View className='s-tag'>娱乐</View>
            <View className='s-tag'>其他</View>
          </View>
          <View className='divide'>
            <View className='ss-tag'>类别 <Text className='s-tri'>▼</Text></View>
            <View className='ss-tag'>时间 <Text className='s-tri'>▼</Text></View>
            <View className='ss-tag'>地点 <Text className='s-tri'>▼</Text></View>
          </View>
        </View>
        {!step&&<Image src={LineHeader} className='line-header' />}
        {!step&&<View className='line-header'></View>}
        {step&&<View className='refresh-con'>
          <View className='lineword'>你可以</View>
          <View className='lineword under1'>单个</View>
          <View className='lineword'>刷新或</View>
          <View className='lineword under2'>下拉</View>
          <View className='lineword'>刷新</View>
        </View>}
        <View className='card-con'>
          <View className='b-tag card-a'>
            <View className='tag-container'>
              <View className='spe-tag'>学习</View>
              <View className='spe-tag'>教学楼</View>
            </View>
            <View className='title'>标题</View>
            <View className='time'>时间:周一 2: 00-4:00</View>
            <Image src={Refresh} className='refresh-img' style={RefreshS} />
          </View>
          <Card index={1} />
          <Card index={2} />
          <Card index={3} />
          <Card index={4} />
          <Card index={5} />
        </View> 
        
        <View className='share-container' style={ShareS}><Image src={Share} className='share' /></View>
        {!step&&<View className='shadowf'><View className='dotsun'></View></View>}
        {!step&&<Image src={LineShare} className='line-share' />}
        {!step&&<View className='line-share'></View>}
        {!step&&<Image src={LineSun} className='line-sun' />}
        {!step&&<View className='line-sun'></View>}
        {step&&<Image src={LineMy} className='line-my' />}
        {step&&<View className='line-my'></View>}
        <View className='footer'>
          <View className='s-logo'>
            <Image src={SqrOn} className='s-img' />
            <View className='wordl'>需求广场</View>
          </View>
          <Image src={Switch} className='switch' />
          <View className={step?'shadowm':null}>
            <View className={step?'s-logo dotmy':'s-logo'}>
              <Image src={MyOff} className='s-img' />
              <View className='wordr'>我的</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}