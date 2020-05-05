import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Dialog.scss'

export default class Dialog extends Component{
    handleClose(){
        this.props.onHandleClose()
    }
    render(){
        return(
        <View className='dialog' onClick={this.handleClose.bind(this)}>{this.props.children}</View>
        )
    }
}