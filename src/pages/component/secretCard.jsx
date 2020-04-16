import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import ReplyCard from '../component/replyCard'
import '../commentNight/secretCard.scss'
import commentimg from '../img/comment.png'
import Comment from './comment'
import Fetch from '../../service/fetch'

export default class SecretCard extends Component {
    static defaultProps = {
        textValue: '你好呀',
        num: '0',
        time:'',
        color:'',
        showComment: true,
        Debunkid: 0,
        Sid:''
    }
    state = {
        showInput: false,
        comment:[],
        page: 1,
    }

    componentWillMount() {
        Fetch(`comment/history/:secret_id/?secretId=${this.props.Debunkid}&&page=${this.state.page}`,
        {},
        'GET').then(res => {
            this.setState({
                comment:res.history
            })
        })
     }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    config = {
        navigationBarTitleText: '孤独星球',    
    }
    onShowInput(){
        this.setState({
            showInput: true,
        })
    }
    onCloseInput(){
        this.setState({
            showInput:false,
        })
    }
    onPullDownRefresh() {
        Fetch(`comment/history/:secret_id/?secretId=${this.props.Debunkid}&&page=${1}`,
            {},
            'GET').then(res => {
                this.setState({
                    comment: res.history
                })
            })
    }
    ReachBottom() {
        let { page,comment } = this.state
        if (!comment.length % 5) {
            this.setState({
                page: page + 1
            }, () => {
                    Fetch(`comment/history/:secret_id/?secretId=${this.props.Debunkid}&&page=${this.state.page}`,
                    {},
                    'GET').then(res => {
                        if(res){
                        this.setState({
                            comment: this.state.comment.concat(res.history)
                        })}
                    })
            })
        }
    }
    render() {
        let {color} = this.props
        const backgroundColor = {
            background: color
        }
        const {comment} = this.state
        const ReceiverSid = this.props.Sid
        return (
            <View className='cardContainer'>
               <View className='card' style={backgroundColor}>
        <View className='text'><Text>{this.props.textValue}</Text></View>
                   <View className='allReplies'>全部回复</View>
                   <View className='commentButton'>
                       {this.props.showComment ? <Image src={commentimg} className='comment' onClick={this.onShowInput.bind(this)} /> : null}
                   </View>
                    <View className='replyContainer' onTouchEnd={this.ReachBottom.bind(this)}>
                      {comment.length ?
                      comment.map((co)=>{
                          return <ReplyCard 
                          time={co.CommentTime}
                          text={co.Comment} 
                          num = {co.Num} 
                          key = {co.CommentId} /> 
                      }): null}
                      <View className='none' >--没有更多啦！--</View> 
                   </View>
               </View>
                {this.state.showInput ? <Comment onCloseInput={this.onCloseInput.bind(this)} Debunkid={this.props.Debunkid} ReceiverId={ReceiverSid} /> : null} 
            </View>

        )
    }
}

