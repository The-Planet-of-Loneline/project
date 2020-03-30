import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Label } from '@tarojs/components'
import Footer from '../../component/Footer/Footer'
import './edit.scss'
import Edit from '../img/edit.png'
import Fetch from '../../service/fetch'

export default class edit extends Component{
    state={
        inputValue: '',
        info:{
            stuid:'',
            sex:'',
            college:'',
            grade:'',
        }
    }

    componentWillMount(){
        const { stuid, sex, college, grade } = this.$router.params
        const nickname = Taro.getStorageSync('Nickname')
        this.setState({
            inputValue: nickname,
            info: {
                stuid,
                sex,
                college,
                grade
            }
        })
        
    }

    componentWillUnmount(){
        const verify_info = this.state.inputValue
        const nickname = Taro.getStorageSync('Nickname')
        if (verify_info !== nickname) {
            Fetch(
                'user/change_info/',
                {
                    verify_info ,
                    verify_item: 'Nickname'
                },
                'POST'
            )
            Taro.setStorage({
                key: 'Nickname',
                data: verify_info
            })
        }
    }

    onhandleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
   
    render(){
        const {inputValue} = this.state
        const {info} = this.state
        return(
            <View>
                <View className='head'>
                    <View className='headText'>
                        编辑资料
                    </View>
                </View>
                    <View className='container'>
                        <View className='card'>
                            <View className='content'>
                                昵称：
                                <Input 
                                  className='name'
                                  maxLength='8'
                                  value={inputValue}
                                  onInput={this.onhandleInputChange.bind(this)}
                                  id='1'
                                />
                                <Label className='edit-label' for='1' key='1'><Image src={Edit} className='edit' /></Label>
                            </View>
                            <View className='content'>学号：{info.stuid}</View>
                            <View className='content'>性别：{info.sex}</View>
                            <View className='content'>学院：{info.college}</View>
                            <View className='content'>年级：{info.grade}</View>
                        </View>
                    </View>
                <Footer mode='my' />
            </View > 
        )
    }
}