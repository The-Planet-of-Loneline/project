import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './daySwitch.scss'
import day from '../img/daySwitch.png'
import night from '../img/nightSwitch.png'


export default class Footer extends Component {
    componentDidMount(){
        setTimeout(() => {
           Taro.redirectTo({
               url:`/pages/day/day`
           })
        }, 1000);
    }
   
    render(){
        return(
            <View className='bgcontainer'>
                <Image src={day} className='bg' />
            </View>
        )
    }
    
}