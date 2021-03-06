import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Input } from '@tarojs/components'
import Dialog from './Dialog'
import './comment.scss'
import Fetch from '../../service/fetch'


export default class Comment extends Component {
    static defaultProps = {
        Debunkid: 0,
        ReceiverId: '',
    }
    state = {
        inpuValue: '说点什么吧...',
        onIn: false 
    } 
    
    handleInputChange(e) {
        this.setState({
            inpuValue: e.target.value,
        })
    }
    handleInput(){
        this.setState({
            inpuValue:'',
            onIn: true
        })
    }
    handleClose(){
        console.log(this.props.ReceiverId)
        if (this.state.inpuValue != '' && this.state.inpuValue != '说点什么吧...'){
        this.props.onCloseInput()
            Fetch(`comment/create/?secretId=${this.props.Debunkid}&&receiver_sid=${this.props.ReceiverId}`,
            {
                comment:this.state.inpuValue,
            },
            'POST').then(res => { 
                Fetch(`secret/view/:secret_id?secretId=${this.props.Debunkid}`,
                    {}, 'GET').then(data => {
                            Taro.redirectTo({
                                url: `/pages/commentNight/comment?text=${data.secret.Content}&&color=${data.secret.Colour}&&Debunkid=${data.secret.Debunkid}&&sid=${this.props.ReceiverId}`
                            })
                        
                    })   
            }) 
        }
    }
    handleCloseComment(){
        if (this.state.inpuValue == '' || this.state.inpuValue == '说点什么吧...') {
       this.props.onCloseInput()
       this.setState({
           onIn:false
       })
        }
    }

    render() {
        const {onIn} = this.state
        const style = {
            position: 'absolute',
            bottom: '280px'
        }
        return (
            <Dialog>
                <View className='inputContainer'>
                    <Input value={this.state.inpuValue} 
                    className='comment' 
                    onFocus={this.handleInput.bind(this)} 
                    onInput={this.handleInputChange.bind(this)}
                    onBlur={this.handleCloseComment.bind(this)} 
                    maxLength={35}
                    style={onIn ? style : null}
                    adjustPosition = {false}
                    ></Input>
                    <Button className='commentButton' onClick={this.handleClose.bind(this)} style={onIn ? style :null}>确定</Button>
                </View>
            </Dialog >
        )
    }
}