import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import Head from '../component/Head'
import Footer from '../component/Footer'
import '../index/index.scss'
import SecretCard from '../component/secretCard'

export default class Comment extends Component {
    static defaultProps = {
        textValue: ''
    }

    componentWillMount() { 
        Taro.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
    }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    config = {
        navigationBarTitleText: '孤独星球'
    }
    toWrite() {
        Taro.reLaunch({
            url: '/pages/writeSecret/writeSecret'
        })
    }
    toMine() {
        Taro.reLaunch({
            url: '/pages/Mine/Mine'
        })
    }

    render() {
        return (
            <View className='all'>
                <Head colorTA='rgba(242, 245, 251, 1)' onToWrite={this.toWrite.bind(this)}  />
                <SecretCard 
                textValue={this.$router.params.text} 
                color={this.$router.params.color} 
                time={this.$router.params.time} 
                Debunkid={this.$router.params.Debunkid} 
                Sid={this.$router.params.sid} />
                <Footer onToMine={this.toMine.bind(this)} />
            </View>
            
        )
    }
}