import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea, Input, Button, Image } from '@tarojs/components'
import './share.scss'
import Footer from '../../component/Footer/Footer'
import Sidebar from '../../component/Sidebar/Sidebar'
import Back from './back.png'

export default class Share extends Component {

  static defaultProps = {
    
  }

  state = {
    show:false,
    title:'',
    content:'',
    tagChosen:false
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  backToDay () {
    Taro.redirectTo({
      url: '../day/day'
    })
  }

  changeShow = () => {
    const { show } =this.state
    if (show) {
      this.setState({ show:false })
    } else {
      this.setState({ show:true })
    }
  }

  getInfo = (name,event) => {
    this.setState({ [name]:event.target.value })
  }

  onChosen = () => {
    this.setState({ tagChosen:true })
  }

  enableShare () {
    const { title, content, tagChosen } = this.state
    if (title!== ''
    &&content!== ''
    &&tagChosen
    ) { return true }
    return false
  }

  render () {
    const { show, title, content } = this.state
    return (
      <View>
        <View className='header'>
          <Image src={Back} className='back' onClick={this.backToDay} />
          <Button 
            className={this.enableShare()?'share-button able':'share-button disable'} 
            onClick={this.enableShare()?null:this.getInfo.bind(this,'content')}
          >
            发表
          </Button>
          发布需求
        </View>
        <View>
          <View className='title-container'>
            <Input
              placeholder='输入标题（0~10字)'
              className='title'
              maxlength='10'
              value={title}
              onChange={this.getInfo.bind(this,'title')}
            />
          </View>
          <View className='body-container'>
            <Textarea
              placeholder='请在此处输入内容......'
              className='content'
              maxlength='100'
              hidden={show}
              value={content}
              onChange={this.getInfo.bind(this,'content')}
            />
          </View>
        </View> 
        <View className='add-container'>
          <View className='add-tag' onClick={this.changeShow}>
            <Text className='plus'>+</Text>
            <Text className='tag-words'>添加标签</Text>
          </View>
        </View>
        {show?<Sidebar onChangeShow={this.changeShow} onChosen={this.onChosen} passed='true' />:null}
        <Footer mode='need' />
      </View>
    )
  }
}