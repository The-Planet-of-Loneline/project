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
    content:[
      {
        date: '周一 2：00-4：00',
        place: '1',
        requirement_id: 0,
        tag: '1',
        title: '标题1'
      },
      {
        date: '周一 2：00-4：00',
        place: '教学楼2',
        requirement_id: 0,
        tag: '学习2',
        title: '标题2'
      },
      {
        date: '周一 2：00-4：00',
        place: '教学楼3',
        requirement_id: 0,
        tag: '学习3',
        title: '标题3'
      }
    ],
    chosen:{
      date: "10000000",
      limit: "6",
      page: "1",
      place: 0,
      tag: 0,
      time_end: 24,
      time_from: 1,
      type: 1
    }
  }

  componentWillMount () {
    Fetch(
      'requirement/square/',
      {
        date: "10000000",
        limit: "6",
        page: "1",
        place: 0,
        tag: 0,
        time_end: 24,
        time_from: 1,
        type: 1
      },
       'GET'
      ).then(data => {
        const content = data.content
        this.setState({ content })
    })

    // {
    //   "content": [
    //     {
    //       "date": "string",
    //       "place": "string",
    //       "requirement_id": 0,
    //       "tag": "string",
    //       "title": "string"
    //     }
    //   ],
    //   "msg": "string",
    //   "num": 0
    // }
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  scrinfo = (info) => {
    this.setState({ chosen: info })
    info.limit='6'
    info.page='1'
    Fetch(
      'requirement/square/',
      info,
      'GET'
    ).then(data =>{
      const content = data.content
      this.setState({ content })
    })
  }

  onChangeInfo = (index) => {
    let { chosen } = this.state
    let info=this.state.content
    chosen.limit='1'
    chosen.page='1'
    Fetch(
      'requirement/square/',
      chosen,
      'GET'
      ).then(data => {
        const content = data.content[0]
        info.splice(index,1,content)
        this.setState({ content:info })
    })
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