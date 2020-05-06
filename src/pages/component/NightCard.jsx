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
        color2:'',
        color3:''
    }
   
    componentWillMount() {

    }

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
      
        let { number ,color} = this.props
        const {color2,color3} = this.state
        const backgroundColorOne = {
            background: this.props.color
        }
        const backgroundColorTwo = {
            background: color2
        } 
        const backgroundColorThree = {
            background: color3
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
        if (color === 'rgba(30, 30, 40, 1)') this.setState({ color2: '#575B66', color3: '#67716E' });
        else if (color === 'rgba(129, 117, 142, 1)') this.setState({ color2: '#817C95', color3: '#9093AC' });
        else if (color === 'rgba(98, 98, 123, 1)') this.setState({ color2: '#7791A3', color3: '#9EA3BD' });
        else if (color === 'rgba(173, 143, 143, 1)') this.setState({ color2: '#CFBA8A', color3: '#A6AA84' });
        else if ('rgba(124, 159, 154, 1)') this.setState({ color2: '#959EB2', color3: '#A4B994' });
        else if (color === 'rgba(92, 124, 138, 1)') this.setState({ color2: '#97BCB1', color3: '#A4A3B8' });

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
               <View className='cardTwo' style={backgroundColorTwo}></View>
               <View className='cardThree' style={backgroundColorThree}></View> 
            </View>
        )
    }
}