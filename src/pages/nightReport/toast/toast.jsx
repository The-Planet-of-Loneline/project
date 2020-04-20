import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Close from '../../img/close.png'
import './toast.scss'

export default class Toast extends Component {

    static defaultProps = {
        onChangeShow: function () {
            return null
        }
    }

    back() {
        Taro.navigateBack({
            delta: 1
        })
    }

    nothing = (e) => {
        e.stopPropagation()
    }

    close() {
        this.props.onChangeShow()
    }

    render() {
        const info = Taro.getSystemInfoSync()
        const Style = {
            height: info.windowHeight + 'px',
            width: info.windowWidth + 'px',
            backgroundColor: '#04040F' 
        }
        return (
            <View className='shadow' style={Style} onClick={this.close}>
                <View className='tocon' onClick={this.nothing}>
                    <Image src={Close} className='close' onClick={this.back}></Image>
                    <View className='texts'></View>
                    <View className='texts'>审核君不易~</View>
                    <View className='texts'>我们会定期处理您的反馈</View>
                    <View className='texts'>请耐心等待 !</View>
                    <View className='texts'></View>
                    <View className='texts'>更多问题欢迎加群咨询 :</View>
                    <View className='texts qq'>293144869</View>
                </View>
            </View>
        )
    }
}