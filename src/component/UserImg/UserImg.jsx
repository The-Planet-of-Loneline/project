import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './userimg.scss'

export default class UserImg extends Component {

  static defaultProps = {
    userimg:'0',
    size:'size-my'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const num = this.props.userimg 
    const size = this.props.size
    return (
      <View>
        <Image
          src={require(`../../assets/user_img/img${num}.png`)} 
          className={size}
        />
      </View>
    )
  }
}