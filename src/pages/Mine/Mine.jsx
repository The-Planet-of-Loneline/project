import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image} from '@tarojs/components'
import Footer from '../component/Footer'
import notification from '../img/notification.png'
import HistoryCard from '../component/historyCard'
import './Mine.scss'
import Fetch from '../../service/fetch'

export default class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            history: [],
            page: 1, 
        }
    }
    componentWillMount() {
        Fetch(`secret/history?page=${this.state.page}`,
        {},
        'GET').then(res => {
            this.setState({
                history:res.history
            })
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
        if (this.state.history.length % 4 == 0) {
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
        return (
            <View className='all'>
               <View className='header'>
                   <View className='head'>历史记录</View>
                   </View>
                   <View className='headerSpace'></View>
                <Image src={notification} className='notification' onClick={this.toImfo} />
                   <View className='CardContainer'>
                   {this.state.history.map((history)=>{
                       return <HistoryCard textValue={history.Content} 
                       sendTime={history.SendTime} 
                       key={history.Debunkid} 
                       bgcolor={history.Colour} 
                       Debunkid={history.Debunkid} />
                   })}
                   
            </View>
            <View className='footerSpace'></View> 
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false}  onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}