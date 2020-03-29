import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea, Input, Button } from '@tarojs/components'
import './share.scss'
import Footer from '../../component/Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Fetch from '../../service/fetch'

export default class Share extends Component {

  static defaultProps = {
    
  }

  state = {
    show:false,
    title:'',
    content:'',
    tagChosen:false,
    loading: false,
    chosen:{
      time:[0,0,0,0,0,0,0],
      during:['',''],
      type:0,
      choices:[0,0]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  deal () {
    const { title, content, chosen } = this.state
    // during 处理
    let time_from=chosen.during[0]
    let time_end=chosen.during[1]
    if (time_from===''){ time_from='1' }
    if (time_end===''){ time_end='24' }
    // 星期处理
    let date = ''
    for (let i=6; i>=0; i--) {
      if (chosen.time[i]){
        date=date+'1'
      } else {
        date=date+'0'
      }
    }
    date='1'+date

    let info = {
      content: content,
      date: parseInt(date),
      place: chosen.choices[1],
      post_time:'',
      requirement_id:0,
      tag: chosen.choices[0],
      time_from: parseInt(time_from),
      time_end: parseInt(time_end),
      title: title,
      type: chosen.type
    }
    console.log('share',info)
    return info
  }

  share () {
    const { loading } = this.state
    if (this.enableShare()&&!loading) {
      this.setState({ loading: true})
      const info=this.deal()
      Fetch(
        'requirement/new/',
        info,
        'PUT'
      ).then(data => {
        if (data.msg==='success') {
          Taro.showToast({
            title: '发布成功'
          })
          Taro.navigateBack({
            delta: 1
          })
          this.setState({ loading: false})
        } else if (data.msg==='requirement already exist') {
          Taro.showToast({
            title: '需求已存在'
          })
          Taro.navigateBack({
            delta: 1
          })
          this.setState({ loading: false})
        } else if (data.msg==='Fail.') {
          Taro.showToast({
            title: '服务器错误'
          })
          this.setState({ loading: false})
        }
      },
      )
    }
  }

  onChosenPass = (chosen) => {
    this.setState({ chosen })
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

  onChosen = (choose) => {
    this.setState({ tagChosen:choose })
  }

  enableShare () {
    const { title, content, tagChosen } = this.state
    if (title!== ''
    &&content!== ''
    &&tagChosen
    ) { return true }
    return false
  }

  handleInputChange(e) {
    this.setState({
        content: e.target.value,
    })
  }

  render () {
    const { show, title, content, loading } = this.state
    const { chosen } = this.state
    return (
      <View>
        <View className='header'>
          {loading&&<View className='loading'></View>}
          <Button 
            className={this.enableShare()&&!loading?'share-button able':'share-button disable'} 
            onClick={this.share}
          >
            发表
          </Button>
          发布需求
        </View>
        <View>
          <View className='title-container'>
            <Input
              placeholder='输入标题(0~10字)'
              placeholderClass='place-title'
              className='title'
              maxlength='10'
              value={title}
              // onChange={this.getInfo.bind(this,'title')}
              onInput={this.getInfo.bind(this,'title')}
            />
          </View>
          <View className='body-container'>
            {show
            ?<View className='fake-text'>{content===''?'请在此处输入内容......':content}</View>
            :<Textarea
              placeholder='请在此处输入内容......'
              placeholderClass='place-content'
              className='content'
              maxlength='100'
              hidden={show}
              value={content}
              onInput={this.handleInputChange.bind(this)}
            />}
          </View>
        </View> 
        <View className='add-container'>
          <View className='add-tag' onClick={this.changeShow}>
            <Text className='plus'>+</Text>
            <Text className='tag-words'>添加标签</Text>
          </View>
        </View>
        {show
        ?<Sidebar 
          onChangeShow={this.changeShow}
          onChosen={this.onChosen.bind(this)}
          choose={chosen}
          onChosenPass={this.onChosenPass}
          pass='kkk'
        />
        :null}
        <Footer mode='need' />
      </View>
    )
  }
}