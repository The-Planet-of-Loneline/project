import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './chosen.scss'

export default class Chosen extends Component{
     deaultProps = {
        content:'',
        chosen: 0,
        i: 0,
        name: ''
    }
    handleChosen(){
        const {i,chosen,name} = this.props
        if(!chosen){
           this.props.onupdateParent(1,i,name)
        }else{ 
            this.props.onupdateParent(0,i,name)
            }
    }
    render(){
        let {chosen} = this.props
        return(
            <View className='container'>
                <View className='choosePoint' onClick={this.handleChosen.bind(this)}>
                    {chosen?<View className='point'></View>:null}
                </View>
                <View className='text'><Text>{this.props.content}</Text></View>
            </View>
        )
    }
}