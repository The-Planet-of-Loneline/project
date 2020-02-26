import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Footer from '../component/Footer'
import Delete from '../img/delete.png'
import './cardHistory.scss'
import SecretCard from '../component/secretCard'
import DeleteCard from '../component/deleteCard'

export default class CardHistory extends Component {
   
    state = {
        showDeleteModel: false
    }


    config = {
        navigationBarTitleText: '孤独星球'
    }

    delete(){
        this.setState({
           showDeleteModel: true 
        })
    }

    CloseDelete(){
        this.setState({
            showDeleteModel: false
        }) 
    }
    toSecret() {
        Taro.redirectTo({
            url: '/pages/nighthome/nighthome'
        })

    } 

    render() {
        let { showDeleteModel } = this.state
        let number = this.$router.params.number 
        return (
            <View className='all'>
                <View className='header'>
                    <View className='head'>历史记录</View>
                </View>
                {showDeleteModel ? <DeleteCard onCloseDelete={this.CloseDelete.bind(this)} /> : null}
                <Image src={Delete} className='delete' onClick={this.delete.bind(this)} />
                <SecretCard num={number} showComment={false} /> 
                <Footer colorMine='rgba(80, 195, 243, 1)' colorSecret='rgba(194, 198, 206, 1)' showImg={false} onToSecret={this.toSecret.bind(this)} />
            </View>
            //头部结束
        )
    }
}