import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import '../nighthome/NightCard.scss'
import report from '../img/report.png'
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
        number: 0,
        color:'',
        sendTime:'',
        Debunkid: 0,
        Sid:''
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
            url:`/pages/commentNight/comment?text=${this.props.textValue}&&color=${this.props.color}&&Debunkid=${this.props.Debunkid}&&sid=${this.props.Sid}`
        })
    }
    toReport(){
        Taro.navigateTo({
            url:`/pages/nightReport/nightReport?id=${this.props.Debunkid}&&mode = ${1}`
        })
    }
    render(){
      
        let { number } = this.props
        const backgroundColorOne = {
            background: this.props.color
        }
      
        switch (number) {
            case 0:this.setState({name:img0}) 
                break;
            case 1: this.setState({ name:  img1  }) 
                break; 
            case 2: this.setState({ name:  img2  })  
                break;
            case 3: this.setState({ name:  img3  }) 
                break;
            case 4: this.setState({ name:  img4  }) 
                break;
            case 5: this.setState({ name:  img5  }) 
                break;
            case 6: this.setState({ name:  img6  }) 
                break;
            case 7: this.setState({ name:  img7  }) 
                break; 
            case 8: this.setState({ name:  img8  }) 
                break;
            case 9: this.setState({ name:  img9  }) 
                break; 
            }
        return(
            <View className='cardContainer'>
               <View className='cardOne'  style={backgroundColorOne}>
                  <View className='avatarTime'>
                    <View className='avatar'>
                        <Image src={this.state.name} className='avatarImg' />
                    </View>
                    <Text className='time'>{this.props.sendTime}</Text>
                    <Image src={report} className='report' onClick={this.toReport} />    
                  </View>
                  <View className='textContainer'>
                        <View className='text' onClick={this.toComment}  >
                       <Text> {this.props.textValue}</Text>
                    </View>
                  </View> 
               </View> 
            </View>
        )
    }
}