import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Input } from '@tarojs/components'
import Dialog from './Dialog'
import './comment.scss'
import Fetch from '../../service/fetch'


export default class Comment extends Component {
    static defaultProps = {
        Debunkid: 0,
    }
    state = {
        inpuValue: '说点什么吧...',
        history:[]
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
            Fetch(`comment/create/?secretId=${this.props.Debunkid}`,
            {
                comment:this.state.inpuValue
            },
            'POST').then(res => {
                console.log(res)
                
            })
            Fetch(`secret/view/:secret_id?secretId=${this.props.Debunkid}`,
                {}, 'GET').then(res => {
                    this.setState({ history: res.secret },
                        ()=>{
                            Taro.redirectTo({
                                url: `/pages/commentNight/comment?text=${this.state.history.Content}&&color=${this.state.history.Colour}&&Debunkid=${this.state.history.Debunkid}`
                            })
                        })
                })
        }
    }
    handleCloseComment(){
        if (this.state.inpuValue == '' || this.state.inpuValue == '说点什么吧...') {
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
                    onBlur={this.handleCloseComment.bind(this)} 
                    maxLength={35}
                    ></Input>
                    <Button className='commentButton' onClick={this.handleClose.bind(this)}>确定</Button>
                </View>
            </Dialog >
        )
    }
}