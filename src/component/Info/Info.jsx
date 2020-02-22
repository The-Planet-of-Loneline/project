import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, Input, Textarea } from '@tarojs/components'
import './info.scss'
import Close from './imgs/close.png'

export default class Info extends Component {

  static defaultProps = {

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

  handleSubmit () {
    // submit content
    this.props.onChangeShowSub()
  }

  enableSubmit () {
    const { msg } =this.state
    if (msg!=='') {
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