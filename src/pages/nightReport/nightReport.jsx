import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Textarea } from '@tarojs/components'
import Chosen from './chosen/chosen'
import Footer from '../component/Footer'
import Fetch from '../../service/fetch'
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
        text: ''
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
                Chosen.push(a.id)
            }
        }
        for (let a of Else) {
            if (a.chosen) {
                chosen.push(a.id)
            }
        }
        switch(this.$router.params.mode){
       case '1': Fetch(`report/night/:secret_id/?secretId=${this.$router.params.id}`,
        {
            reson: JSON.stringify(chosen),
            addition: text
        },
        'POST')
        break;
    case '0':
        Fetch(`report/night/:comment_id/?commentId=${this.$router.params.id}`,
        {
            reson: JSON.stringify(chosen),
            addition: text
        },
        'POST'); 
   break; 
    }}
    updateParent(value,i,name){
        console.log(value,i,name)
        let {outLaw,othersRight,Else,Chosen} = this.state
        switch(name){
            case 'outLaw': outLaw[i - 1].chosen = value ;break;
            case 'othersRight': othersRight[i - 5].chosen = value ; break;
            case 'Else':  Else[i - 7].chosen = value ; break;
        }
        this.setState({
            outLaw: outLaw,
            othersRight:othersRight ,
            Else: Else,
        },()=> console.log(outLaw,othersRight,Else))
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
            <View className='textContainer'>
                <Textarea 
                className='input' 
                placeholder='详细说明你的问题' 
                value={this.state.text} 
                onInput={this.handelInput.bind(this)}></Textarea>
            </View>
            <View className='submit'>提交</View>
            <Footer onToSecret={() => { return false }} onToMine={()=>{return false}}/>
        </View>
    </View>)
}
}