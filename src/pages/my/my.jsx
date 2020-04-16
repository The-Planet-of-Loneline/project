import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Footer from '../../component/Footer/Footer'
import UserImg from '../../component/UserImg/UserImg'
import Icon from './icon.png'
import ListItem from './ListItem/ListItem'
import Fetch from '../../service/fetch'
import './my.scss'

export default class My extends Component {

  state = {
    userName:'这里是昵称',
    user:{
      userimg:0,
      stuNumber:'500',
      sex: '你卡了哟(ฅω•ฅ)',
      college: '重进试试φ(>ω<*) ',
      grade: '尝试刷新(。-`ω´-)'
    },
    draw:{
      big:false,
      show:false,
      small:'0'
    },
    history:[],
    apply:[],
    respone:[],
    blank_msg:['快去发布需求吧！','看来没人鸟你呢~','没人关注你呢！'],
    // history_bottom apply_ bottom reply_bottom
    bottom:[false,false,false],
    page:[1,1,1],
    remindBox:false
  }

  componentWillMount () {
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    let bottom = [false,false,false]
    Taro.setStorage({
      key: 'delete_if',
      data: false
    })
    Fetch(
      'remind/day/remindbox/status/',
      {},
      'GET'
    ).then(data =>{
      if (data.msg === 'success') {
        this.setState({ remindBox: data.existence })
      } else {
        console.error('existence return bad')
      }
    })
    Fetch(
      'user/info/',
      {},
      'GET'
    ).then(data => {
      this.setState({
        userName: data.nickname,
        user: {
          userimg: data.portrait,
          stuNumber: data.sid,
          sex: data.gender,
          college: data.college,
          grade: data.grade
        }
      })
      Taro.setStorage({
        key: 'Nickname',
        data: data.nickname
      })
    })
    // 历史发布
    Fetch(
      'requirement/history/?limit=6&page=0',
      {},
      'GET'
    ).then(data => {
      if (data.msg==='success'){
        if (data.num) { this.setState({ history: data.history })}
        if (data.num!==6&&data.num) { bottom[0] = true }
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
        if (data.num) { this.setState({ apply: data.applications }) }
        if (data.num!==6&&data.num) { bottom[1] = true }
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
        if (data.num) { this.setState({ respone: data.content}) }
        if (data.num!==6&&data.num) { bottom[2] = true }
      } else if (data.msg==='Fail.') {
        Taro.showToast({
          title: '服务器错误',
          icon: 'none'
        })
      }
    })
    this.setState({ bottom })
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow(){
    const delete_if = Taro.getStorageSync('delete_if')
    let { bottom, page, user } = this.state
    if (user.stuNumber === '500' || user.stuNumber === 'undefined') {
      Fetch(
        'user/info/',
        {},
        'GET'
      ).then(data => {
        this.setState({
          userName: data.nickname,
          user: {
            userimg: data.portrait,
            stuNumber: data.sid,
            sex: data.gender,
            college: data.college,
            grade: data.grade
          }
        })
        Taro.setStorage({
          key: 'Nickname',
          data: data.nickname
        })
      })
    }
    Taro.getStorage({
      key: 'Nickname',
      success: (res) => {
        this.setState({ userName: res.data })
      }
    })
    if (delete_if) {
      bottom[0]=false
      bottom[1]=false
      page[0] = 1
      page[1] = 1
      Taro.setStorage({
        key:'delete_if',
        data: false
      })
      // 重新申请历史记录
      Fetch(
        'requirement/history/?limit=6&page=0',
        {},
        'GET'
      ).then(data => {
        if (data.msg==='success'){
          if (data.num) { 
            this.setState({ history: data.history })
          } else {
            this.setState({ history: [] })
          }
          if (data.num!==6&&data.num) { bottom[0] = true }
        } else if (data.msg==='Fail.') {
          Taro.showToast({
            title: '服务器错误',
            icon: 'none'
          })
        }
      })
      // 重新申请   申请提醒
      Fetch(
        'application/todo/?limit=6&page=0',
        {},
        'GET'
      ).then(data => {
        if (data.msg==='success'){
          if (data.num) {
            this.setState({ apply: data.applications })
          } else {
            this.setState({ apply: [] })
          }
          if (data.num!==6&&data.num) { bottom[1] = true }
        } else if (data.msg==='Fail.') {
          Taro.showToast({
            title: '服务器错误',
            icon: 'none'
          })
        }
      })
      this.setState({ page })
    }
  }

  componentDidHide () { }

  config = {
    onReachBottomDistance: 130,
    navigationBarTitleText: '孤独星球'
  }
  onReachBottom(){
    const { bottom, draw } = this.state

    switch (draw.small) {
      case '0' :if (!bottom[0]) {
        this.pullList('requirement/history/','0')
      }
        break
      case '1' :if (!bottom[1]) {
        this.pullList('application/todo/','1')
      }
        break
      case '2' :if (!bottom[2]) {
        this.pullList('remind/day/remindbox/','2')
      }
        break
    }
  }

  pullList (url,index) {
    const { history, apply, respone } = this.state
    let { page, bottom } = this.state
    Fetch(
      `${url}?limit=6&page=${page[index]}`,
      {},
      'GET'
    ).then(data => {
      if (data.msg==='success') {
        if (data.num===6) { 
          page[index]++
        } else {
          bottom[index]=true
          this.setState({ bottom })
        }
        if (data.num) {
          switch (index) {
            case '0':this.setState({ history: history.concat(data.history), page})
            break
            case '1':this.setState({ apply: apply.concat(data.applications), page })
            break
            case '2':this.setState({ respone: respone.concat(data.content), page })
            break
          }
        }
      } else if (data.msg==='Fail.') {
        Taro.showToast({
          title: '服务器错误',
          icon: 'none'
        })
      }
    })
  }

  explainList (mode) {
    const { history, respone, apply } = this.state
    switch (mode){
      case '0' : {
        return history 
      }
      case '1' : {
        return apply
      }
      case '2' : {
        return respone
      }
    }
  }

  decideLength (mode) {
    const { history, respone, apply } = this.state
    let length = 0
    switch (mode) {
      case '0' : length = history.length
      break
      case '1' : length = apply.length
      break
      case '2' : length = respone.length
      break
    }
    return length
  }

  handleLeft () {
    this.setState({
      draw:{
        big:false,
        show:false,
        small:'0'
      }
    })
  }

  handleRight () {
    const { draw } = this.state
    const small = draw.small
    let big = draw.big
    let show  = draw.show
    if (small==='0') {
      big=!big
    } else {
      big=true
    }
    if (show) {
      this.setState({ draw:{ big, show:false, small }, remindBox:false })
    } else {
      this.setState({ draw:{ big, show:true, small }, remindBox: false })
    }
  }

  handleSmall (index) {
    this.setState({ draw:{ big:true, show:false, small:index } })
  }

  toEdit () {
    const { user, userName } = this.state
    Taro.navigateTo({
      url:`../edit/edit?stuid=${user.stuNumber}&sex=${user.sex}&college=${user.college}&grade=${user.grade}&username=${userName}`
    })
  }

  handleTouchMove (e) {
    e.stopPropagation()
  }

  render () {
    const { userName, user, draw, blank_msg, bottom, remindBox } = this.state
    return (
      <View>
        {draw.show?<View className='shadow' onTouchMove={this.handleTouchMove}></View>:null}
        <View className='stick' onTouchMove={this.handleTouchMove}>
          <View className='user-container'>
            <View className='color-part'>
              <View className='user-info'>
                <UserImg userimg={user.userimg} size='size-my' />
                <View className='user-info-two'>
                  <View className='user-name'>{userName}</View>
                  <View className='stu-number'>学号：{user.stuNumber}</View>
                </View>
                <View className='edit'>
                  <Image src={Icon} className='icon' onClick={this.toEdit} />
                </View>
              </View>
            </View>  
          </View>
          <View className='whole'>
            <View
              className={draw.big?'left-part':'left-part chosen-part'}
              onClick={this.handleLeft}
            >发布历史</View>
            <View 
              className={draw.big?'right-part chosen-part':'right-part'}
              onClick={this.handleRight}
            >消息通知<Text className='tri'>▼</Text>
            {remindBox&&<View className='red_point' onClick={this.handleRedPoint}></View>}
            </View>
          </View>
          {draw.show
          ?<View className='notice'>
              <View className='part'>
                <View 
                  className={draw.small === '1'?'sm-tag chosen-part':'sm-tag'}
                  onClick={this.handleSmall.bind(this,'1')}
                >申请提醒</View>
              </View>
              <View className='part'>
                <View 
                  className={draw.small === '2'?'sm-tag chosen-part':'sm-tag'}
                  onClick={this.handleSmall.bind(this,'2')}
                >回复提醒</View>
              </View>
            </View>
          :null
            }
        </View>
        <View className='blank-top'></View>
          {this.decideLength(draw.small)
          ?this.explainList(draw.small).map((info, index) => {
            return (<ListItem key={index+1} mode={draw.small} info={info} />)
          })
          :<View className='blank'>{blank_msg[draw.small]}</View>
          }
          {bottom[draw.small]?<View className='reach-bottom'>----没见过底线啊----</View>:null}
        <View className='blank-bottom'></View>
        <Footer mode='my' />
      </View>
    )
  }
}