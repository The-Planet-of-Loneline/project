import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image} from '@tarojs/components'
import '../nighthome/footer.scss'
import emailBlue from '../img/emailBlue.png'
import emailGray from '../img/emailGray.png'
import moon from '../img/moon.png'
import userGray from '../img/userGray.png'
import userBlue from '../img/userBlue.png'


export default class Footer extends Component{
    static defaultProps = {
        colorSecret:'rgba(80, 195, 243, 1)',
        colorMine:'rgba(194, 198, 206, 1)',
        showImg: true,
    }
    toMine(){
        this.props.onToMine()
    }
    toSecret(){
        this.props.onToSecret()
      } 
    toDay(){
        Taro.redirectTo({
            url: `/pages/daySwitch/daySwitch?to=day`
        })
    } 
    render(){
        let {colorMine, colorSecret,showImg} = this.props

        const styleSecret = {
            color:colorSecret
        }
        const styleMine = {
            color:colorMine
        }
     
        return( 
            <View className='footer'>
                <View className='secret' onClick={this.toSecret}>
                    <View className='secretImg'>
                        <Image src={showImg ? emailBlue : emailGray} className='imgEmail' />
                    </View>
                    <View className='secretContent' style={styleSecret}>秘密</View>
                </View>
                <View className='moon'>
                    <View className='moonImg'>
                        <Image src={moon}  className='imgMoon' onClick={this.toDay} />
                    </View>
                </View>
                <View className='mine' onClick={this.toMine}>
                    <View className='mineImg'>
                        <Image src={showImg ? userGray : userBlue}  className='imgMine' />
                    </View>
                    <View className='mineContent' style={styleMine}>我的</View> 
                </View>
            </View>
        )
    }
}