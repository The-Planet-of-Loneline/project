import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Input } from '@tarojs/components'
import Dialog from './Dialog'



export default class Comment extends Component {
    state = {
        inpuValue: ''
    } 
    handleInputChange(e) {
        this.setState({
            inpuValue: e.target.value,
        })
    }
    render() {
        return (
            <Dialog>
                <View className='inputContainer'>
                    <Input value={this.state.inpuValue} className='comment'></Input>
                    <Button className='commentButton'>确定</Button>
                </View>
            </Dialog >
        )
    }
}