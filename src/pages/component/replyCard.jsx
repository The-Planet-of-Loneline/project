import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import '../commentNight/replyCard.scss'

export default class ReplyCard extends Component{
    render(){
        return(
            <View className='replyCard'>
                <View className='avatar'></View>
                <View className='textContainer'>
                    <View className='time'>now</View>
                    <View className='text'>hello!</View>
                </View>
            </View>
        )
    }
}