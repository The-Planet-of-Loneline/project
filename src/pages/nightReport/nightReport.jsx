import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Textarea } from '@tarojs/components'
import Chosen from './chosen/chosen'
import Footer from '../component/Footer'
import Fetch from '../../service/fetch'
import Toast from './toast/toast'
import './nightReport.scss'

export default class nightReport extends Component {
    state={
        outLaw: [
            { content: '色情低俗', chosen: 0 , id: 1},
            { content: '暴力血腥', chosen: 0 , id: 2},
            { content: '政治敏感', chosen: 0 , id: 3},
            { content: '欺诈骗财', chosen: 0 , id: 4},
        ],
        othersRight:[
            { content: '人身攻击', chosen: 0 ,id: 5},
            { content: '侵犯隐私', chosen: 0 ,id: 6},
        ],
        Else:[
            { content: '广告骚扰', chosen: 0 ,id: 7},
            { content: '侮辱谩骂', chosen: 0 ,id: 8},
            { content: '其他', chosen: 0 ,id: 9},
        ],
        chosen:[],
        text: '',
        show: false
    }
    componentDidMount(){
        console.log(this.$router.params)
    }
    handelInput(e){
        this.setState({
            text:e.target.value
        })
    }
    handelSubmit(){
        const {chosen,text,outLaw,othersRight,Else} =this.state
        
        for(let a of outLaw){
            if(a.chosen){
               chosen.push(a.id) 
            }
        }
        for (let a of othersRight) {
            if (a.chosen) {
                chosen.push(a.id)
            }
        }
        for (let a of Else) {
            if (a.chosen) {
                chosen.push(a.id)
            }
        }
        if(chosen.length && text){
        if(this.$router.params.mode === " 1"){
        Fetch(`report/night/secret/:secret_id/?secretId=${this.$router.params.id}`,
                {
                reason: chosen.toString(),
                addition: text
                }, 'POST')}
        else{        
        Fetch(`report/night/comment/:comment_id/?commentId=${this.$router.params.id}`,
                {
                    reason: chosen.toString(),
                    addition: text
                }, 'POST').then(this.setState({
                    show: true
                }))} 
                } 
        else if (!chosen){
            Taro.showToast({
                title: '请选择理由',
                icon: 'none'
            })
        }
        else if(!text){
            Taro.showToast({
                title: '请填写举报详情',
                icon: 'none'
            }) 
        }
       }
    updateParent(value,i,name){
        let {outLaw,othersRight,Else} = this.state
        switch(name){
            case 'outLaw': outLaw[i - 1].chosen = value ;break;
            case 'othersRight': othersRight[i - 5].chosen = value ; break;
            case 'Else':  Else[i - 7].chosen = value ; break;
        }
        this.setState({
            outLaw: outLaw,
            othersRight:othersRight ,
            Else: Else,
        })
    }
render(){
    let {outLaw,othersRight,Else} = this.state
    return(<View className='all'>
        <View className='header'>
            <View className='head'>举报</View>
        </View>
        <View>
            <View className='Container'>
                <View className='outLaw'>违法违规</View>
                <View className='content'>{outLaw.map((a,index)=>{
                    return(
                   <Chosen 
                   content={a.content}
                   chosen={a.chosen}
                   key={index}
                   i={a.id}
                   onupdateParent={this.updateParent.bind(this)}
                   name='outLaw'
                   />)
                })}
            </View>
            </View>
            <View className='Container'>
                <View className='outLaw'>侵犯他人权益</View>
                <View className='content'>{othersRight.map((a, index) => {
                    return (
                        <Chosen
                            content={a.content}
                            chosen={a.chosen}
                            key={index}
                            i={a.id}
                            onupdateParent={this.updateParent.bind(this)}
                            name='othersRight'
                        />)
                })}
                </View>
            </View>
            <View className='Container'>
                <View className='outLaw'>其他</View>
                <View className='content'>{Else.map((a, index) => {
                    return (
                        <Chosen
                            content={a.content}
                            chosen={a.chosen}
                            key={index}
                            i={a.id}
                            onupdateParent={this.updateParent.bind(this)}
                            name='Else'
                        />)
                })}
                </View>
            </View>
            {this.state.show? null :<View className='textContainer'>
                <Textarea 
                className='input' 
                placeholder='详细说明你的问题' 
                value={this.state.text} 
                onInput={this.handelInput.bind(this)}></Textarea>
            </View>}
            <View className='submit' onClick={this.handelSubmit.bind(this)}>提交</View>
            {this.state.show ? <Toast /> :null}
            <Footer onToSecret={() => { return false }} onToMine={()=>{return false}}/>
        </View>
    </View>)
}
}