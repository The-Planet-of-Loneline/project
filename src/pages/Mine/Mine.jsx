import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image} from '@tarojs/components'
import Footer from '../component/Footer'
import notification from '../img/notification.png'
import HistoryCard from '../component/historyCard'
import './Mine.scss'
import Fetch from '../../service/fetch'
import Moon from '../img/moon.png'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            history: [],
            page: 1,
            showRed: true, 
        }
    }
    componentWillMount() {
        Taro.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
        Fetch(`secret/history?page=${this.state.page}`,
        {},
        'GET').then(res => {
            this.setState({
                history:res.history
            })
        })
        Fetch('remind/night/remindbox/status/',
        {},
        'GET').then(res =>{
            if(res.status){
                this.setState({
                    showRed: false
                })
            }
        })
     }

    componentDidMount() {}

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    toImfo() {
        Taro.navigateTo({
            url: '/pages/Info/info'
        })
    }
    
    toSecret() {
            Taro.redirectTo({
             url: '/pages/nighthome/nighthome'
         })
             
    } 
    onPullDownRefresh(){
    }
    onReachBottom(){
        if (this.state.history.length % 5 == 0) {
            this.setState({
                page: this.state.page + 1
            }, () => {
                Fetch(`secret/history?page=${this.state.page}`,
                    {},
                    'GET').then(res => {
                        this.setState({
                            history: this.state.history.concat(res.history)
                        })
                    })
            })
        }
    }
    
    config = {
        navigationBarTitleText: '孤独星球',
    }
    render() {
        const {history} = this.state
        return (
            <View className='all'>
               <View className='header'>
                   <View className='head'>历史记录</View>
                   </View>
                   <View className='headerSpace'></View>
                <Image src={notification} className='notification' onClick={this.toImfo} />
                { showRed ? <View className='red'> </View> : null}
                {history.length  ? null : <Image src={Moon} className="back" />}
                {history.length  ? null : <View className="noneBack">暂无历史记录哦</View>} 
                <ScrollView className='CardContainer'>
                   {history.map((his)=>{
                       return <HistoryCard textValue={his.Content} 
                       sendTime={his.SendTime} 
                       key={his.Debunkid} 
                       bgcolor={his.Colour} 
                       Debunkid={his.Debunkid} />
                   })}
                    {history.length  ? <View className='none' >--没有更多啦!--</View>: null} 
                </ScrollView>
            <View className='footerSpace'></View> 
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false}  onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}