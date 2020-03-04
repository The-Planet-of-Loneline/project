import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image} from '@tarojs/components'
import Footer from '../component/Footer'
import notification from '../img/notification.png'
import HistoryCard from '../component/historyCard'
import './Mine.scss'
import Fetch from '../../service/fetch'

export default class Index extends Component {
    state = {
        history:[{
            text:'',
            time:'',
            color:'',
            Debunkid:''
        }]
    }

    componentWillMount() {
        Fetch('secret/history/0',
        {},
        'GET').then(res => {
            console.log(res.history)
            this.setState({
                history:[...this.state.history,res.history]
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

    config = {
        navigationBarTitleText: '孤独星球'
    }

    render() {
        let {history} = this.state
        let {text,time,Debunkid,color}=this.state.history
        return (
            <View className='all'>
               <View className='header'>
                   <View className='head'>历史记录</View>
                   </View>
                   <View className='headerSpace'></View>
                <Image src={notification} className='notification' onClick={this.toImfo} />
                   <View className='CardContainer'>
                   {history.map(()=>{
                       return <HistoryCard  textValue={text} sendTime={time} key={Debunkid} bgcolor={color} />
                   })}
                   
            </View>
            <View className='footerSpace'></View> 
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false}  onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}