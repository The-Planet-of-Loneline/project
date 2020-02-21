import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import Dialog from './Dialog'
import './deleteCard.scss'


export default class DeleteCard extends Component {
    cancel(){
        this.props.onCloseDelete();
    }

    render() {
        return (
            <Dialog>
            <View className='cardContainer'>
                <View className='card'>
                    <View className='cardText'>确定后，将删除此历史记录。</View>
                    <View className='cardButton'>
                    <Button className='cancel' onClick={this.cancel.bind(this)}>取消</Button>
                    <Button className='confirm'>确定</Button>
                    </View>
                </View>
            </View>
           </Dialog > 
        )
    }
}