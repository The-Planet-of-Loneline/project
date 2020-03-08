import Taro, { Component } from '@tarojs/taro'
import { View, Image, ScrollView } from '@tarojs/components'
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

// state存储卡片数据
  state={
    content:[0,0,0,0,0,0],
    page:0,
    disable:false,
    chosen:'type=1',
    enrefresh:'0',
    scroll_Y:95,
  }

  // componentWillMount () {
    // Fetch(
    //   `requirement/square/?limit=6&page=0&type=1`,
    //   {},
    //   'GET'
    //   ).then(data => {
    //     if (data.msg==='get result successful'){
    //       const content = data.content
    //       this.setState({ content })
    //       if (parseInt(data.num)<6) {
    //         this.setState({ page:0, disable:true })
    //       } else {
    //         this.setState({ page:6 })
    //       }
    //     } else if (data.msg==='Fail.') {
    //       Taro.showToast({
    //         title: '服务器错误',
    //         icon: 'none'
    //       })
    //     }    
    // })
  //  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  scrinfo = (info) => {
    const { chosen } = this.state
    if (chosen!==info) {
      Fetch(
        `requirement/square/?limit=6&page=0&${info}`,
        {},
        'GET'
      ).then(data => {
        if (data.msg==='get result successful'){
          const content = data.content
          this.setState({ content })
          if (parseInt(data.num)<6) {
            this.setState({ page:0, disable:true })
          } else {
            this.setState({ page:6 })
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
    let { chosen } = this.state
    const { page, disable } = this.state
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

  handleTouchEnd(){
    const { enrefresh } = this.state
    if (enrefresh==='1') {
      this.setState({ enrefresh: '2' },() => {
        // Fetch(
        //   `requirement/square/?limit=6&page=0&type=1`,
        //   {},
        //   'GET'
        //   ).then(data => {
        //     if (data.msg==='get result successful'){
        //       const content = data.content
        //       this.setState({ content })
        //       if (parseInt(data.num)<6) {
        //         this.setState({ page:0, disable:true })
        //       } else {
        //         this.setState({ page:6 })
        //       }
        //     } else if (data.msg==='Fail.') {
        //       Taro.showToast({
        //         title: '服务器错误',
        //         icon: 'none'
        //       })
        //     }    
        // })
        setTimeout(()=> {
          this.setState({ scroll_Y: 94, enrefresh:'0' })
        },1500)
      })
    } else {
      this.setState({ scroll_Y: 94 },()=>{
        console.log(this.state.scroll_Y)
      })
    }
    console.log('touch end')
  }

  updataScroll(e){
    // this.setState({ right_scroll_Y: e.detail.scrollTop })
    if (e.detail.scrollTop<=10) {
      this.setState({ enrefresh: '1' })
    } else {
      this.setState({ enrefresh: '0' })
    }
    console.log('scroll ed')
  }
  
  toScrollTop() {
    const { scroll_Y } = this.state
    console.log('1')
    return scroll_Y
  }

  render () {
    const { content, enrefresh } =this.state
    return (
      <View>
        <ScrollView
          className='scroll-contain'
          onTouchEnd={this.handleTouchEnd}
          scrollWithAnimation
          onScroll={this.updataScroll}
          scrollTop={this.toScrollTop()}
          scrollY
        >
          <View className='refresh-con'>
            <Refresh enable={enrefresh} />
          </View>
          <View className='cards-container' id='con'>
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


        {0?null:<Screening onScrInfo={this.scrinfo.bind(this)} />}
      

        <Footer mode='need' />
        <View className='share-container'>
          <Image src={Share} className='share' onClick={this.toCreateNeeds} />
        </View>
      </View>
    )
  }
}