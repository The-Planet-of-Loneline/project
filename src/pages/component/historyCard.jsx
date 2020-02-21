import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import '../Mine/card.scss'

export default class HistoryCard extends Component{
    toCard(){
        Taro.navigateTo({
            url:'/pages/cardHistory/cardHistory'
        })
    }
    render(){
        return(
            <View className='cardContainer'>
                <View className='card' onClick={this.toCard}>
                    <View className='text'>你好呀！</View>
                </View>
            </View>
        )
    }
}