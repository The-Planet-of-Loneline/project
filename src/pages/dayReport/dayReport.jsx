import Taro, { Component } from '@tarojs/taro'
import { View, Button, Textarea } from '@tarojs/components'
import Fetch from '../../service/fetch'
import Toast from './Toast/Toast'
import Tag from './Tag/Tag'
import Footer from '../../component/Footer/Footer'
import './dayReport.scss'

export default class dayReport extends Component {

  state = {
    texts: {
      rule: ['色情低俗','暴力血腥','政治敏感','欺诈骗财'],
      power: ['人身攻击','侵犯隐私'],
      other: ['广告骚扰','侮辱谩骂','其他']
    },
    toast: false,
    msg: '',
    bad_msg: {
      rule: [0,0,0,0],
      power: [0,0],
      other: [0,0,0]
    }
  }

  componentDidMount(){
    const { requirement_id } = this.$router.params
    console.log(requirement_id)
  }

  changeShow = () => {
    this.setState({ toast: false })
  }

  changeData = (name, index, which) => {
    let { bad_msg } = this.state
    bad_msg[name].splice(index,1,which)
    this.setState({ bad_msg })
  }

  report () {
    const { requirement_id } = this.$router.params
    const { bad_msg, msg } = this.state
    let reason = this.transiformData(bad_msg)
    Fetch(
      `report/day/${requirement_id}/`,
      {
        reason,
        addition: msg
      },
      'PUT'
    ).then( data => {
      if (data.msg === 'success') {
        this.setState({ toast: true })
      } else {
        console.error('report failed')
        Taro.showToast({
          title: '举报失败,请重试!',
          icon: 'none'
        })
      }
    })
  }

  transiformData (data) {
    let str = ''
    for(let i = 0; i<=3; i++) {
      if (data.rule[i]) {
        str += `${i+1}`
      }
    }
    for(let i = 0; i<=1; i++) {
      if (data.power[i]) {
        str += `${i+5}`
      }
    }
    for(let i = 0; i<=2; i++) {
      if (data.other[i]) {
        str += `${i+7}`
      }
    }
    return str
  }

  enableSubmit () {
    const { msg, bad_msg } = this.state
    if (msg!==''||(this.transiformData(bad_msg) !==''&&this.transiformData(bad_msg) !=='9')) {
      console.log('1')
      return true
    }
      console.log('2')
      return false
  }

  handleSubmit = (e) => {
    console.log(e.target.value)
    this.setState({ msg: e.target.value})
  }

  render () {
    const { toast, texts, bad_msg, msg } = this.state
    return (
      <View>
        {toast&&<Toast onChangeShow={this.changeShow.bind(this)} />}
        <View className='report-header'>举报</View>
        <View className='report-view'>
          <View>
            <View className='small-header'>违法违规</View>
            <View className='tag-con'>
              {texts.rule.map((text,index) => {
                return (<Tag 
                  key={index+1} 
                  text={text} 
                  name='rule'
                  index={index} 
                  data={bad_msg.rule} 
                  onChangeData={this.changeData.bind(this)}
                />)
              })}
            </View>
          </View>
          <View>
            <View className='small-header'>侵犯他人权益</View>
            <View className='tag-con'>
              {texts.power.map((text,index) => {
                return (<Tag 
                  key={index+1}
                  text={text} 
                  name='power'
                  index={index}
                  data={bad_msg.power}
                  onChangeData={this.changeData.bind(this)}
                />)
              })}
            </View>
          </View>
          <View>
            <View className='small-header'>其他</View>
            <View className='tag-con'>
              {texts.other.map((text,index) => {
                return (<Tag 
                  key={index+1} 
                  text={text}
                  name='other' 
                  index={index} 
                  data={bad_msg.other} 
                  onChangeData={this.changeData.bind(this)}
                />)
              })}
            </View>
          </View>
          {!toast
          ?<Textarea 
            className='addtion'
            onInput={this.handleSubmit}
            maxlength='75'
            placeholder='详细说明你的问题...'
          ></Textarea>
          :<View className='addtion'>{msg}</View>
        }
        </View>
        <Button className='report-button' onClick={this.report} disabled={!this.enableSubmit()}>提交</Button>
        <Footer mode='need' />
      </View>
    )
  }
}