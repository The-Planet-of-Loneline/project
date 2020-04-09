import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import '../Info/infoCard.scss'
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
import Fetch from '../../service/fetch'


export default class InfoCard extends Component{
    static defaultProps = {
        time:'',
        text:'',
        sid:'',
        status: 0,
        number: 0,
        cid:''
    }
    state = {
        name:'',
        history:[],
        showRed: true
    }
    componentWillMount(){
        Fetch(`secret/view/:secret_id/?secretId=${this.props.sid}`,
            {}, 'GET').then(res => {
                this.setState({ history: res.secret })
            })
            if(this.props.status){
                this.setState({
                    showRed: false
                })
            } 
    }
    Info(){
        Taro.navigateTo({
            url: `/pages/infoalert/infoalert?Debunkid=${this.props.sid}&&Text=${this.state.history.Content}&&color=${this.state.history.Colour}`
        })
        Fetch(`remind/night/remindbox/status/:comment_id/?commentId = ${this.props.cid}`,
        {},
        'POST').then(()=>{
            this.setState({
                showRed: false
            })
        })
    }
    render(){
        switch (this.props.number) {
            case 0: this.setState({ name: img0 })
                break;
            case 1: this.setState({ name: img1 })
                break;
            case 2: this.setState({ name: img2 })
                break;
            case 3: this.setState({ name: img3 })
                break;
            case 4: this.setState({ name: img4 })
                break;
            case 5: this.setState({ name: img5 })
                break;
            case 6: this.setState({ name: img6 })
                break;
            case 7: this.setState({ name: img7 })
                break;
            case 8: this.setState({ name: img8 })
                break;
            case 9: this.setState({ name: img9 })
                break;}
        return(
            <View className='Card'>
                <Image src={this.state.name} className='avatar' />
                <View className='textContainer' onClick={this.Info.bind(this)} >
        <View className='time'>{this.props.time}</View>
        <View className='text'>{this.props.text}</View>
                    {showRed ? <View className='red'></View> : null}
                </View>
            </View>
        )
    }
}