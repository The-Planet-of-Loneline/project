import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Footer from '../../component/Footer/Footer'
import Delete from './delete.png'
import './index.scss'

export default class Index extends Component {

  state={
    show:false,
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

  config = {
    navigationBarTitleView: '孤独星球'
  }

  changeShow (choice) {
    this.setState({ show:choice })
  }

  sure () {
    // delete code
    Taro.navigateBack({
      delta: 1
    })
  }

  tagsExtends () {
    const { tags } = this.state
    return (
      tags.map((tag, index) => {
        return <View key={index} className='spe-tag'>{tag}</View>
      })
    )
  }

  render () {
    const { show, title, time, content } = this.state
    return (
      <View>
        {show
        ?<View className='shadow'>
          <View className='delete-con'>
            <View className='upper'>确定后，将删除此需求。</View>
            <View className='downer'>
              <View className='left' onClick={this.changeShow.bind(this,false)}>取消</View>
              <View className='right'>确定</View>
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
            <View className='title'>{title}</View>
            <View className='time'>{time}</View>
          </View>
          <View className='details'>
            <View className='tag-container'>
              {this.tagsExtends()}
            </View>
            <View className='content'>{content}</View>
          </View>
        </View>
        <Footer mode='need' />
      </View>
    )
  }
}