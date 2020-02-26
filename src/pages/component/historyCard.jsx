import Taro, { Component, onBackgroundAudioPause } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import '../Mine/card.scss'

export default class HistoryCard extends Component{
    static defaultProps = {
        num : 0,
    }
    componentWillMount(){}
   
    toCard(){
        let {num} =this.props
        Taro.navigateTo({
            url:`/pages/cardHistory/cardHistory?number=${num}`
        })
    }

    render(){
        let color = 'rgba(127, 163, 157, 1)'
        let {num} = this.props
        switch (num) {
            case 0:  color = 'rgba(127, 163, 157, 1)'; break; 
            case 1:  color = 'rgba(132, 120, 145, 1)'; break;
            case 2:  color = 'rgba(177, 146, 146, 1)'; break;
            case 3:  color ='rgba(90, 125, 139, 1)'; break;
        }
        const backgroundColor = {
            background: color
        }
        return(
            <View className='cardContainer'>
                <View className='card' 
                onClick={this.toCard}
                style={backgroundColor}>
                    <View className='text'>你好呀</View>
                </View>
            </View>
        )
    }
}