import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './day.scss'
import Footer from '../../component/Footer/Footer'
import Card from './Card/Card'
import Blank from './Blank/Blank'
import Screening from './Screening/Screening'
import Share from './share.png'
import Fetch from '../../service/fetch'

export default class Day extends Component {

  static defaultProps = {
    
  }

// state存储卡片数据
  state={
    content:[],
    page:0,
    disable:false,
    chosen:'type=1'
  }

  componentWillMount () {
    Fetch(
      `requirement/square/?limit=6&page=0&type=1`,
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

  render () {
    const { content } =this.state
    return (
      <View>
        <Screening 
          onScrInfo={this.scrinfo.bind(this)}
        />
        <View className='cards-container'>
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
        <Footer mode='need' />
        <View className='share-container'>
          <Image src={Share} className='share' onClick={this.toCreateNeeds} />
        </View>
      </View>
    )
  }
}