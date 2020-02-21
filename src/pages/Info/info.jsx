import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Footer from '../component/Footer'
import './info.scss'
import InofoCard from '../component/infoCard'

export default class CardHistory extends Component {
    toImfo() {
        Taro.redirectTo({
            url: '/pages/Info/info'
        })
    }
    toSecret() {
        Taro.redirectTo({
            url: '/pages/nighthome/nighthome'
        })

    } 


    config = {
        navigationBarTitleText: '孤独星球'
    }

    render() {
        return (
            <View className='all'>
                <View className='header'>
                    <View className='head'>消息通知</View>
                </View>
                <View className='headerSpace'></View>  
                <View className='cardContainer'>
                <InofoCard />
                </View>
                <View className='footerSpace'></View>  
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false} onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}