import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Footer from '../component/Footer'
import './info.scss'
import InofoCard from '../component/infoCard'
import Fetch from '../../service/fetch'
import Moon from '../img/moon.png'

export default class CardHistory extends Component {
    state = {
        comment:[],
        showBackGround: true,
    }
    componentWillMount(){
        Taro.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })

        Fetch('remind/night/remindbox/view/',
        {},
        'GET').then(res => {
            this.setState({
                comment:res.commentdata,
            })
        })
    } 
    toSecret() {
        Taro.reLaunch({
            url: '/pages/nighthome/nighthome'
        })

    } 


    config = {
        navigationBarTitleText: '孤独星球'
    }

    render() {
        const {comment} =this.state
        return (
            <View className='all'>
                <View className='header'>
                    <View className='head'>消息通知</View>
                </View>
                <View className='headerSpace'></View>  
                <View className='cardContainer'>
                    {comment.length ? comment.map((co,index) => {
                        return  <InofoCard  
                          time={co.CommentTime}
                          text={co.Comment}
                          key={index}
                          sid={co.SecretId}
                          number={co.Num}  
                        />
                    }):null}
                {comment.length ? null : <Image src={Moon} className="back" /> }
                 {comment.length ? null : <View className="noneBack">暂无历史记录哦</View>}
                </View>
                <View className='footerSpace'></View>  
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false} onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}