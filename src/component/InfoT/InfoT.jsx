import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './infoT.scss'
import Close from '../../assets/png/close.png'
import Fetch from '../../service/fetch'

export default class Info extends Component {

  static defaultProps = {
    pass: {
      name:'这里是昵称',
      college:'XXX学院',
      sex:'男',
      qq:'吴',
      grade:'19级',
      tel:'12345678910',
      msg: '需求(demand) 是指人们在某一特定的时期内在各种可能的价格下愿意并且能够购买某个具体商品的数量。'
    }
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
    const application_id = this.props.req_id
    Fetch(
      `application/solve/${application_id}/?status=3`,
      {
        contact_way: ['无','无'],
        content: "拒绝"
      },
      'PUT'
    ).then(data => {
      if (data.msg==='success') {
        Taro.showToast({
          title:'已拒绝'
        })
      } else if (data.msg==='需求已经被删除了!') {
        Taro.showToast({
          title:'您已删除'
        })
      } else if (data.msg==='已经处理过了!') {
        Taro.showToast({
          title:'已处理'
        })
      } else if (data.msg==='Fail.')
        Taro.showToast({
          title:'服务器错误'
        })
    })
    this.props.onChangeShowD('0')
  }

  render () {
    const { name, college, sex, qq, grade, tel, msg } =this.props.pass
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