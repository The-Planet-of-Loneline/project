import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import Head from '../component/Head'
import Footer from '../component/Footer'
import NightCard from '../component/NightCard'
import './nighthome.scss'
import Fetch from '../../service/fetch'
import upgrade from '../day/Card/imgs/refresh.png'


export default class Index extends Component {
  state = {
    text:'',
    bgcolor:'',
    time:'',
    num: 0,
    debunkid: 0,
    animationData: {},
    Ssid:''
  }
    duration = 1000
    animation = Taro.createAnimation({
      duration: this.duration,
      timingFunction: 'ease'
  })

  componentWillMount () {
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    Fetch(`secret/square/`,
    {},
    'GET').then(res => { 
      this.setState({
        text:res.secret.Content,
        bgcolor:res.secret.Colour,
        time:res.secret.SendTime,
        num:res.number,
        debunkid:res.secret.Debunkid,
        Ssid:res.secret.SenderSid
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
   this.animation.rotate3d(100,100,100,180).step({
     duration: 500,
     timingFunction:'ease'
   })
   this.animation.rotate3d(50, 50, 50, 0).step({
     duration: 500,
     timingFunction: 'ease'
   }) 
   this.setState({
     animationData: this.animation.export()
   }, () => {
     setTimeout(() => {
       Fetch('secret/square/',
         {},
         'GET').then(res => {
           this.setState({
             text: res.secret.Content,
             bgcolor: res.secret.Colour,
             time: res.secret.SendTime,
             num: res.number,
             debunkid: res.secret.Debunkid,
             Ssid: res.secret.SenderSid
           })
         })
         this.setState({
           animationData:{}
         })
     }, this.duration)
   })
 } 

  render () {
    let {text, bgcolor,time,num,debunkid,Ssid,animationData} = this.state
    return (
     <View className='all'>
        <Head colorTA='rgba(242, 245, 251, 1)' colorWrite='rgba(185, 189, 203, 1)' onToWrite={this.toWrite.bind(this)} />
       <NightCard 
       textValue={text} 
       color={bgcolor}  
       sendTime={time}
       onupdate={this.update.bind(this)} 
       number={num}  Debunkid={debunkid} 
       Sid={Ssid} />
        <Image src={upgrade} className='upgrade' onClick={this.update.bind(this)} animation={animationData} />
        <Footer onToMine={this.toMine.bind(this)} onToSecret={() => { return false }} /> 
     </View>
     //头部结束
    )
  }
}
