import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../component/Head'
import Footer from '../component/Footer'
import NightCard from '../component/NightCard'
import './nighthome.scss'
import userGray from '../img/userGray.png'
import Fetch from '../../service/fetch'


export default class Index extends Component {
  state = {
    text:'',
    bgcolor:'',
    time:'',
    num: 0,
  }

  componentWillMount () {
    Fetch('secret/square/',
    {},
    'GET').then(res => {
      console.log(res.secrets)
      this.setState({
        text:res.secrets.Content,
        bgcolor:res.secrets.Colour,
        time:res.secrets.SendTime,
        num:res.number
      })
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '孤独星球'
  }
  toWrite() {
    Taro.redirectTo({
      url: `/pages/writeSecret/writeSecret`
    })
  }
  toMine() {
    Taro.redirectTo({
      url: '/pages/Mine/Mine'
    })
  }
 update(){
   Fetch('secret/square/',
     {},
     'GET').then(res => {
       console.log(res.secrets)
       this.setState({
         text: res.secrets.Content,
         bgcolor: res.secrets.Colour,
         time: res.secrets.SendTime,
         num:res.number
       })
     })
 } 

  render () {
    let {text, bgcolor,time,num} = this.state
    return (
     <View className='all'>
        <Head colorTA='rgba(242, 245, 251, 1)' colorWrite='rgba(185, 189, 203, 1)' onToWrite={this.toWrite.bind(this)} />
       <NightCard textValue={text} color={bgcolor} sendTime={time} onupdate={this.update.bind(this)} number={num}  />
       <Footer onToMine={this.toMine.bind(this)} /> 
     </View>
     //头部结束
    )
  }
}
