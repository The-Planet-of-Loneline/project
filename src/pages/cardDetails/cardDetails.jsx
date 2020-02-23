import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './cardDetails.scss'
import Footer from '../../component/Footer/Footer'
import Info from '../../component/Info/Info'

export default class CardDetails extends Component {

  static defaultProps = {}

  state={
    show:false,
    userName:'用户名',
    submitTime:'2020.2.8',
    title:'标题',
    time:'2020.2020',
    content:'一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十',
    tags:['学习', '看书', '教学楼','佑铭体育馆'],
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  changeColor () {
    const id = this.$router.params.indexId
    switch (id) {
      case '0' :return 'card-a'
      case '1' :return 'card-b'
      case '2' :return 'card-c'
      case '3' :return 'card-d'
      case '4' :return 'card-e'
      case '5' :return 'card-f'
    }
  }

  tagsExtends () {
    const { tags } = this.state
    return (
      tags.map((tag, index) => {
        return <View key={index} className='spe-tag'>{tag}</View>
      })
    )
  }

  changeShow = () => {
    const { show } =this.state
    if (show) {
      this.setState({ show:false })
    } else {
      this.setState({ show:true })
    }
  }

  toComfirm = () => {
    console.log('passed successfully')
  }

  render () {
    const { show, userName, submitTime, title, time, content } = this.state
    const able = this.$router.params.able
    return (
      <View>
        <View className='header'>
          需求详情
        </View>
        <View className={'body-container '+this.changeColor()}>
          <View className='user'>
            <View className='user-img'></View>
            <View className='user-info'>
              <View className='user-name'>{userName}</View>
              <View className='submit-time'>{submitTime}</View>
            </View>
          </View>
          <View className='details'>
            <View className='tag-container'>
              {this.tagsExtends()}
            </View>
            <View className='title'>{title}</View>
            <View className='time'>时间:{time}</View>
            <View className='content'>{content}</View>
          </View>
          <View className='submit-container'>
            {able==='able'
            ?<Button className='submit-require' onClick={this.changeShow}>
              提交申请
            </Button>
            :null}
          </View>
        </View>
        {show?<Info onChangeShowCli={this.changeShow} onChangeShowSub={this.changeShow} passed='true' />:null}
        <Footer mode='need' />
      </View>
    )
  }
}
