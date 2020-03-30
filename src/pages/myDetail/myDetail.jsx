import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Footer from '../../component/Footer/Footer'
import Delete from './delete.png'
import './mydetail.scss'
import Fetch from '../../service/fetch'

export default class myDetail extends Component {

  state={
    show:false,
    loading: false,
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
      if (data.msg==='success') {
        this.setState({ content: data.content })
      } else if (data.msg==='不见啦'){
        this.setState({
          content: {
            content: '该需求已被删除, 历史列表未刷新',
            date: '周八',
            place: '极乐净土',
            post_time: '2020.4.31',
            sender_nick_name: 'NOT FOUND',
            sender_portrait: 0,
            tag: '修仙',
            time_end: -24,
            time_from: -1,
            title: 'DELETED',
            type: '修仙'
          }
        })
      } else if (data.msg==='Fail.') {
        Taro.showToast({
          title: '服务器错误'
        })
        Taro.navigateBack({
          delta: 1
        })
      } 
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
    const requirement_id = this.$router.params.req_id
    const {loading} = this.state
    if (!loading) {
      this.setState({ loading: true})
      Fetch(
        `requirement/${requirement_id}/`,
        {},
        'DELETE'
      ).then(data => {
        if (data.msg === 'success') {
          this.setState({ show:false })
          Taro.showToast({
            title: '删除成功'
          })
          Taro.setStorage({
            key:'delete_if',
            data: true
          })
          Taro.navigateBack({
            delta: 1
          })
        } else if (data.msg === 'Fail.') {
          this.setState({ show:false })
          Taro.showToast({
            title: '服务器错误'
          })
        }
      })
    }
    this.setState({ show: false })
  }

  render () {
    const { show, content, loading } = this.state
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
          {loading&&<View className='loading'></View>}
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
              {content.tag!==''?<View className='spe-tag'>{content.tag}</View>:null}
              <View className='spe-tag'>{content.place}</View>
            </View>
            <View className='content'><Text>{content.content}</Text></View>
          </View>
        </View>
        <Footer mode='my' />
      </View>
    )
  }
}