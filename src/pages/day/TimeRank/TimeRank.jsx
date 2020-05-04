import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './timerank.scss'
import Arrow from './imgs/arrow2.png'

export default class EnterYourName extends Component {

  static defaultProps = {}

  state = {
    light: 3,
    pos: 0
  }

  changeLight = (light) => {
    this.setState({ light:light, pos: 0 })
    this.props.onPassLight(light)
  }
  
  moveBack = () => {
    this.setState({ pos: 0})
  }

  moveRight = (e) => {
    this.setState({ pos:1 })
    e.stopPropagation()
  }

  handleStop (e) {
    e.stopPropagation()
  }

  render () {
    const { light, pos } = this.state
    const res = Taro.getSystemInfoSync()
    const Style = {
      height: `${res.windowHeight}`+'px',
      width: `${res.windowWidth}`+'px'
    }
    const styleA = {
      animation: 'spanA 0.5s'
    }
    const styleB = {
      animation: 'spanB 0.5s'
    }
    return (
      <View className={pos?'mask can':'mask cannot'} style={Style} onClick={this.moveBack}>
        <Image className='arrow' style={pos?styleA:styleB} src={Arrow} onClick={this.moveRight} />
        <View className={pos?'op-contain show':'op-contain hide'} onClick={this.handleStop.bind(this)}>
          <View className={light===1?'options a':'options b'} onClick={this.changeLight.bind(this,1)}>一周内</View>
          <View className={light===2?'options a':'options b'} onClick={this.changeLight.bind(this,2)}>一个月内</View>
          <View className={light===3?'options a':'options b'} onClick={this.changeLight.bind(this,3)}>一个月以上</View>
        </View>
      </View>
    )
  }
}