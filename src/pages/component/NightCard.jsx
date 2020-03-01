import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import '../nighthome/NightCard.scss'
import avatar from '../img/avatar.png'
import upgrade from '../img/upgrade.png'

export default class NightCard extends Component{
    static defaultProps ={
        textValue: '你好呀',
        num: 0,
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
        let colorOne = 'rgba(127, 163, 157, 1)'
        let colorTwo = 'rgba(132, 120, 145, 1)'
        let colorThree = 'rgba(177, 146, 146, 1)'
        let { num } = this.props
        switch (num) {
            case 0: colorOne = 'rgba(127, 163, 157, 1)'
                colorTwo = 'rgba(177, 146, 146, 1)'
                colorThree = 'rgba(90, 125, 139, 1)'
            break;
            case 1: colorOne = 'rgba(132, 120, 145, 1)'
                colorTwo = 'rgba(90, 125, 139, 1)'
                colorThree = 'rgba(127, 163, 157, 1)' 
            break;
            case 2: colorOne = 'rgba(177, 146, 146, 1)' 
                colorTwo = 'rgba(127, 163, 157, 1)'
                colorThree = 'rgba(132, 120, 145, 1)' 
            break;
            case 3: colorOne = 'rgba(90, 125, 139, 1)'
                colorTwo = 'rgba(132, 120, 145, 1)'
                colorThree = 'rgba(177, 146, 146, 1)' 
            break;
        }
        const backgroundColorTwo = {
            background: colorTwo
        }
        const backgroundColorOne = {
            background: colorOne
        }
        const backgroundColorThree = {
            background: colorThree
        }
        return(
            <View className='cardContainer'>
               <View className='cardOne' onClick={this.toComment} style={backgroundColorOne}>
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
                <Image src={upgrade} className='upgrade' />
                <View className='cardTwo' style={backgroundColorTwo}></View>
                <View className='cardThree' style={backgroundColorThree}></View>
            </View>
        )
    }
}