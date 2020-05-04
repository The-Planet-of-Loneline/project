import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './draftmsg.scss'

export default class DraftMsg extends Component {
  static defaultProps = {}

  sureEvent = () => {
    this.props.onSureEvent()
  }

  cancleEvent = () => {
    this.props.onCancleEvent()
  }

  render () {
    const res = Taro.getSystemInfoSync()
    const Style = {
      height: `${res.windowHeight}`+'px',
      width: `${res.windowWidth}`+'px'
    }
    return (
      <View className='shadow' style={Style}>
        <View className='contain'>
          <View className='upper'>
            <View className='texts c'>您上次保存的内容,</View>
            <View className='texts'>是否要恢复</View>
          </View>
          <View className='option'>
            <View className='cancle' onClick={this.cancleEvent.bind(this)}>否</View>
            <View className='sure' onClick={this.sureEvent.bind(this)}>是</View>
          </View>
        </View>
      </View>
    )
  }
}