import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Info from '../../../component/Info/Info'
import InfoS from '../../../component/InfoS/InfoS'
import InfoT from '../../../component/InfoT/InfoT'
import Eye from './imgs/eye.png'
import UserImage from './imgs/UserImage.png'
import './listItem.scss'

export default class ListItem extends Component {
  constructor(props){
    super(props)
    
  }
  
  state = {
    type:1,
    accept:0,
    title:'这里是标题',
    time:'2019.2.13',
    usename:'这里是用户名',
    show:false,
    showD:'0'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toMyDetail () {
    Taro.navigateTo({
      url:`../myDetail/myDetail`
    })
  }

  toDetail () {
    Taro.navigateTo({
      url:`../cardDetails/cardDetails?indexId=3&able=disable`
    })
  }

  changeShow = () => {
    const { show } =this.state
    if (show) {
      this.setState({ show:false })
    } else {
      this.setState({ show:true })
    }
  }

  changeShowD = (index) => {
    this.setState({ showD:index })
  }

  eyeCli (e) {
    this.changeShow()
    e.stopPropagation();
  }

  eyeCliTwo (e) {
    this.changeShowD('1')
    e.stopPropagation();
  }

  modeTrans () {
    const { mode } = this.props
    const { type, title, time, usename, accept } = this.state
    const types = ['学习','运动','娱乐','其他']
    const accepts = ['拒绝了你的申请','接受了你的申请']
    switch (mode) {
      // history
      case '1' : {return (
        <View className='list-item' onClick={this.toMyDetail}>
          <View className='tag'>{types[type]}</View>
          <View className='title'>{title}</View>
          <View className='float-con'><View className='time'>{time}</View></View>
        </View>
      )}
      // response
      case '2' : {return(
        <View className='list-item' onClick={this.toDetail}>
          <View className='float-con'><View className='time'>{time}</View></View>
          <View className='msg-con'>
            <Text className='name'>{usename}</Text>
            <Text className='accept-reject'>{accepts[accept]}</Text>
          </View>
          <View className='tit-con'>
            <View className='title-two'>{title}</View>
            {accept?<Image src={Eye} className='eye' onClick={this.eyeCli} />:0}
          </View>
        </View>
      )}
      // aplly
      case '3' : {return(
        <View className='list-item' onClick={this.toDetail}>
          <View className='float-con'><View className='time'>{time}</View></View>
          <View className='user-info'>
            <Image src={UserImage} className='image-s' />
            <View className='user-name'>{usename}</View>
            <Image src={Eye} className='eye-two' onClick={this.eyeCliTwo} />
          </View>
          <View className='title'>{title}</View>
        </View>
      )}
    }
  }

  explainShow () {
    const { mode } = this.props
    const { show, showD } = this.state
    if (mode==='2'&&show) {
      return (<InfoS onChangeShow={this.changeShow} />)
    }
    if (mode==='3') {
      switch (showD) {
        case '0' : {return null}
        case '1' : {return (<InfoT onChangeShowD={this.changeShowD} />)}
        case '2' : {return (
        <Info
          onChangeShowCli={this.changeShowD.bind(this,'1')} 
          onChangeShowSub={this.changeShowD.bind(this,'0')}
          from='puter'
        />)}
      }
    }
  }

  render () {
    return (
      <View>
        {this.modeTrans()}
        {this.explainShow()}
      </View>
    )
  }
}