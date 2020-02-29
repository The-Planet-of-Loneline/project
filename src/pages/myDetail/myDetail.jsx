import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Footer from '../../component/Footer/Footer'
import Delete from './delete.png'
import './mydetail.scss'
import Fetch from '../../service/fetch'

export default class myDetail extends Component {

  state={
    show:false,
    content: {
      content: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十',
      date: '2020.02.29',
      place: '教学楼',
      post_time: 'string',
      require_people_num: 0,
      sender_nick_name: "string",
      sender_portrait: 0,
      tag: '看书',
      time_end: 0,
      time_from: 0,
      title: '标题',
      type: '学习'
    }
  }

  componentWillMount () {
    // Fetch(
    //   `requirement/view/{requirement_id}/`,
    //   {},
    //   'GET'
    // ).then(data => {
    //   switch (data.msg) {
    //     case 'success' :this.setState
    //     case '不见啦' :
    //   }
    // })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  changeShow (choice) {
    this.setState({ show:choice })
  }

  sure () {
    // delete code
    Fetch(
      `requirement/{requirement_id}/`,
      {},
      'DELETE'
    )
    Taro.navigateBack({
      delta: 1
    })
  }

  render () {
    const { show, content } = this.state
    return (
      <View>
        {show
        ?<View className='shadow'>
          <View className='delete-con'>
            <View className='upper'>确定后，将删除此需求。</View>
            <View className='downer'>
              <View className='left' onClick={this.changeShow.bind(this,false)}>取消</View>
              <View className='right' onClick={this.sure}>确定</View>
            </View>
          </View>
        </View>
      :null}
        <View className='header'>
          需求详情
          <Image src={Delete} className='delete' onClick={this.changeShow.bind(this,true)} />
        </View>      
        <View className='body-container'>
          <View className='info'>
            <View className='title'>{content.title}</View>
            <View className='time'>{content.date}</View>
          </View>
          <View className='details'>
            <View className='tag-container'>
              <View className='spe-tag'>{content.type}</View>
              <View className='spe-tag'>{content.tag}</View>
              <View className='spe-tag'>{content.place}</View>
            </View>
            <View className='content'>{content.content}</View>
          </View>
        </View>
        <Footer mode='need' />
      </View>
    )
  }
}