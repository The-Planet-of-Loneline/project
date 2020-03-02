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
      date: '周一 周三 周日',
      place: '教学楼',
      post_time: '2020.02.29',
      sender_nick_name: 'shi-zhong',
      sender_portrait: 4,
      tag: '看书',
      time_end: 0,
      time_from: 0,
      title: '标题',
      type: '学习'
    }
  }
 
  componentWillMount () {
    const requirement_id = parseInt(this.$router.params.req_id)
    Fetch(
      `requirement/view/${requirement_id}/`,
      {},
      'GET'
    ).then(data =>{
      this.setState({ content: data.content })
    })
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
    const requirement_id = parseInt(this.$router.params.req_id)
    Fetch(
      `requirement/${requirement_id}/`,
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
            <View className='time'>{content.post_time}</View>
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