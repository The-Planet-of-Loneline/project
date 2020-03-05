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
    const requirements_id = this.props.info.requirements_id
    Taro.navigateTo({
      url:`../myDetail/myDetail?req_id=${requirements_id}`
    })
  }

  toDetail () {
    const requirements_id = this.props.info.requirements_id
    Taro.navigateTo({
      url:`../cardDetails/cardDetails?indexId=${requirements_id}&able=disable`
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
    const { mode, info } = this.props
    const { title, time, usename } = this.state
    const accepts = ['接受了你的申请','拒绝了你的申请']
    switch (mode) {
      // history
      case '1' : {return (
        <View className='list-item' onClick={this.toMyDetail}>
          <View className='tag'>{info.tag}</View>
          <View className='title'>{info.title}</View>
          <View className='float-con'><View className='time'>{info.post_time}</View></View>
        </View>
      )}
      // response
      case '2' : {return(
        <View className='list-item' onClick={this.toDetail}>
          <View className='float-con'><View className='time'>{info.confirm_time}</View></View>
          <View className='msg-con'>
            <Text className='name'>{info.nick_name}</Text>
            <Text className='accept-reject'>{accepts[info.status-2]}</Text>
          </View>
          <View className='tit-con'>
            <View className='title-two'>{info.title}</View>
            {info.status-2?<Image src={Eye} className='eye' onClick={this.eyeCli} />:0}
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

// S name:'这里是昵称',
// college:'XXX学院',
// sex:'男',
// qq:'吴',
// grade:'19级',
// tel:'12345678910',
// msg: '需求(demand) 

  explainShow () {
    const { mode, info } = this.props
    const { show, showD } = this.state
    if (mode==='2'&&show) {
      const pass = {
        name: info.nick_name,
        college: info.college,
        sex: info.gender,
        qq: info.contact_way[0],
        grade: info.grade,
        tel: info.contact_way[1],
        msg: info.content
      }
      return (<InfoS onChangeShow={this.changeShow} pass={pass} />)
    }
    if (mode==='3') {
      switch (showD) {
        case '0' : {return null}
        case '1' : {
          const pass = {
            name: info.sender_nickname,
            college: info.college,
            sex: info.gender,
            qq: info.contact_way[0],
            grade: info.grade,
            tel: info.contact_way[1],
            msg: info.content
          }
          return (<InfoT onChangeShowD={this.changeShowD} pass={pass} />)}
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