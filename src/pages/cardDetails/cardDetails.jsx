import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './cardDetails.scss'
import Footer from '../../component/Footer/Footer'
import Info from '../../component/Info/Info'

export default class CardDetails extends Component {

  static defaultProps = {}

  state={
    show:false,
    content: {
      content: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十',
      date: '2020.02.29',
      place: '教学楼',
      post_time: '2020.02.29',
      require_people_num: 0,
      sender_nick_name: 'shi-zhong',
      sender_portrait: 0,
      tag: '看书',
      time_end: 0,
      time_from: 0,
      title: '标题',
      type: '学习'
    }
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
    const { show, content } = this.state
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
              <View className='user-name'>{content.sender_nick_name}</View>
              <View className='submit-time'>{content.post_time}</View>
            </View>
          </View>
          <View className='details'>
            <View className='tag-container'>
              <View className='spe-tag'>{content.type}</View>
              <View className='spe-tag'>{content.tag}</View>
              <View className='spe-tag'>{content.place}</View>
            </View>
            <View className='title'>{content.title}</View>
            <View className='time'>时间:{content.date}</View>
            <View className='content'>{content.content}</View>
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
