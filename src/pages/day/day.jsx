import Taro, { Component } from '@tarojs/taro'
import { View, Image, ScrollView, MovableArea, MovableView } from '@tarojs/components'
import './day.scss'
import Footer from '../../component/Footer/Footer'
import Card from './Card/Card'
import Blank from './Blank/Blank'
import Screening from './Screening/Screening'
import Share from './share.png'
import Refresh from './Refresh/Refresh'
import Fetch from '../../service/fetch'


export default class Day extends Component {

  static defaultProps = {
    
  }

  constructor () {
    super()
    const res=Taro.getSystemInfoSync()
    this.state={
      heightStyle:`height: ${res.windowHeight-80}px`,
      content:[],
      page:0,
      disable:false,
      chosen:'type=1',
      enrefresh:'0',
      scroll_Y:100,
    } 
  }

  componentWillMount () {
    Taro.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    })

    Fetch(
      `requirement/square/?limit=6&page=0&type=1`,
      {},
      'GET'
      ).then(data => {
        if (data.msg==='get result successful'){
          this.setState({ content: data.content })
          if (data.num<6) {
            this.setState({ page:0, disable:true })
          } else {
            this.setState({ page:1 })
          }
        } else if (data.msg==='Fail.') {
          Taro.showToast({
            title: '服务器错误',
            icon: 'none'
          })
        }    
    })
   }


  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () {this.setState({ scroll_Y: 95 })}

  config = {
    navigationBarTitleText: '孤独星球',
    enablePullDownRefresh: true
  }
  
  scrinfo = (info) => {
    const { chosen } = this.state
    if (chosen!==info) {
      Fetch(
        `requirement/square/?limit=6&page=0&${info}`,
        {},
        'GET'
      ).then(data => {
        if (data.msg==='get result successful'){
          this.setState({ content: data.content })
          if (data.num<6) {
            this.setState({ page:0, disable: true })
          } else {
            this.setState({ page:1, disable: false })
          }
        } else if (data.msg==='none') {
          this.setState({ content:[] })
        } else if (data.msg==='Fail.') {
          Taro.showToast({
            title: '服务器错误',
            icon: 'none'
          })
        }       
      })
    }
    this.setState({ chosen: info })
  }

  onChangeInfo = (index) => {
    const { page, disable, chosen } = this.state
    let info=this.state.content 
    if (!disable) {
      Fetch(
        `requirement/square/?limit=1&page=${page}&${chosen}`,
        {},
        'GET'
        ).then(data => {
          if (data.msg==='get result successful') {
            const content = data.content[0]
            info.splice(index,1,content)
            this.setState({ content:info, page:page+1 })
          } else if (data.msg==='none') {
            Taro.showToast({
              title: '让我们重新开始=W=',
              icon: 'none'
            })
            this.setState({ page: 0 })
          } else {
            Taro.showToast({
              title: '服务器错误',
              icon: 'none'
            }) 
          }
      })
    }
  }

  toCreateNeeds () {
    Taro.navigateTo({
      url: '/pages/share/share'
    })
  }


  // 触摸结束后判断刷新图标状态，ready则释放刷新
  handleTouchEnd(){
    const { enrefresh } = this.state
    if (enrefresh==='1') {
      this.setState({ enrefresh: '2' },() => {
        this.letRefresh()
        setTimeout(()=> {
          this.setState({ scroll_Y: 95, enrefresh:'0' })
        },1500)
      })
    } else {
      this.setState({ scroll_Y: 95 })
    }
  }

  letRefresh(){
    const { chosen, page } = this.state
    Fetch(
      `requirement/square/?limit=6&page=${page}&${chosen}`,
      {},
      'GET'
      ).then(data => {
        if (data.msg==='get result successful') {
          if (data.num===6) {
            if (page===0) {
              this.setState({ content: data.content, page: 1, disable: false })
            } else {
              this.setState({ content: data.content, page: page+6 })
            }
          } else {
            this.setState({ content: data.content, page: 0 })
          }
        } else if (data.msg==='none'){
          Fetch(
            `requirement/square/?limit=6&page=0&${chosen}`,
            {},
            'GET'
          ).then(res => {
            if (res.msg==='get result successful'){
              this.setState({ content: res.content })
              if (res.num<6) {
                this.setState({ page:0 })
              } else {
                this.setState({ page:1 })
              }
            } else if (res.msg==='none') {
              this.setState({ content:[] })
            } else if (res.msg==='Fail.') {
              Taro.showToast({
                title: '服务器错误',
                icon: 'none'
              })
            }       
          })
        }else {
          Taro.showToast({
            title: '服务器错误',
            icon: 'none'
          }) 
        }
    })
  }

  updataScroll(e){
    if (e.detail.scrollTop<=10) {
      this.setState({ scroll_Y:100, enrefresh: '1' })
    } else {
      this.setState({ scroll_Y:100, enrefresh: '0' })
    }
  }


  render () {
    const res=Taro.getSystemInfoSync()
    const { content, enrefresh, scroll_Y, heightStyle} =this.state
    
    const Style = {
      height: `${res.windowHeight-80}`+'px',
      width: `${res.windowWidth}`+'px'
    }
    return (
      <View>
        <MovableArea
          className='scroll-whole'
          style={Style}
        >
          <ScrollView
            className='scroll-contain'
            onTouchEnd={this.handleTouchEnd}
            scrollWithAnimation
            onScroll={this.updataScroll}
            scrollTop={scroll_Y}
            scrollY
            style={heightStyle}
            refresherEnabled
            refresherTThreshold='5'
          >
            <View className='refresh-con'>
              <Refresh enable={enrefresh} />
            </View>
            <View className='cards-container' style={heightStyle} >
            { content.length
              ?content.map((detail,index) => {
                      return (
                        <Card
                          key={index+1}
                          index={index}
                          detail={detail}
                          onChangeInfo={this.onChangeInfo}
                        />
              )})
              :<Blank />
            }
            </View>
          </ScrollView>
          <MovableView
            className='share-container'
            direction='all'
            x={res.windowWidth-95}
            y={res.windowHeight-250}
          >
            <Image src={Share} className='share' onClick={this.toCreateNeeds} />
          </MovableView>
        </MovableArea>
        {0?null:<Screening onScrInfo={this.scrinfo.bind(this)} />}
        <Footer mode='need' />
      </View>
    )
  }
}