import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Input, Textarea } from '@tarojs/components'
import './info.scss'
import Close from './imgs/close.png'

export default class Info extends Component {

  static defaultProps = {

  }

  state = {
    checked:false,
    qq: '',
    tel: '',
    msg: ''
  }

  componentWillMount () { }

  componentDidMount () { console.log(this.props.passed) }

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

  handleSubmit () {
    this.props.onChangeShowSub()
    console.log(this.state)
  }

  enableSubmit () {
    const { checked, qq, tel } = this.state
    if (checked) {
      if (tel !== '') { return true }
    } else {
      if (qq !== '') {return true}
    }
    return false
  }

  changeCheck (index) {
    if (index) {
      this.setState({ checked:true, qq:'' })
    } else {
      this.setState({ checked:false, tel:'' })
    }
  }

  errorDate () {
    console.log('your date is incorrect')
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
              <View className='outter-circle' onClick={this.changeCheck.bind(this,false)}>
                {checked?null:<View className='inner-circle' />}
              </View>
              <Text className='numb'>QQ:</Text>
              {checked
              ?<View className='unfoucs'>未选定</View>
              :<Input
                className='info'
                maxLength='11'
                value={qq}
                onChange={this.getInfo.bind(this, 'qq')} 
              />}
            </View>
            <View className='info-container'>
              <View className='outter-circle' onClick={this.changeCheck.bind(this,true)}>
                {checked?<View className='inner-circle' />:null}
              </View>
              <Text className='numb'>Tel：</Text>
              {checked
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
              maxlength='150' 
              value={msg}
              // onClick={this.getInfo.bind(this, 'msg')}
              // onChange={this.getInfo.bind(this, 'msg')}
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