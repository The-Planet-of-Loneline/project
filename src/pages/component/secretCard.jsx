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
    }
    state = {
        showInput: false,
        comment:[{}],
        page: 1,
    }

    componentWillMount() {
        Fetch(`comment/history/:secret_id?secretId=${this.props.Debunkid}&&page=${this.state.page}`,
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
        navigationBarTitleText: '孤独星球'
    
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

    }
    ReachBottom() {
        let { page } = this.state
        if (this.state.comment.length % 3 == 0) {
            this.setState({
                page: page + 1
            }, () => {
                console.log(page)
                    Fetch(`comment/history/:secret_id?secretId=${this.props.Debunkid}&&page=${this.state.page}`,
                    {},
                    'GET').then(res => {
                        this.setState({
                            comment: this.state.comment.concat(res.history)
                        })
                    })
            })
        }
    }
    render() {
        let {color} = this.props
        const backgroundColor = {
            background: color
        }
        return (
            <View className='cardContainer'>
               <View className='card' style={backgroundColor}>
        <View className='text'>{this.props.textValue}</View>
                   <View className='allReplies'>全部回复</View>
                   <View className='commentButton'>
                       {this.props.showComment ? <Image src={commentimg} className='comment' onClick={this.onShowInput.bind(this)} /> : null}
                   </View>
                   <View className='replyContainer' onTouchMove={this.ReachBottom.bind(this)}>
                      {this.state.comment.map((comment)=>{
                          return <ReplyCard 
                          time={comment.CommentTime}
                          text={comment.Comment} 
                          num = {comment.CommentId} 
                          key = {comment.CommentId} /> 
                      })}
                   </View>
               </View>
                {this.state.showInput ? <Comment onCloseInput={this.onCloseInput.bind(this)} Debunkid={this.props.Debunkid} /> : null} 
            </View>

        )
    }
}

