import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Guide from '../img/guide.png'
import Guide2 from '../img/guide2.png'


export default class Night extends Component{
    state={
        show:false
    }
    onchange() {
        this.setState({
            show: true
        })
    }
    ontoDay(){
        Taro.redirectTo({
            url:'/pages/day/day'
        })
    }
    render(){
        const {show} = this.state
        const info = Taro.getSystemInfoSync()
        const Style = {
            height: info.windowHeight + 'px',
            width: info.windowWidth + 'px'
        }
        return(
            <View className='all' >
                {show?null :<Image src={Guide} className='guide' style={Style} onClick={this.onchange.bind(this)} />}
                {show?<Image src={Guide2}  className='guide' style={Style} onClick={this.ontoDay.bind(this)} />:null}
            </View>
        )
    }
}