import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Info from '../../../component/Info/Info'
import InfoT from '../../../component/InfoT/InfoT'
import Eye from './imgs/eye.png'
import Accept from './imgs/accept.png'
import Refuse from './imgs/refuse.png'
import UserImg from '../../../component/UserImg/UserImg'
import Fetch from '../../../service/fetch'
import './listItem.scss'

export default class ListItem extends Component {
  
  state = {
    // checked 0/1 accept/2 refuse
    checked:0,
    showD:'0',
  }

  componentWillMount () {}

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toMyDetail () {
    const requirement_id = this.props.info.requirement_id
    Taro.navigateTo({
      url:`../myDetail/myDetail?req_id=${requirement_id}`
    })
  }

  toDetail () {
    const { requirement_id } = this.props.info
    this.redPointChange()
    Taro.navigateTo({
      url:`../cardDetails/cardDetails?indexId=3&able=disable&req_id=${requirement_id}`
    })
  }

  changeShowD = (index) => {
    this.setState({ showD:index })
  }

  redPointChange () {
    const { red_point, application_id } = this.props.info
    const { mode } = this.props
    const { checked } = this.state
    if (mode==='2'&&red_point&&!checked) {
      Fetch(
        `remind/day/remindbox/done/${application_id}/`,
        {},
        'POST'
      ).then( data =>{
        if (data.msg==='success') {
          this.setState({ checked: 1 })
        } else {
          console.error('bad request')
        }
      })
    }
  }

  eyeCli (e) {
    this.changeShowD('1')
    this.redPointChange()
    e.stopPropagation()
  }

  changeCheck = (check) => {
    this.setState({ checked: check })
  }

  handleRedPoint(e){
    const { info } = this.props
    if (info.status-2) {
      this.redPointChange()
    }
    e.stopPropagation()
  }

  render () {
     const { mode, info } = this.props
     const { checked, showD } = this.state
     const accepts = ['接受了你的申请','拒绝了你的申请']

    return (
      <View>
        {/* history */}
        {mode==='0'
        ?<View className='list-item' onClick={this.toMyDetail}>
          <View className='tag'>{info.tag?info.tag:'其他'}</View>
          <View className='title'>{info.title}</View>
          <View className='float-con'><View className='time'>{info.post_time}</View></View>
        </View>
        :null}
        {/* apply */}
        {mode==='1'
        ?<View className='list-item' onClick={this.toDetail}>
          <View className='float-con'><View className='time'>{info.send_time}</View></View>
          <View className='user-info'>
            <UserImg  size='size-apply' userimg={info.portrait} />
            <View className='user-name'>{info.sender_nickname}</View>
            <Image src={Eye} className='eye-two' onClick={this.eyeCli} />
          </View>
          <View className='check'>
            <View className='title-thr'>{info.title}</View>
            {!info.red_point
            ?<Image src={Accept} className='accept' />
            :null}
            {info.red_point&&checked
            ?<Image src={checked-1?Refuse:Accept} className={checked-1?'refuse':'accept'} />
            :null}
          </View>
        </View>
        :null}
        {/* response */}
        {mode==='2'&&info.status!==5
        ?<View className='list-item' onClick={this.toDetail}>
          {info.red_point&&!checked?<View className='red_point' onClick={this.handleRedPoint}></View>:null}
          <View className='float-con'><View className='time'>{info.confirm_time}</View></View>
          <View className='msg-con'>
            <Text className='name'>{info.nick_name}</Text>
            <Text className='accept-reject'>{accepts[info.status-2]}</Text>
          </View>
          <View className='tit-con'>
            <View className='title-two'>{info.title}</View>
            {info.status===2?<Image src={Eye} className='eye' onClick={this.eyeCli} />:null}
          </View>
        </View>
        :null}
        {/* report */}
        {mode==='2'&&info.status===5&&<View className='list-item' onClick={this.handleRedPoint}>
          {info.red_point&&!checked?<View className='red_point' onClick={this.handleRedPoint}></View>:null}
          <View className='float-con'><View className='time'>{info.confirm_time}</View></View>
          <View className='report-content'>{info.content}</View>
        </View>
        }
        {/* 回复提醒 */}
        {(mode==='2'&&showD==='1')
        ?<InfoT
          onChangeShowD={this.changeShowD.bind(this)}
          able={false}
          name={info.nick_name}
          college={info.college}
          sex={info.gender}
          qq={info.contact_way[0]}
          grade={info.grade}
          tel={info.contact_way[1]}
          msg={info.content}
        />
        :null}
        {/* 申请提醒切换 */}
        {(mode==='1'&&showD==='1')
        ?<InfoT
          onChangeShowD={this.changeShowD.bind(this)}
          onChangeCheck={this.changeCheck.bind(this)}
          req_id={info.application_id}
          able={info.red_point&&!checked}
          name={info.sender_nickname}
          college={info.college}
          sex={info.gender}
          qq={info.contact_way[0]}
          grade={info.grade}
          tel={info.contact_way[1]}
          msg={info.content}
        />
        :null}
        {(mode==='1'&&showD==='2')
        ?<Info
          onChangeShowCli={this.changeShowD.bind(this,'1')} 
          onChangeShowSub={this.changeShowD.bind(this,'0')}
          onChangeCheck={this.changeCheck}
          passed_id={info.application_id}
          from='puter'
        />
        :null}
      </View>
    )
  }
}