import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Dialog.scss'

export default class Dialog extends Component{
    render(){
        return(
        <View className='dialog'>{this.props.children}</View>
        )
    }
}