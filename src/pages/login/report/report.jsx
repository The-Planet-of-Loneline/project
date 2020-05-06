import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Textarea } from '@tarojs/components'
import Dialog from '../../component/Dialog'
import Fetch from '../../../service/fetch'
import './report.scss'


export default class Report extends Component {
   state={
       value:''
   } 
   onHanlde(e){
    this.setState({
        value: e.target.value
    })
   }
    cancel() {
        this.props.onClose();
    }
    handleSubmit() {
        const {value} = this.state
        if(value)
        Fetch(`report/feedback/`,
            {content: value},
            'POST').then(res => {
                Taro.showToast({
                    title: '提交成功',
                    icon: 'none'
                })
                this.props.onClose()
            });
        else 
        Taro.showToast({
            title: '请输入建议',
            icon: 'none'
        }) 
    }

    render() {
        return (
            <Dialog onHandleClose={()=>{return false}}>
                <View className='cardContainer'>
                    <View className='card'>
                        <View className='cardText'>
                            <Textarea className='Text' 
                            placeholder='欢迎发现开发团队藏起来的bug和不足哦~'
                            value={this.state.value}
                            onInput={this.onHanlde.bind(this)}></Textarea></View>
                        <View className='cardButton'>
                            <Button className='cancel' onClick={this.handleSubmit.bind(this)}>提交</Button>
                            <View className='more'>
                                更多问题欢迎加群反馈：<Text className='color'>293144869</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Dialog >
        )
    }
}