import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import ReplyCard from '../component/replyCard'
import '../commentNight/secretCard.scss'

export default class SecretCard extends Component {
    static defaultProps = {
        textValue: '你好呀'
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    config = {
        navigationBarTitleText: '孤独星球'
    }

    render() {
        return (
            <View className='cardContainer'>
               <View className='card'>
        <View className='text'>{this.props.textValue}</View>
                   <View className='allReplies'>全部回复</View>
                   <View className='replyContainer'>
                      <ReplyCard />
                      <ReplyCard />
                      <ReplyCard /> 
                   </View>
               </View> 
            </View>

        )
    }
}

