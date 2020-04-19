import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input,Image, Textarea, Button } from '@tarojs/components'
import Head from '../component/Head'
import Footer from '../component/Footer'
import './writeSecret.scss'
import Color from '../img/color.png'
import check from '../img/checked.png'
import Fetch from '../../service/fetch'

export default class WriteSecret extends Component {

 
    constructor(props) {
        super(props)
        this.state = {
            inpuValue: '说个秘密吧...',
            bgcolor: 'rgba(30, 30, 40, 1)',
            show1: true,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
           
        }
    }

    componentWillMount() { 
        Taro.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
    }
    

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() {  }

    colorChangB(){
        this.setState({
            bgcolor:'rgba(30, 30, 40, 1)',
            show1: true,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
        })
    }
    colorChangBlue(){
        this.setState({
            bgcolor:'rgba(92, 124, 138, 1)',
            show1: false,
            show2: true,
            show3: false,
            show4: false,
            show5: false,
            show6: false,
        })
    }
    colorChangG(){
        this.setState({
            bgcolor:'rgba(151, 151, 151, 1)',
            show1: false,
            show2: false,
            show3: true,
            show4: false,
            show5: false,
            show6: false,
        })
    }
    colorChangGray(){
        this.setState({
            bgcolor:'rgba(98, 98, 123, 1)',
            show1: false,
            show2: false,
            show3: false,
            show4: true,
            show5: false,
            show6: false,
        })
    }
    colorChangP(){
        this.setState({
            bgcolor:'rgba(129, 117, 142, 1)',
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: true,
            show6: false,
        })
    }
    colorChangPink(){
        this.setState({
            bgcolor:'rgba(173, 143, 143, 1)',
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: true,
        })
    }
    handleInput(){
        if (this.state.inpuValue == '说个秘密吧...'){
            this.setState({
            inpuValue:''
        })}
    }
    handleChange(){
      
        let  value  = this.state.inpuValue
        this.setState({
            inpuValue:value
        })
    }
    handleInputChange(e) { 
        this.setState({
            inpuValue:e.target.value
        })
        
    }
    
    toSecret() {
        Taro.redirectTo({
            url: '/pages/nighthome/nighthome'
        })
    }
    toMine() {
        Taro.redirectTo({
            url: '/pages/Mine/Mine'
        })
    }
    onhandleSubmit(){
      const text = this.state.inpuValue 
      const {bgcolor} = this.state
        if (text && text != '说个秘密吧...'){ 
      Fetch('secret/create/',
        {
            colour:bgcolor,
            content:text,
        },
        'POST').then(res => {
            switch(res.message){
                case 'Success':
                    Taro.redirectTo({
                        url: `/pages/nighthome/nighthome`
                    })
                    Taro.setStorage({
                        key:'secretId',
                        data:res.secretId
                    }) 
                    break;
            }
        })
    }else{
        Taro.showToast({
            icon:'none',
            title:'不能发送空白秘密'
        })
    }
}
    handleback(){
        const text = this.state.inpuValue 
        if (!text){ 
        this.setState({
            inpuValue: '说个秘密吧...',
        })
    } 
}
     
    config = {
        navigationBarTitleText: '孤独星球'
    }

    render() {
        let {bgcolor} = this.state 
        let Value  = this.state.inpuValue 
        
        const cardStyle={
            backgroundColor:bgcolor
        }
       const {show1,show2,show3,show4,show5,show6} = this.state 
        return (
            <View className='all'>
                <Head colorTA='rgba(185, 189, 203, 1)' colorWrite='rgba(242, 245, 251, 1)' showUnderline={false} onToSecret={this.toSecret.bind(this)} />
                <View className='title'>
                    <View className='titleText'>
                        除了你自己，没人会知道你的身份
                    </View>
                </View>
                <View className='writeContainer' style={cardStyle}>
                    <Textarea 
                    className='write' 
                    value={Value} 
                    onInput={this.handleInputChange.bind(this)} 
                    onFocus={this.handleInput.bind(this)}
                    onBlur={this.handleback.bind(this)} 
                    showConfirmBar={false}
                    maxlength={75}
                    autoFocus={true}
                    ></Textarea>
                    <Image src={Color}  className='color' />
                    <Button className='post' onClick={this.onhandleSubmit.bind(this)}>发表</Button>
                </View>
                <View className='colorContainer'>
                   
                    <View className='colorCir' style='background-color:rgba(30, 30, 40, 1)' onClick={this.colorChangB.bind(this)}>{show1 ? <Image src={check} className='check' /> : null}</View>
                    <View className='colorCir' onClick={this.colorChangBlue.bind(this)}>{show2 ? <Image src={check} className='check' /> : null}</View>
                    <View className='colorCir' style='background-color:rgba(124, 159, 154, 1)' onClick={this.colorChangG.bind(this)}>{show3 ? <Image src={check} className='check' /> : null}</View>
                    <View className='colorCir' style='background-color:rgba(98, 98, 123, 1)' onClick={this.colorChangGray.bind(this)}>{show4 ? <Image src={check} className='check' /> : null}</View>
                    <View className='colorCir' style='background-color:rgba(129, 117, 142, 1)' onClick={this.colorChangP.bind(this)}>{show5 ? <Image src={check} className='check' /> : null}</View>
                    <View className='colorCir' style='background-color:rgba(173, 143, 143, 1)' onClick={this.colorChangPink.bind(this)}>{show6 ? <Image src={check} className='check' /> : null}</View>
                </View>
                <Footer onToMine={this.toMine.bind(this)} onToSecret={()=>{return false}} />
            </View>
            //头部结束
        )
        }
    
 }