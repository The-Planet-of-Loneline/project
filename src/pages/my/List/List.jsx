import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ListItem from '../ListItem/ListItem'
import Fetch from '../../../service/fetch'
import './list.scss'

export default class List extends Component {

  static defaultProps = {
    mode:'0'
  }

  state ={
    history:[],
    apply:[],
    respone:[],
    history_bottom:false,
    apply_bottom:false,
    reply_bottom:false,
    page:[1,1,1]
  }
  // his[
  //   {
  //     "requirement_id": 11387,
  //     "title": "swagger",
  //     "post_time": "03-03 15:50",
  //     "tag": "自习"
  //   }
  // ]
  //rep[
  //   {
  //     "college": "string",
  //     "confirm_time": "string",
  //     "contact_way": [
  //       "string"
  //     ],
  //     "content": "string",
  //     "gender": "string",
  //     "grade": "string",
  //     "nick_name": "string",
  //     "red_point": true,
  //     "requirement_id": 0,
  //     "status.
  //     "title": "string"
  //   }
  // ]
  // import
  // apl[
  //   {
  //     "application_id": 0,
  //     "college": "string",
  //     "contact_way": [
  //       "string"
  //     ],
  //     "content": "string",
  //     "gender": "string",
  //     "grade": "string",
  //     "red_point": true,
  //     "requirements_id": 0,
  //     "send_time": "string",
  //     "sender_nickname": "string",
  //     "title": "string"
  //   }
  // ]

  componentWillMount () { 
    // 历史发布
    Fetch(
      'requirement/history/?limit=6&page=0',
      {},
      'GET'
    ).then(data => {
      if (data.msg==='success'){
        this.setState({ history: data.history })
        if (data.num<6&&data.num!==0) { this.setState({ history_bottom: true }) }
      } else if (data.msg==='Fail.') {
        Taro.showToast({
          title: '服务器错误',
          icon: 'none'
        })
      }
    })
    // 申请提醒
    Fetch(
      'application/todo/?limit=6&page=0',
      {},
      'GET'
    ).then(data => {
      if (data.msg==='success'){
        this.setState({ apply: data.applications })
        if (data.num<6&&data.num!==0) { this.setState({ apply_bottom: true }) }
      } else if (data.msg==='Fail.') {
        Taro.showToast({
          title: '服务器错误',
          icon: 'none'
        })
      }
    })
    // 回复提醒
    Fetch(
      'remind/day/remindbox/?limit=6&page=0',
      {},
      'GET'
    ).then(data => {
      if (data.msg==='success'){
        this.setState({ respone: data.content})
        if (data.num<6&&data.num!==0) { this.setState({ reply_bottom: true }) }
      } else if (data.msg==='Fail.') {
        Taro.showToast({
          title: '服务器错误',
          icon: 'none'
        })
      }
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  config = {
    onReachBottomDistance: 130
  }

  componentDidShow () { }

  componentDidHide () { }

  onReachBottom(){
    const { history_bottom, apply_bottom, reply_bottom } = this.state
    const mode = this.props.mode
    switch (mode) {
      case '0' :if (!history_bottom) {
        this.pullList('requirement/history/',mode)
      }
        break
      case '1' :if (reply_bottom) {
        this.pullList('remind/day/remindbox/'.mode)
      }
        break
      case '2' :if (apply_bottom) {
        this.pullList('application/todo/',mode)
      }
        break
    }
  }

  pullList (url,index) {
    const { history, apply, respone } = this.state
    let { page } = this.state
    Fetch(
      `${url}?limit=6&page=${page[index]}`,
      {},
      'GET'
    ).then(data => {
      if (data.msg==='success') {
        switch (index) {
          case '0':this.setState({ history: history.concat(data.history)})
          break
          case '1':this.setState({ respone: respone.concat(data.content)})
          break
          case '2':this.setState({ apply: apply.concat(data.applications)})
          break
        }
      } else if (data.msg==='Fail.') {
        Taro.showToast({
          title: '服务器错误',
          icon: 'none'
        })
      }
    })
  }

  explainList () {
    const { history, respone, apply } = this.state
    const mode = this.props.mode
    switch (mode){
      case '0' : { 
        if (history.length){  
          return (history.map((con,index) => {
            return (
              <ListItem key={index+1} mode='1' />
            )
          }))
        } else {
          return(
            <View className='blank'>快去发布需求吧！</View>
          )
        }
      }
      case '1' : {
        if (respone.length) {
          return (respone.map((index) => {
            return (
              <ListItem key={index+1} mode='3' />
            )
          }))
        } else {
          return(
            <View className='blank'>看来没人鸟你呢！</View>
          )
        }
      }
      case '2' : {
        if (apply.length) {
          return (apply.map((index) => {
            return (
              <ListItem key={index+1} mode='2' />
            )
          }))
        } else {
          return(
            <View className='blank'>没人关注你呢！</View>
          )
        }
      }
    }
  }


  explainBottom () {
    const { history_bottom, apply_bottom, reply_bottom } = this.state
    const mode = this.props.mode
    let which = false
    switch (mode) {
      case '0' : which = history_bottom
                break
      case '1' : which = reply_bottom
                break
      case '2' : which = apply_bottom
                break
    }
    if (which) {
      return (
        <View className='reach-bottom'>----没见过底线啊----</View>
      )
    }
  }

  render () {
    return (
      <View className='container'>
        {this.explainList()}
        {this.explainBottom()}
        <View className='blank-bottom'></View>
      </View>
    )
  }
}