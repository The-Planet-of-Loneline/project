import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import '../nighthome/NightCard.scss'
import avatar from '../img/avatar.png'

export default class NightCard extends Component{
    static defaultProps ={
        textValue: '你好呀'
    }
   
    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    
    toComment(){
        Taro.navigateTo({
            url:`/pages/commentNight/comment?text=${this.props.textValue}`
        })
    }

    render(){
        return(
            <View className='cardContainer'>
               <View className='cardOne' onClick={this.toComment}>
                  <View className='avatarTime'>
                    <View className='avatar'>
                        <Image src={avatar} className='avatarImg' />
                    </View>
                    <Text className='time'>2min ago</Text>    
                  </View>
                  <View className='textContainer'>
                    <View className='text'>
                        {this.props.textValue}
                    </View>
                  </View> 
               </View>
                <View className='cardTwo'></View>
                <View className='cardThree'></View>
            </View>
        )
    }
}