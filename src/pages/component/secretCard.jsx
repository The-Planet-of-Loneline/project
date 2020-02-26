import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import ReplyCard from '../component/replyCard'
import '../commentNight/secretCard.scss'
import comment from '../img/comment.png'

export default class SecretCard extends Component {
    static defaultProps = {
        textValue: '你好呀',
        num: 0,
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
        let color = 'rgba(127, 163, 157, 1)'
        let { num } = this.props
        switch (num) {
            case '0': color = 'rgba(127, 163, 157, 1)'; break;
            case '1': color = 'rgba(132, 120, 145, 1)'; break;
            case '2': color = 'rgba(177, 146, 146, 1)'; break;
            case '3': color = 'rgba(90, 125, 139, 1)'; break;
        }
        const backgroundColor = {
            background: color
        }
        return (
            <View className='cardContainer'>
               <View className='card' style={backgroundColor}>
        <View className='text'>{this.props.textValue}</View>
                   <View className='allReplies'>全部回复</View>
                   <View className='commentButton'>
                       <Image src={comment} className='comment' />
                   </View>
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

