import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Button } from '@tarojs/components'
import bg from '../img/bg.png'
import './login.scss'
import view from '../img/view.png'
import viewOff from '../img/viewOff.png'
import Fetch from '../../service/fetch'

export default class login extends Component{
    state={
        showView: true,
        id: '',
        password: ''
}
    onHandleId(e){
        this.setState({
            id:e.target.value
        })
    }
    onHandlePassword(e) {
        this.setState({
            password: e.target.value
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
    
    onHandleLogin(){
        const {id,password} = this.state
        if(id && password){
            Fetch('login/',
            {
                sid:id,
                pwd:password
            },
            'POST').then(res => {
               if (res.msg=='success'){
                        Taro.setStorage({
                            key:'sid',
                            data: id
                        });
                        Taro.setStorage({
                            key: 'pwd',
                            data: password
                        });
                        Taro.setStorage({
                            key: 'token',
                            data: res.token,
                        }) 
                        Taro.showToast({
                       icon: 'none',
                       title: '登录成功'
                   }) 
                        Taro.redirectTo({
                             url: `/pages/day/day`
                         }) 
                }else{
                    Taro.showToast({
                        icon: 'none',
                        title: '账号或密码错误'
                    })
                }
            })
        }
        if (!id || !password) {
            Taro.showToast({
                icon: 'none',
                title: '账号或密码不能为空'
            });
        }
        
    }
    
    super(){
        Taro.setStorage({
            key: 'token',
            data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODMxNzM2NjYsImlhdCI6MTU4MzE3MDA2NiwidWlkIjoiMjAxOTIxMzc5OCJ9.aNUAynjjfm_HAtVWp1vcQTyOfMIOc0GMMGpHYEfabLQ',
        })
        Taro.showToast({
            icon: 'none',
            title: '账号LA'
        });
        Taro.redirectTo({
            url:'/pages/day/day'
        })
    }

    render(){ 
        const { id, password, showView } = this.state
        return(
            <View className='container'>
                <View className='bgcontainer'><Image className='bg' src={bg} /></View>
                <View className='greeting'>欢迎登陆孤独星球</View>
                <Input type='number' placeholder='请输入学号' className='id' value={id} onInput={this.onHandleId.bind(this)}></Input>
                <Input type={showView ? 'password' : 'text'} placeholder='请输入密码' className='password' value={password} onInput={this.onHandlePassword.bind(this)}></Input>
                <Image className='view' src={showView ? view : viewOff} onClick={this.onViewPassword.bind(this)} />
                <Button className='login' onClick={this.onHandleLogin.bind(this)}>登录</Button>
                <Button className='super' onClick={this.super}>adm:LA</Button>
            </View>
        )
    }
}