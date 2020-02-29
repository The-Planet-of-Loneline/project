import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Footer from '../component/Footer'
import './info.scss'
import SecretCard from '../component/secretCard'
import DeleteCard from '../component/deleteCard'

export default class Infoalert extends Component {

    state = {
        showDeleteModel: false
    }


    config = {
        navigationBarTitleText: '孤独星球'
    }

  
  
    toSecret() {
        Taro.redirectTo({
            url: '/pages/nighthome/nighthome'
        })

    }

    render() {
        let { showDeleteModel } = this.state
        let number = this.$router.params.number
        return (
            <View className='all'>
                <View className='header'>
                    <View className='head'>消息通知</View>
                </View>
                <SecretCard num={number} showComment={false} />
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false} onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}