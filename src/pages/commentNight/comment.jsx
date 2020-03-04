import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import Head from '../component/Head'
import Footer from '../component/Footer'
import '../index/index.scss'
import SecretCard from '../component/secretCard'

export default class Comment extends Component {
    static defaultProps = {
        textValue: '你好呀'
    }

    componentWillMount() { console.log(JSON.stringify(this.$router.params.text)) }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    config = {
        navigationBarTitleText: '孤独星球'
    }
    toWrite() {
        Taro.redirectTo({
            url: '/pages/writeSecret/writeSecret'
        })
    }
    toMine() {
        Taro.redirectTo({
            url: '/pages/Mine/Mine'
        })
    }

    render() {
        return (
            <View className='all'>
                <Head colorTA='rgba(242, 245, 251, 1)' onToWrite={this.toWrite.bind(this)}  />
                <SecretCard textValue={this.$router.params.text} color={this.$router.params.color} time={this.$router.params.time} />
                <Footer onToMine={this.toMine.bind(this)} />
            </View>
            
        )
    }
}