import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './infoT.scss'
import Close from './imgs/close.png'

export default class Info extends Component {

  static defaultProps = {

  }

  state = {
    name:'这里是昵称',
    college:'XXX学院',
    sex:'男',
    qq:'吴',
    grade:'19级',
    tel:'12345678910',
    msg: '需求(demand) 是指人们在某一特定的时期内在各种可能的价格下愿意并且能够购买某个具体商品的数量。'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  changeShow () {
    this.props.onChangeShowD('0')
  }

  agree () {
    //accept function
    this.props.onChangeShowD('2')
    
  }

  reject () {
    // reject function
    this.props.onChangeShowD('0')

  }

  render () {
    const { name, college, sex, qq, grade, tel, msg } =this.state
    return (
      <View className='push-container'>
        <View className='push'>
          <View className='header'>
            <Text className='words'>个人资料&amp;联系方式</Text>
            <Image src={Close} className='close' onClick={this.changeShow.bind(this)} />
          </View>
          <View className='fake-table'>
            <View className='fake-cell'>昵称：{name}</View>
            <View className='fake-cell'>学院：{college}</View>
            <View className='fake-cell'>性别：{sex}</View>
            <View className='fake-cell'>QQ：{qq}</View>
            <View className='fake-cell'>年级：{grade}</View>
            <View className='fake-cell'>Tel：{tel}</View>
          </View>
          <View>
            <View className='sentence'>{msg}</View>
          </View>
          <View className='sub-con'>
            <View className='sub-button' onClick={this.agree}>同意</View>
            <View className='sub-button' onClick={this.reject}>拒绝</View>
          </View>
        </View>
      </View>
    )
  }
}