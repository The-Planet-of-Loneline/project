import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Button,Text } from '@tarojs/components'
import bg from '../img/bg.png'
import './login.scss'
import view from '../img/view.png'
import viewOff from '../img/viewOff.png'
import Fetch from '../../service/fetch'
import Toast from './toast/toast'
import Report from './report/report'

export default class login extends Component{
    state={
        showView: true,
        id: '',
        password: '',
        loading: false,
        powered:false,
        mask:false,
        li: true,
        report: false
    }

    componentWillMount () {
        Taro.getSetting({
            success: (res) => {
                this.setState({ powered: res.authSetting['scope.userInfo']})
            }
        })
        const id = Taro.getStorageSync('sid')
        const password = Taro.getStorageSync('pwd')
        if (id) {
            this.setState({ id })
        }
        if (password) {
            this.setState({ password })
        }
        if(id&&password){
            this.setState({mask:true})
        }
        Taro.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
    }

    componentDidMount () {
        console.log("%c	___          ___________    ___     ___     ___________ ",'color:#39b54a')
        console.log("%c	\\  \\         \\   _____  \\   \\  \\    \\  \\    \\  ________\\ ",'color:#39b54a')
        console.log("%c	 \\  \\         \\  \\    \\  \\   \\  \\\\\\  \\  \\    \\  \\________ ",'color:#39b54a')
        console.log("%c 	  \\  \\         \\  \\    \\  \\   \\  \\ \\\\ \\  \\    \\   _______\\ ",'color:#39b54a')
        console.log("%c	   \\  \\______	\\  \\____\\  \\   \\  \\  \\\\\\  \\    \\  \\________ ",'color:#39b54a')
        console.log("%c	    \\________\\   \\__________\\   \\__\\    \\__\\    \\__________\\ ",'color:#39b54a')
	    console.log('%c木%c犀%c团%c队%c1%c9%c级%c制%c作','color:#e54d42','color:#f37b1d','color:#fbbd08','color:#8dc63f','color:#39b54a','color:#1cbbb4','color:#0081ff','color:#6739b6','color:#9c26b0')
    }
    
    config = {navigationBarTitleText: '孤独星球'}

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
    onHandleMask(){
        const {mask} = this.state
        if(mask)
        this.setState({
           mask:false 
        })
        else this.setState({mask:true})
    }
    
    onHandleLi(){
        const{li} = this.state
        if(li) this.setState({li: false});
        else this.setState({li:true});
    }
    onHandleRe(){
        const {report} = this.state
        if(report) this.setState({report: false});
        else this.setState({report: true})
    }

    handleClose(){
        this.setState({li:true})
    }

    handleCloseR(){
        this.setState({report:false})
    }

    onHandleLogin(){
        const {id,password,loading,mask} = this.state
        if(id && password && !loading && mask){
            this.setState({ loading: true})
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
                   if (res.count===0) {
                        Taro.redirectTo({
                            url: `/pages/day/day`
                        })
                   } else {
                        Taro.redirectTo({
                        url: '../guide/guide'
                        })
                   }
                    
                } else if (res.msg==='server_wrong') {
                    Taro.showToast({
                        icon: 'none',
                        title: '服务器错误'
                    })
                    this.setState({ loading: false })
                }else{
                    Taro.showToast({
                        icon: 'none',
                        title: '账号或密码错误'
                    })
                    this.setState({ password: '', loading: false })
                }
            })
        }
        if (!id || !password) {
            Taro.showToast({
                icon: 'none',
                title: '账号或密码不能为空'
            });
        }
        if(!mask){
            Taro.showToast({
                icon: 'none',
                title: '请同意相关条例'
            }); 
        }       
    }

    power () {
        Taro.getSetting({
            success: (res) => {
              this.setState({ powered:res.authSetting['scope.userInfo']})
              if (res.authSetting['scope.userInfo']) {
                  this.onHandleLogin()
              }
            }
        })
    }

    render(){ 
        const { id, password, showView, loading, powered ,mask ,li,report} = this.state
        return(
            <View className='container'>
                {loading&&<View className='loading'></View>}
                <View className='bgcontainer'><Image className='bg' src={bg} /></View>
                <View className='greeting'>欢迎登陆孤独星球</View>
                <Input type='number' placeholder='请输入学号' className='id' value={id} onInput={this.onHandleId.bind(this)}></Input>
                {showView ? <Input type='password' placeholder='请输入密码' className='password' value={password} onInput={this.onHandlePassword.bind(this)}></Input>
                :<Input type='text' placeholder='请输入密码' className='password' value={password} onInput={this.onHandlePassword.bind(this)}></Input>}
                <Image className='view' src={showView ? view : viewOff} onClick={this.onViewPassword.bind(this)} />
               {powered
               ?<Button className='login' onClick={this.onHandleLogin.bind(this)}>登录</Button>
                :<Button open-type='getUserInfo' className='login' onClick={this.power}>登录</Button>}
                <View className="content"><View className='cir' onClick={this.onHandleMask.bind(this)}>{mask?<View className='point'></View>:null}</View><View className='text' onClick={this.onHandleLi.bind(this)}>【孤独星球】用户相关条例和隐私政策</View></View>
                {li?null:<Toast onHandleClose ={this.handleClose.bind(this)} />}
                <View className='footer'><View className='text1' onClick={this.onHandleRe.bind(this)}>反馈意见</View><View className='text2'>designed by muxi</View></View>
                {report ? <Report onClose={this.handleCloseR.bind(this)} /> : null}
            </View>
        )
    }
}
