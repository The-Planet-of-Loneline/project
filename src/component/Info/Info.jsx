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
    msg: '',
    placeHolder:['请输入QQ','请输入手机号']
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
    let { qq, tel } = this.state
    const info = event.target.value
    if (!/\D/.test(info)||info==='') {
      if (kind==='qq') {
        this.setState({ qq: info })
      } else {
        this.setState({ tel: info })
      }
    } else {
      if (kind==='qq') {
        return qq
      }
      return tel
    }
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
        `application/${passed_id}/?status=2`,
        info,
        'PUT'
      ).then(data => {
        if (data.msg==='success') {
          Taro.showToast({
            title:'已接受'
          })
          // 更新 red point
          Fetch(
            `application/done/${passed_id}/`,
            {},
            'POST'
          )
          this.props.onChangeCheck(1)
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
            title:'发送成功'
          })
        } else if (data.msg==='不能申请自己的需求') {
          Taro.showToast({
            title:'我与我'
          })
        } else if (data.msg==='已经申请过了!') {
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

  handleTouchMove (e) {
    e.stopPropagation()
  }

  changeHolder (touch,which) {
    let { placeHolder } = this.state
    if (touch) {
      if (which) {
        placeHolder[1]=' '
      } else {
        placeHolder[1]='请输入手机号'
      }
    } else {
      if (which) {
        placeHolder[0]=' '
      } else {
        placeHolder[0]='请输入QQ'
      }
    }
    this.setState({ placeHolder })
  }

  render () {
    const { checked, qq, tel, msg, placeHolder } =this.state
    return (
      <View className='push-container' onTouchMove={this.handleTouchMove}>
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
                placeholder={placeHolder[0]}
                placeholderClass='place-info'
                maxLength='11'
                value={qq}
                onInput={this.getInfo.bind(this, 'qq')}
                onFocus={this.changeHolder.bind(this,false,true)}
                onBlur={this.changeHolder.bind(this,false,false)}
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
                placeholder={placeHolder[1]}
                placeholderClass='place-info'
                maxLength='11'
                value={tel}
                onInput={this.getInfo.bind(this, 'tel')}
                onFocus={this.changeHolder.bind(this,true,true)}
                onBlur={this.changeHolder.bind(this,true,false)}
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