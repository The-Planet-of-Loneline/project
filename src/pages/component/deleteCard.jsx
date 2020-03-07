import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import Dialog from './Dialog'
import './deleteCard.scss'
import Fetch from '../../service/fetch'


export default class DeleteCard extends Component {
    static defaultProps = {
        Debunkid: 0,
    }
    cancel(){
        this.props.onCloseDelete();
    }
    handleDelete(){
        Fetch(`secret/delete/:secret_id?secretId=${this.props.Debunkid}`,
        {},
        'DELETE').then(res => {
              Taro.redirectTo({
                url:'/pages/Mine/Mine'
            })
        })
    }

    render() {
        return (
            <Dialog>
            <View className='cardContainer'>
                <View className='card'>
                    <View className='cardText'>确定后，将删除此历史记录。</View>
                    <View className='cardButton'>
                    <Button className='cancel' onClick={this.cancel.bind(this)}>取消</Button>
                    <Button className='confirm' onClick={this.handleDelete.bind(this)}>确定</Button>
                    </View>
                </View>
            </View>
           </Dialog > 
        )
    }
}