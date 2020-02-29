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
    cards:[
      {
        kind:1,
        place:0,
        title:"标题",
        time:"周一 2：00-4：00"
      },
      {
        kind:2,
        place:0,
        title:"卡片二",
        time:"周四 2：00-4：00"
      },
      {
        kind:3,
        place:0,
        title:"第三号",
        time:"周三 2：00-4：00"
      },
      {
        kind:4,
        place:0,
        title:"JOJO",
        time:"周六 2：00-4：00"
      },
      {
        kind:3,
        place:0,
        title:"STAND",
        time:"周日 2：00-4：00"
      },
      {
        kind:2,
        place:0,
        title:"王者荣耀",
        time:"周五 2：00-4：00"
      }
    ]
  }

  componentWillMount () {
    Fetch(
      'login/',
      {
        'pwd':'',
        'sid':''
      },
       'POST'
       ).then(data => {
        console.log(data)
    })
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChangeInfo = (index) => {
    let info=this.state.cards
    info.splice(index,1,
        {
          kind:1,
          place:0,
          title:"changed",
          time:"周一 2：00-4：00"
        }
      )
      this.setState({ cards:info })
  }

  toCreateNeeds () {
    Taro.navigateTo({
      url: '/pages/share/share'
    })
  }

  render () {
    const { cards } =this.state
    return (
      <View>
        <Screening />
        <View className='cards-container'>
            { cards.length
              ?cards.map((detail,index) => {
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