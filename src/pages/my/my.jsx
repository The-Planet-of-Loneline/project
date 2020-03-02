import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import ListItem from './ListItem/ListItem'
import Footer from '../../component/Footer/Footer'
import UserImg from '../../component/UserImg/UserImg'
import Icon from './icon.png'
import './my.scss'

export default class My extends Component {

  state = {
    user:{
      userName:'这里是昵称',
      stuNumber:'2019213XXX',
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

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

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
    Taro.navigateTo({
      url:`../edit/edit`
    })
  }

  render () {
    const { user } = this.state
    const { draw } = this.state
    return (
      <View>
        {draw.show?<View className='shadow'></View>:null}
        <View className='stick'>
          <View className='user-container'>
            <View className='color-part'>
              <View className='user-info'>
                <UserImg userimg='1' size='size-my' />
                <View className='user-info-two'>
                  <View className='user-name'>{user.userName}</View>
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