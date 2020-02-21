import Taro, { Component } from '@tarojs/taro'
import { View, Image,Text, Input } from '@tarojs/components'
import FooterDay from '../component/FooterDay'
import './edit.scss'
import edit from '../img/edit.png'

export default class day extends Component{
    state={
        inputValue: this.$router.params.name
    }
    onhandleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleSubmit() {
        const name = this.state.inpuValue

        Taro.redirectTo({
            url: `/pages//?name=${name}`
        })
    }
   
    render(){
        const {inputValue} = this.state
        return(
            <View>
                <View className='head'>
                    <View className='headText'>
                        编辑资料
                    </View>
                </View>
                    <View className='container'>
                        <View className='card'>
                            <View className='content'>昵称：<Input className='name' value={inputValue} onInput={this.onhandleInputChange.bind(this)}>HCL2</Input>
                            <Image src={edit} className='edit' onClick={this.handleSubmit.bind(this)} />
                            </View>
                            <View className='content'>学号：2019214***</View>
                            <View className='content'>性别：男</View>
                            <View className='content'>学院：xx学院</View>
                            <View className='content'>年级：19级</View>
                            
                        </View>
                    </View>
                
                <FooterDay />
            </View > 
        )
    }
}