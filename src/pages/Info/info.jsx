import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Footer from '../component/Footer'
import './info.scss'
import InofoCard from '../component/infoCard'
import Fetch from '../../service/fetch'

export default class CardHistory extends Component {
    state = {
        comment:[],
        history:[],
    }
    componentWillMount(){
        Fetch('remind/night/remindbox/view/',
        {},
        'GET').then(res => {
            console.log(res)
            this.setState({
                comment:res.commentdata,
            })
        })
        Fetch(`secret/view/:secret_id?secretId=${this.state.comment.SecretId}`,
        {},'GET').then(res => {
            this.setState({history:res.secret})
        })
    }
   
    toSecret() {
        Taro.redirectTo({
            url: '/pages/nighthome/nighthome'
        })

    } 


    config = {
        navigationBarTitleText: '孤独星球'
    }

    render() {
        return (
            <View className='all'>
                <View className='header'>
                    <View className='head'>消息通知</View>
                </View>
                <View className='headerSpace'></View>  
                <View className='cardContainer'>
                    {this.state.comment.map((comment,index) => {
                        return  <InofoCard  time={comment.CommentTime}
                        text ={comment.Comment}
                        key={index}
                        sid={comment.SecretId}
                        number={comment.Num} 
                        text2={this.state.history.Content} />
                    })}
                </View>
                <View className='footerSpace'></View>  
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false} onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}