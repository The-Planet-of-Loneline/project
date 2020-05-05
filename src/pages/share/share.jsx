import Taro, { Component } from '@tarojs/taro'
import { View, Text, Textarea, Input, Button, Image } from '@tarojs/components'
import './share.scss'
import Footer from '../../component/Footer/Footer'
import Sidebar from './Sidebar/Sidebar'
import Draft from './imgs/draft.png'
import DraftMsg from  './DraftMsg/DraftMsg'
import Fetch from '../../service/fetch'

export default class Share extends Component {

  static defaultProps = {
    
  }

  state = {
    show:false,
    draft_msg: 0,
    title:'',
    content:'',
    tagChosen:false,
    loading: false,
    chosen:{
      time:[0,0,0,0,0,0,0],
      during:['',''],
      type:0,
      choices:[0,0]
    },
    draft: {}
  }

  componentWillMount () {
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })
    Fetch(
      'requirement/draft/',
      {},
      'GET'
    ).then( data => {
      if (data.msg==='success') {
        if (data.draft.has_draft===1) {
          // show toast
          this.setState({ 
            draft_msg: 1,
            draft: data.draft.content
          })
          Fetch(
            'requirement/draft/',
            {},
            'PUT'
          )
        }
      } else {
        console.error('draft missing')
    }})
  }
  config = {navigationBarTitleText: '孤独星球'}

  explainInfo = () => {
    const { draft } = this.state
    let num = draft.date
    let tagChosen = false
    let date = [0,0,0,0,0,0,0]
    for (let i = 0; i<=6; i++) {
      date[i]=num%10
      num=Math.floor(num/10)
    }
    if (draft.date!=='10000000'
    && draft.type!== 0
    && draft.type!== 4
    && draft.tag!== 0
    && draft.place!== 0
    ) {
      tagChosen = true
    }
    if (draft.date!=='10000000'
      && draft.type=== 4
      && draft.place!== 0
    ) { tagChosen = true }

    this.setState({
      draft_msg:0,
      title:draft.title,
      content:draft.content,
      tagChosen,
      chosen:{
        time:date,
        during:[draft.time_from,draft.time_end],
        type:draft.type,
        choices:[draft.tag,draft.place]
      }
    })
  }

  draftToast = (num) => {
    this.setState({ draft_msg: num})
  }

  deal (isDraft) {
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
      type: chosen.type,
      is_draft: isDraft
    }
    return info
  }

  saveDraft = () => {
      const info = this.deal(1)
      if (info==={
        content: 'content',
        date: 10000000,
        place: 0,
        post_time:'',
        requirement_id:0,
        tag: 0,
        time_from: 0,
        time_end: 24,
        title: '',
        type: 0,
        is_draft: 1
      }) {
        Taro.showToast({
          title: '未输入有效信息',
          icon: 'none'
        })
        this.setState({ draft_msg: 0})
      } else {
          Fetch(
            'requirement/new/',
            info,
            'PUT'
          ).then(data => {
            if (data.msg==='success') {
              Taro.showToast({
                title: '保存成功!'
              })
              Taro.navigateBack({
                delta: 1
              })
            } else if (data.msg==='Fail.') {
              Taro.showToast({
                title: '保存失败!'
              })
            }
          })
      }
  }

  share () {
    const { loading } = this.state
    if (this.enableShare()&&!loading) {
      this.setState({ loading: true})
      const info=this.deal(2)
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
        } else if (data.msg==='requirement already exist.') {
          Taro.showToast({
            title: '需求已存在'
          })
          Taro.navigateBack({
            delta: 1
          })
        } else if (data.msg==='Fail.') {
          Taro.showToast({
            title: '服务器错误'
          })
          setTimeout(() => {
            this.setState({ loading: false})
          }, 500);
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
    const { show, title, content, loading, draft_msg } = this.state
    const { chosen } = this.state
    return (
      <View>
        {draft_msg===1&&<DraftMsg 
          text1='您上次保存的内容,'
          text2='是否要恢复?'
          onSureEvent={this.explainInfo.bind(this)}
          onCancleEvent={this.draftToast.bind(this,0)}
        />}
        {draft_msg===2&&<DraftMsg 
          text1='您有未完成的内容,'
          text2='是否要保存到草稿箱并返回首页'
          onSureEvent={this.saveDraft.bind(this)}
          onCancleEvent={this.draftToast.bind(this,0)}
        />}
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
          <View className='save-draft' onClick={this.draftToast.bind(this,2)}>
            <Image className='draftimg' src={Draft} />
            <Text className='tag-words'>暂存草稿</Text>
          </View>
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