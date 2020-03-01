import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import '../Info/infoCard.scss'
import arrow from  '../img/arrow_right.png'


export default class InfoCard extends Component{
    Info(){
        this.props.onInfo();
    }
    render(){
        return(
            <View className='Card'>
                <View className='avatar'></View>
                <View className='textContainer' onClick={this.Info.bind(this)} >
                    <View className='time'>now</View>
                    <View className='text'>hello!</View>
                 <Image src={arrow} className='toCard' /> 
                </View>
            </View>
        )
    }
}