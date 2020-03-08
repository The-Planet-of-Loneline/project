import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './refresh.scss'

export default class Refresh extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  explainUpper(enable){
    let style = ''
    switch(enable){
      case '0' : style='u-disable1'
      break
      case '1' : style='u-disable2'
      break
      case '2' : style='box'
      break
    }
    return style
  }

  explainDowner(enable){
    let style = ''
    switch(enable){
      case '0' : style='d-disable1'
      break
      case '1' : style='d-disable2'
      break
      case '2' : style='box'
      break
    }
    return style
  }

  render () {
    const { enable } = this.props
    return (
      <View className='container'>
        <View className={this.explainUpper(enable)}></View>
        <View className={this.explainDowner(enable)}></View>
      </View>
    )
  }
}