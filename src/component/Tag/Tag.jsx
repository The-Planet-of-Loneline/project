import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './tag.scss'

export default class Tag extends Component {
  
  static defaultProps={
    indexId:0,
    part:'time',
    tagName:'null',
    litDate:0,
    type:0
  }
  
  constructor(props){
    super(props)
    
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  changeDate () {
    const part = this.props.part
    const indexId = this.props.indexId
    this.props.onChangeDate(part, indexId)
  }

  wLit () {
    const part =this.props.part
    const indexId =this.props.indexId
    const litDate = this.props.litDate
    switch (part) {
      case 'time' : return (litDate[indexId])
      case 'type' : return (litDate===indexId)
      case 'detail' : 
      case 'place' : return (litDate===indexId)
    }
  }

  testforBlank (){
    const tagName = this.props.tagName
    if (tagName === ' ') {
      return false
    } else {
      return true
    }
  }

  explain () {
    const type = this.props.type
    const part =this.props.part
    if (part === 'place' && type === 2 ) { return 'long-blank' }
    return 'blank'
  }

  render () {
    const tagName = this.props.tagName
    return (
      <View>
        {this.testforBlank()
        ?<View
          className={this.wLit()?'lit-tag lit':'lit-tag unlit'} 
          onClick={this.changeDate}
        >
          { tagName }
        </View>
        :<View className={this.explain()}></View>
        }
      </View>
    )
  }
}