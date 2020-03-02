import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import Tag from '../../../component/Tag/Tag'
import './screening.scss'

export default class Screening extends Component {
  
  state = {
    content:{
      time:['周一','周二','周三','周四','周五','周六','周日',' '],
      choices:[
        {
          details:['自习','看书','上课','其他'],
          place:['教学楼','图书馆','其他',' ']
        },
        {
          details:['跑步','篮球','足球','羽毛球','乒乓球','网球','其他',' '],
          place:['佑铭体育馆','高职体育场','乒羽中心','西区篮球场','高职篮球场','学子篮球场','学子网球场','其他']
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
    chosen:{
      type:1,
      which:0,
      time:[0,0,0,0,0,0,0],
      during:['',''],
      choices:[0,0]
    },
    tStyle:'container t-out',
    oStyle:'container o-out',
    placeHolder:['起始时间','结束时间']
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 向外传递 转换好的 chosen
  passScr () {
    const { chosen } = this.state
    
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

    const info = {
      page: '',
      limit: '',
      type: chosen.type,
      tag: chosen.choices[0],
      place: chosen.choices[1],
      time_from: parseInt(time_from),
      time_end: parseInt(time_end),
      date: date
    }

    console.log('screening',info)

    this.props.onScrInfo(info)
  }

  // 动画函数
  flyin () {
    this.setState({ 
      oStyle:'container o-in',
      tStyle:'container t-in'
     })
  }

  flyout () {
    this.setState({ 
      oStyle:'container o-out',
      tStyle:'container t-out'
     })
  }

  changeDate = (part, index) => {
    let { chosen } = this.state
    switch (part) {
      case 'type' : chosen.type=index
                    this.flyin()
                    this.passScr()
                    setTimeout(() => {
                      chosen.choices=[0,0]
                      chosen.which=0
                    }, 300);
                    break
      case 'which': if (chosen.which !== index) {
                      this.flyout()
                      chosen.which=index
                    } else {
                      this.flyin()
                      this.passScr()
                      setTimeout(() => {
                      chosen.which=0
                      }, 300);                      
                    }
                    break
      case 'time' : chosen.time.splice(index,1,! chosen.time[index])
                    break
      case 'detail' : chosen.choices[0]=index
                    break
      case 'place' : chosen.choices[1]=index
                    break
    }
    setTimeout(()=>{this.setState({ chosen })},300)
  }

  // 数据处理函数
  onDuring (index) {
    let { chosen } = this.state
    if (index===1&&chosen.during[0]!==''&&parseInt(chosen.during[0])>=parseInt(chosen.during[1])) {
      chosen.during[index]=''
      this.setState({ chosen })
    }
    if (index===0&&chosen.during[1]!==''&&(parseInt(chosen.during[0])>=parseInt(chosen.during[1]))) {
      chosen.during[index]=''
      this.setState({ chosen })
    }
  }

  ifNum (index,e) {
    const inpuValue = e.target.value
    let { chosen } = this.state
    if (!/\D/.test(inpuValue)&&((parseInt(inpuValue)>0&&parseInt(inpuValue)<=24)||inpuValue==='')) {
      // 判断是否为1-24
      chosen.during[index]=inpuValue
      this.setState({ chosen })
    } else {
      return chosen.during[index]
    }
  }

  reset (detail) {
    let { chosen } = this.state
    switch (detail) {
      case 'type' : chosen.choices[0]=0
                    break
      case 'time' : chosen.time=[0,0,0,0,0,0,0]
                    chosen.during=['','']
                    break
      case 'place' : chosen.choices[1]=0
                    break
    }
    this.setState({ chosen })
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

  closeScr () {
    let { chosen } = this.state
    this.flyin ()
    this.passScr()
    setTimeout(()=>{
      chosen.which=0
      this.setState({ chosen })
    },300)
  }

  showScreen () {
    const { chosen } = this.state
    const { content } = this.state
    const { choices } = content
    const { placeHolder } = this.state
    const { oStyle } = this.state
    const { tStyle } = this.state

    switch (chosen.which) {
      case 0 :{ return null }
      case 1 :{
        return (
          <View className={oStyle}>
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
            <View className='reset' onClick={this.reset.bind(this,'type')}>重置</View>
          </View>
        )
      }
      case 2 :{
        return (
          <View className={tStyle}>
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
                placeholder={placeHolder[0]}
                value={chosen.during[0]}
                onInput={this.ifNum.bind(this,0)}
                onChange={this.onDuring.bind(this,0)}
                onFocus={this.changeHolder.bind(this,false,true)}
                onBlur={this.changeHolder.bind(this,false,false)}
              />
              <View className='line'></View>
              <Input
                className='enter'
                maxLength='2'
                placeholder={placeHolder[1]}
                value={chosen.during[1]}
                onInput={this.ifNum.bind(this,1)}
                onChange={this.onDuring.bind(this,1)}
                onFocus={this.changeHolder.bind(this,true,true)}
                onBlur={this.changeHolder.bind(this,true,false)}
              />
            </View>
            <View className='reset' onClick={this.reset.bind(this,'time')}>重置</View>
          </View>
        )
      }
      case 3 :{
        return (
          <View className={oStyle}>
            <View className='list-extends'>
            {choices[chosen.type?chosen.type-1:0].place.map((place,index) => {
              return (
                <Tag
                  key={index+1} 
                  indexId={index+1} 
                  part='place' 
                  tagName={place} 
                  litDate={chosen.choices[1]}
                  onChangeDate={this.changeDate}
                />
              )
            })}
           </View>
           <View className='reset' onClick={this.reset.bind(this,'place')}>重置</View>
          </View>
        )
      }
    }
  }

  render () {
    const { chosen } = this.state
    return (
      <View>
        <View className='divide'>
          <View 
            className={chosen.type === 1?'s-tag chosen':'s-tag'} 
            onClick={this.changeDate.bind(this,'type',1)}
          >
            学习
          </View>
          <View 
            className={chosen.type === 2?'s-tag chosen':'s-tag'}
            onClick={this.changeDate.bind(this,'type',2)}
          >
            运动
          </View>
          <View 
            className={chosen.type === 3?'s-tag chosen':'s-tag'}
            onClick={this.changeDate.bind(this,'type',3)}
          >
            娱乐
          </View>
          <View
            className={chosen.type === 4?'s-tag chosen':'s-tag'}
            onClick={this.changeDate.bind(this,'type',4)}
          >
            其他
          </View>
        </View>
        <View className='divide'>
          {chosen.type !==4?<View className='ss-tag' onClick={this.changeDate.bind(this,'which',1)}>类别 <Text className='s-tri'>▼</Text></View>:null}
          <View className='ss-tag' onClick={this.changeDate.bind(this,'which',2)}>时间 <Text className='s-tri'>▼</Text></View>
          <View className='ss-tag' onClick={this.changeDate.bind(this,'which',3)}>地点 <Text className='s-tri'>▼</Text></View>
        </View>
        {this.showScreen()}
        {chosen.which?<View className='shadow' onClick={this.closeScr}></View>:null}
      </View>
    )
  }
}