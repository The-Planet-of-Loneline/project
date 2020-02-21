import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input, Label } from '@tarojs/components'
import Footer from '../../component/Footer/Footer'
import './edit.scss'
import Edit from '../img/edit.png'

export default class edit extends Component{
    state={
        inputValue: this.$router.params.name,
        info:{
            stuid:'2019214***',
            sex:0,
            college:'xx学院',
            grade:'19级',
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
        const sexC = ['男', '女']
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
                                <Label for='1'><Image src={Edit} className='edit' /></Label>
                            </View>
                            <View className='content'>学号：{info.stuid}</View>
                            <View className='content'>性别：{sexC[info.sex]}</View>
                            <View className='content'>学院：{info.college}</View>
                            <View className='content'>年级：{info.grade}</View>
                        </View>
                    </View>
                <Footer mode='need' />
            </View > 
        )
    }
}