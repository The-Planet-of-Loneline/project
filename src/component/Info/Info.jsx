import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Input, Textarea } from '@tarojs/components'
import './info.scss'
import Close from '../../assets/png/close.png'
import Fetch from '../../service/fetch'

export default class Info extends Component {

  static defaultProps = {
    from:'puter',
    passed_id:0
  }

  state = {
    checked:[0,0],
    qq: '',
    tel: '',
    msg: ''
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  changeShowCli () {
    this.props.onChangeShowCli()
  }

  getInfo = (kind, event) => {
    let details = this.state
    const info = event.target.value
    details[kind]=info
    this.setState(details)
  }

  proinfo(){
    const { checked, qq, tel, msg } = this.state
    let info = {
      contact_way: [checked[0]?qq:'无',checked[1]?tel:'无'],
      content: msg
    }
    return info
  }

  handleSubmit () {
    // submit content
    const passed_id = this.props.passed_id
    const from = this.props.from
    const info = this.proinfo()
    if (from==='puter') {
      Fetch(
        `application/solve/${passed_id}/?status=2`,
        info,
        'PUT'
      ).then(data => {
        if (data.msg==='success') {
          Taro.showToast({
            title:'已接受'
          })
        } else if (data.msg==='需求已经被删除了!') {
          Taro.showToast({
            title:'您已删除'
          })
        } else if (data.msg==='已经处理过了!') {
          Taro.showToast({
            title:'已处理'
          })
        } else if (data.msg==='Fail.')
          Taro.showToast({
            title:'服务器错误'
          })
      })
    } else if (from==='applicant') {
      Fetch(
        `requirement/application/${passed_id}/`,
        info,
        'POST'
      ).then(data => {
        if (data.msg==='success') {
          Taro.showToast({
            title:'已接受'
          })
        } else if (data.msg==='不能申请自己的需求') {
          Taro.showToast({
            title:'我与我'
          })
        } else if (data.msg==='已经处理过了!') {
          Taro.showToast({
            title:'已处理'
          })
        } else if (data.msg==='Fail.')
          Taro.showToast({
            title:'服务器错误'
          })
      })
    }
    this.props.onChangeShowSub()
  }

  enableSubmit () {
    const { qq, tel, msg, checked } =this.state
    let flag_qq = false
    let flag_tel = false
    if (checked[0]) {
      if(qq!==''&&!/\D/.test(qq)) {
        flag_qq = true
      } else {
        return false
      }
    }
    if (checked[1]) {
      if(tel!==''&&!/\D/.test(tel)) {
        flag_tel = true
      } else {
        return false
      }
    }
    if (flag_qq||flag_tel||msg!=='') {
      return true
    }
      return false
  }

  changeCheck (index) {
    let { checked } = this.state
    if (checked[index]) {
      checked[index]=0
    } else {
      checked[index]=1
    }
    this.setState({ checked })
  }

  handleInputChange(e) {
    this.setState({
        msg: e.target.value,
    })
  }

  errorDate () {
    Taro.showToast({
      title:'信息输入有误',
      icon:'none'
    })
  }

  render () {
    const { checked, qq, tel, msg } =this.state
    return (
      <View className='push-container'>
        <View className='push'>
          <View className='header'>
            <Text className='words'>编辑联系方式</Text>
            <Image src={Close} className='close' onClick={this.changeShowCli.bind(this)} />
          </View>
          <View>
            <View className='info-container'>
              <View className='outter-circle' onClick={this.changeCheck.bind(this,0)}>
                {checked[0]===0?null:<View className='inner-circle' />}
              </View>
              <Text className='numb'>QQ:</Text>
              {checked[0]===0
              ?<View className='unfoucs'>未选定</View>
              :<Input
                className='info'
                maxLength='11'
                value={qq}
                onChange={this.getInfo.bind(this, 'qq')} 
              />}
            </View>
            <View className='info-container'>
              <View className='outter-circle' onClick={this.changeCheck.bind(this,1)}>
                {checked[1]?<View className='inner-circle' />:null}
              </View>
              <Text className='numb'>Tel：</Text>
              {checked[1]
              ?<Input
                className='info'
                maxLength='11'
                value={tel}
                onChange={this.getInfo.bind(this, 'tel')}
              />
              :<View className='unfoucs'>未选定</View>}
            </View>
          </View>
          <View>
            <Textarea
              className='sentence'
              placeholder='你写下的内容会发送给对方......'
              maxlength='100' 
              value={msg}
              onInput={this.handleInputChange.bind(this)}
            />
          </View>
          <View>
            <Button 
              className={this.enableSubmit()?'sub-button able':'sub-button disable'} 
              onClick={this.enableSubmit()?this.handleSubmit:this.errorDate}
            >
              提交
            </Button>
          </View>
        </View>
      </View>
    )
  }
}