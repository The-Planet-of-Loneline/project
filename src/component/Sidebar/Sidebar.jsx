import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Image, Input } from '@tarojs/components'
import './sidebar.scss'
import Close from './imgs/close.png'
import Tag from '../Tag/Tag'

export default class Sidebar extends Component {

  static defaultProps = { 
    choose:{
      time:[0,0,0,0,0,0,0],
      during:['',''],
      type:0,
      choices:[0,0]
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      content:{
        time:['周一','周二','周三','周四','周五','周六','周日',' '],
        type:['学习','运动','娱乐','其他'],
        choices:[
          {
            details:['自习','看书','上课','其他'],
            place:['教学楼','图书馆','其他',' ']
          },
          {
            details:['跑步','篮球','足球','羽毛球','乒乓球','网球','其他',' '],
            place:['佑铭体育馆','高职体育场','乒 羽 中 心','西区篮球场','高职篮球场','学子篮球场','学子网球场','其 他',' ']
          },
          {
            details:['游戏','吃饭','电影','其他'],
            place:['校内','校外','其他',' ']
          },
          {
            details:[],
            place:['校内','校外','其他',' ']
          }
        ]
      },
      placeHolder:['起始时间','结束时间'],
      chosen:this.props.choose
    }
  }
  
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  changeDate = (part, index) => {
    let { chosen } = this.state
    switch (part) {
      case 'time' : chosen.time.splice(index,1,! chosen.time[index])
                    break
      case 'type' : chosen.type=index
                    chosen.choices=[0,0]
                    break
      case 'detail' : chosen.choices[0]=index
                    break
      case 'place' : chosen.choices[1]=index
                    break
    }
    this.setState({ chosen })
  }

  reset () {
    this.setState({
      chosen:{
        time:[0,0,0,0,0,0,0],
        during:['',''],
        type:0,
        choices:[0,0]
      }
    })
  }

  getTime = (index,event) => {
    let { chosen } = this.state
    const time = event.target.value
    chosen.during[index]=time
    this.setState({ chosen })
  }

  changeShow () {
    this.chosenPass()
    this.props.onChangeShow()
  }

  chosenPass () {
    const { chosen } = this.state
    this.props.onChosenPass(chosen)
  }

  handleSubmit () {
    this.props.onChosen()
    this.changeShow()
  }

  sumDay () {
    const { chosen } = this.state
    let sum = 0
    chosen.time.map((single) => {
      sum+=single
    })
    return sum
  }

  enableThis () {
    const { chosen } = this.state

    if (this.sumDay()!==0
      && chosen.type!== 0
      && chosen.choices[0]!== 0
      && chosen.choices[1]!== 0
      ) {
      return true
    }
      return false
  }

  changeHolder (touch,which) {
    let { placeHolder } = this.state
    if (touch) {
      if (which) {
        placeHolder[1]=''
      } else {
        placeHolder[1]='结束时间'
      }
    } else {
      if (which) {
        placeHolder[0]=''
      } else {
        placeHolder[0]='起始时间'
      }
    }
    this.setState({ placeHolder })
  }

  render () {
    const { content } = this.state
    const { choices } = this.state.content
    const { chosen } = this.state
    const { placeHolder } = this.state

    return (
      <View className='shadow-container'>
        <View className='body-container'>
          <View className='choose-container'>
      {/* ----------------------------------- */}
            <View className='time-container'>
              <View className='header'>
                <Text className='words'>时间</Text>
                <Image src={Close} className='close' onClick={this.changeShow} />
              </View>
              <View className='list-extends'>
                {content.time.map((time,index) => {
                  return (
                    <Tag 
                      key={index+1} 
                      indexId={index} 
                      part='time'
                      tagName={time} 
                      litDate={chosen.time}
                      onChangeDate={this.changeDate} 
                    />
                  )
                })}
              </View>
              <View className='detail-time'>
                时间区间（1~24整点）
              </View>
              <View className='downer'>
                <Input
                  className='enter'
                  maxLength='2'
                  value={chosen.during[0]}
                  onChange={this.getTime.bind(this,0)}
                  placeholder={placeHolder[0]}
                  onFocus={this.changeHolder.bind(this,false,true)}
                  onBlur={this.changeHolder.bind(this,false,false)}
                />
                <View className='line'></View>
                <Input
                  className='enter'
                  maxLength='2'
                  value={chosen.during[1]}
                  onChange={this.getTime.bind(this,1)} 
                  placeholder={placeHolder[1]}
                  onFocus={this.changeHolder.bind(this,true,true)}
                  onBlur={this.changeHolder.bind(this,true,false)}
                />
              </View>
            </View>
        {/* ----------------------------------- */}
            <View className='type-container'>
              <View className='header'>
                <Text className='words'>类型</Text>
              </View>
              <View className='list-extends'>
                {content.type.map((type,index) => {
                  return (
                    <Tag 
                      key={index+1} 
                      indexId={index+1} 
                      part='type'
                      tagName={type} 
                      litDate={chosen.type}
                      onChangeDate={this.changeDate} 
                    />
                  )
                })}
              </View>
            </View>
        {/* ------------------------------------- */}
            {chosen.type !== 4
              ?(
                <View className='detail-container'>
                  <View className='header'>
                    <Text className='words'>内容</Text>
                  </View>
                  <View className='list-extends'>
                    {choices[chosen.type?chosen.type-1:0].details.map((details,index) => {
                      return (
                        <Tag 
                          key={index+1} 
                          indexId={index+1} 
                          part='detail' 
                          tagName={details} 
                          litDate={chosen.choices[0]}
                          onChangeDate={this.changeDate} 
                        />
                      )
                    })}
                  </View>
                </View>
              )
              :null
            }
          {/* ------------------------------------ */}
            <View className='place-container'>
              <View className='header'>
                <Text className='words'>地点</Text>
              </View>
              <View className='list-extends'>
                {choices[chosen.type?chosen.type-1:0].place.map((place,index) => {
                  return (
                    <Tag 
                      key={index+1} 
                      indexId={index+1} 
                      part='place'
                      type={chosen.type}
                      tagName={place} 
                      litDate={chosen.choices[1]}
                      onChangeDate={this.changeDate}
                    />
                  )
                })}
              </View>
            </View>
          </View>
          <View className='submit-container'>
            <Button 
              className={this.enableThis()?'press submit-info':'press disable'} 
              onClick={this.enableThis()?this.handleSubmit:null}
            >
              提交
            </Button>
            <Button className='press reset' onClick={this.reset}>重置</Button>
          </View>
        </View>
      </View>
    )
  }
}