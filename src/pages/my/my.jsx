import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import ListItem from './ListItem/ListItem'
import Footer from '../../component/Footer/Footer'
import UserImg from '../../component/UserImg/UserImg'
import Icon from './icon.png'
import Fetch from '../../service/fetch'
import './my.scss'

export default class My extends Component {

  state = {
    userName:'这里是昵称',
    user:{
      userimg:0,
      stuNumber:'2019213XXX',
      sex: '秀吉',
      college: '计算机学院',
      grade: '19'
    },
    draw:{
      big:false,
      show:false,
      small:'0'
    },
    list:{
      history:[1,2,3,4,5,6],
      apply:[1,2,3,4,5,6],
      respone:[1,2,3,4,5,6]
    }
  }

  // {
  //   "college": "string",
  //   "gender": "string",
  //   "grade": "string",
  //   "msg": "string",
  //   "nickname": "string",
  //   "portrait": 0,
  //   "sid": "string"
  // }

  componentWillMount () {
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

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow(){
    const userName = Taro.getStorageSync('Nickname')
    this.setState({ userName })
  }

  componentDidHide () { }

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
      this.setState({ draw:{ big, show:false, small } })
    } else {
      this.setState({ draw:{ big, show:true, small } })
    }
  }

  handleSmall (index) {
    this.setState({ draw:{ big:true, show:false, small:index } })
  }

  explainList () {
    const { draw, list } = this.state
    switch (draw.small){
      case '0' : {   
        return (list.history.map((index) => {
          return (
            <ListItem key={index+1} mode='1' />
          )
        }))
      }
      case '1' : {
        return (list.respone.map((index) => {
          return (
            <ListItem key={index+1} mode='3' />
          )
        }))
      }
      case '2' : {
        return (list.apply.map((index) => {
          return (
            <ListItem key={index+1} mode='2' />
          )
        }))
      }
    }
  }

  toEdit () {
    const { user } = this.state
    Taro.navigateTo({
      url:`../edit/edit?stuid=${user.stuNumber}&sex=${user.sex}&college=${user.college}&grade=${user.grade}`
    })
  }

  render () {
    const { userName } = this.state
    const { user } = this.state
    const { draw } = this.state
    return (
      <View>
        {draw.show?<View className='shadow'></View>:null}
        <View className='stick'>
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
            >消息通知<Text className='tri'>▼</Text></View>
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
        <View className='need-list'>
          <View className='blank-top'></View>
          {this.explainList()}
          <View className='blank-bottom'></View>
        </View>
        <Footer mode='my' />
      </View>
    )
  }
}