import Taro, { Component, onBackgroundAudioPause } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import '../Mine/card.scss'

export default class HistoryCard extends Component{
    static defaultProps = {
        textValue:'111',
        sendTime:'',
        bgcolor:'',
        Debunkid: 0,
    }
    componentWillMount(){}
   
    toCard(){
      let {bgcolor,sendTime,textValue} = this.props 
        Taro.navigateTo({
            url:`/pages/cardHistory/cardHistory?color=${bgcolor}&&time=${sendTime}&&text=${textValue}&&Debunkid=${this.props.Debunkid}`
        })
    }

    render(){
        let color = this.props.bgcolor
        
        const backgroundColor = {
            background: color
        }
        return(
            <View className='cardContainer'>
                <View className='card' 
                onClick={this.toCard}
                style={backgroundColor}>
                    <View className='text'>{this.props.textValue}</View>
                </View>
            </View>
        )
    }
}