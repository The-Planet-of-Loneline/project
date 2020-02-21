import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import '../nighthome/Night.scss'

export default class Head extends Component {
    static defaultProps = {
        colorTA: 'rgba(185, 189, 203, 1)',
        colorWrite: 'rgba(185, 189, 203, 1)',
        showUnderline: true
    }

    toSecret(){
        this.props.onToSecret()
    }

    toWrite(){
        this.props.onToWrite()
    }

    render() {
        let { colorTA, colorWrite, showUnderline } = this.props
        const styleTA = {
            color: colorTA, 
        }
        const styleWrite = {
            color:colorWrite,
        }
    

        return (
            <View className='header'>
                <View className='headerCenter'>
                    <View className='headContentTA' onClick={this.toSecret} style={styleTA}>ta的秘密
        <View className={showUnderline ? 'underline' : null} ></View>
                    </View>
                    <View className='headContent' onClick={this.toWrite} style={styleWrite}>写秘密
                    <View className={showUnderline ? null : 'underline'} ></View>
                    </View>
                </View>
            </View> 
        )
    }
}