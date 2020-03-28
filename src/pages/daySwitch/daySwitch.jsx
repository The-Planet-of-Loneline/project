import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './daySwitch.scss'
import day from '../img/daySwitch.png'
import night from '../img/nightSwitch.png'


export default class Footer extends Component {
    componentDidMount(){
        const to = this.$router.params.to
        setTimeout(() => {
           Taro.reLaunch({
               url:`/pages/${to}/${to}`
           })
        }, 1500);
    }
   


    render(){
        const to = this.$router.params.to
        return(
            <View className='bgcontainer'>
                {to==='day'
                ?<Image src={day} className='bg' />
                :<Image src={night} className='bg' />}
            </View>
        )
    }
    
}