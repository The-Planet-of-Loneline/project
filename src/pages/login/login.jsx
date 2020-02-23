import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image, Input } from '@tarojs/components'
import bg from '../img/bg.png'
import './login.scss'
import view from '../img/view.png'
import viewOff from '../img/viewOff.png'

export default class login extends Component{
    state={
        showView: true,
        idValue: '',
        passwordValue: ''
}
    onHandleId(e){
        this.setState({
            idValue:e.target.value
        })
    }
    onHandlePassword(e) {
        this.setState({
            passwordValue: e.target.value
        })
    }
    onViewPassword(){
        const {showView} = this.state
        if (showView){
        this.setState({
            showView: false,
        })}else{
            this.setState({
                showView: true,
            }) 
        }
    }
    render(){
        return(
            <View className='container'>
                <View className='bgcontainer'><Image className='bg' src={bg} /></View>
                <View className='greeting'>欢迎登陆孤独星球</View>
                <Input type='number' placeholder='请输入学号' className='id' Value={idValue} onInput={this.onHandleId.bind(this)}></Input>
                <Input type={showView ? 'password' : 'text'} placeholder='请输入密码' className='password' value={passwordValue} onInput={this.onHandlePassword.bind(this)}></Input>
                <Image className='view' src={showView ? view : viewOff} onClick={this.onViewPassword.bind(this)} />
            </View>
        )
    }
}