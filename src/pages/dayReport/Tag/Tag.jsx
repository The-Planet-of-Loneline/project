import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './Tag.scss'

export default class Tag extends Component {

  static defaultProps = {
    data: [1],
    index: 0,
    name: '',
    text: ''
  }

  changeCheck () {
    const { data, name, index } = this.props
    this.props.onChangeData(name, index, !data[index])
  } 

  enable = () => {
    const { data, index } = this.props
    return data[index]
  }

  render () {
    const { text, data, index } = this.props
    return (
      <View className='whole'>
        <View className='outter-circle' onClick={this.changeCheck.bind(this,0)}>
          {this.enable()&&<View className='inner-circle' />}
        </View>
        <View className={data[index]?'text t-able':'text t-disable'}>{text}</View>
      </View>
    )
  }
}