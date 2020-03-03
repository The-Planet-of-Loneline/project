import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import '../nighthome/NightCard.scss'
import avatar from '../img/avatar.png'
import upgrade from '../img/upgrade.png'
import Fetch from '../../service/fetch'
import img0 from '../../assets/user_img/img0.png'
import img1 from '../../assets/user_img/img1.png'
import img2 from '../../assets/user_img/img2.png'
import img3 from '../../assets/user_img/img3.png'
import img4 from '../../assets/user_img/img4.png'
import img5 from '../../assets/user_img/img5.png'
import img6 from '../../assets/user_img/img6.png'
import img7 from '../../assets/user_img/img7.png'
import img8 from '../../assets/user_img/img8.png'
import img9 from '../../assets/user_img/img9.png'

export default class NightCard extends Component{
    static defaultProps ={
        textValue: '',
        num: 0,
        color:'',
        sendTime:''
    }
    state={
        name:'',
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
    upgrade(){
       this.props.onupdate()
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
            background: this.props.color
        }
        const backgroundColorThree = {
            background: colorThree
        }
        switch (num) {
            case 0:this.setState({name:{img0}}) 
                break;
            case 1: this.setState({ name: { img1 } }) 
                break; 
            case 2: this.setState({ name: { img2 } })  
                break;
            case 3: this.setState({ name: { img3 } }) 
                break;
            case 4: this.setState({ name: { img4 } }) 
                break;
            case 5: this.setState({ name: { img5 } }) 
                break;
            case 6: this.setState({ name: { img6 } }) 
                break;
            case 7: this.setState({ name: { img7 } }) 
                break; 
            case 8: this.setState({ name: { img8 } }) 
                break;
            case 9: this.setState({ name: { img9 } }) 
                break;
            
            
            }
        return(
            <View className='cardContainer'>
               <View className='cardOne' onClick={this.toComment} style={backgroundColorOne}>
                  <View className='avatarTime'>
                    <View className='avatar'>
                        <Image src={this.state.name} className='avatarImg' />
                    </View>
        <Text className='time'>{this.props.sendTime}</Text>    
                  </View>
                  <View className='textContainer'>
                    <View className='text'>
                        {this.props.textValue}
                    </View>
                  </View> 
               </View>
                <Image src={upgrade} className='upgrade' onClick={this.upgrade.bind(this)} />
                <View className='cardTwo' style={backgroundColorTwo}></View>
                <View className='cardThree' style={backgroundColorThree}></View>
            </View>
        )
    }
}