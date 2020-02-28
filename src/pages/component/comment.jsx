import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Input } from '@tarojs/components'
import Dialog from './Dialog'
import './comment.scss'


export default class Comment extends Component {
    state = {
        inpuValue: '说点什么吧...',
    } 
    handleInputChange(e) {
        this.setState({
            inpuValue: e.target.value,
        })
    }
    handleInput(){
        this.setState({
            inpuValue:''
        })
    }
    handleClose(){
        if (this.state.inpuValue != '' && this.state.inpuValue != '说点什么吧...'){
        this.props.onCloseInput()
        }
    }

    render() {
        return (
            <Dialog>
                <View className='inputContainer'>
                    <Input value={this.state.inpuValue} 
                    className='comment' 
                    onFocus={this.handleInput.bind(this)} 
                    onInput={this.handleInputChange.bind(this)} 
                    maxLength={35}
                    ></Input>
                    <Button className='commentButton' onClick={this.handleClose.bind(this)}>确定</Button>
                </View>
            </Dialog >
        )
    }
}