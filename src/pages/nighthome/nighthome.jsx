import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Head from '../component/Head'
import Footer from '../component/Footer'
import NightCard from '../component/NightCard'
import './nighthome.scss'
import userGray from '../img/userGray.png'


export default class Index extends Component {

  componentWillMount () { 
    console.log(JSON.stringify(this.$router.params.text))
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
      url: '/pages/writeSecret/writeSecret'
    })
  }
  toMine() {
    Taro.redirectTo({
      url: '/pages/Mine/Mine'
    })
  }
  

  render () {
    const text = this.$router.params.text
     

    return (
     <View className='all'>
        <Head colorTA='rgba(242, 245, 251, 1)' colorWrite='rgba(185, 189, 203, 1)' onToWrite={this.toWrite.bind(this)} />
       <NightCard textValue={text} />
       <Footer onToMine={this.toMine.bind(this)} /> 
     </View>
     //头部结束
    )
  }
}
