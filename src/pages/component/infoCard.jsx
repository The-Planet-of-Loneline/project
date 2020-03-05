import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import '../Info/infoCard.scss'
import arrow from  '../img/arrow_right.png'


export default class InfoCard extends Component{
    static defaultProps = {
        time:'',
        text:'',
        sid:''
    }
    Info(){
        Taro.navigateTo({
            url: `/pages/infoalert/infoalert?Debunkid=${this.props.sid}`
        })
    }
    render(){
        return(
            <View className='Card'>
                <View className='avatar'></View>
                <View className='textContainer' onClick={this.Info.bind(this)} >
        <View className='time'>{this.props.time}</View>
        <View className='text'>{this.props.text}</View>
                 <Image src={arrow} className='toCard' /> 
                </View>
            </View>
        )
    }
}