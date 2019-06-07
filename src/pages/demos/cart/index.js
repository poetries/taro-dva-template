import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text,ScrollView,Button,Swiper, SwiperItem,Picker } from '@tarojs/components'
import './index.scss'
import { AtNavBar,AtForm, AtInput, AtButton,AtCalendar,AtTimeline } from 'taro-ui'
import { Header,Divider,Icon} from 'react-native-elements';
import ActionSheet from 'react-native-actionsheet'
import Echarts from 'native-echarts';

@connect(({ home }) => ({
  home
}))
export default class Cart extends Component {

  state = {
    value: '',
    selector: ['美国', '中国', '巴西', '日本'],
    options:['选择工艺卡或工艺记录','选择模板','取消'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22',
  };
  config = {
    navigationBarTitleText: '购物车',
    navigationStyle: 'custom',
  }
  constructor() {
    super(...arguments)
  }
  componentWillMount () {
    
  }

  componentDidMount() {

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onScrollToUpper(e){
    console.log(e.detail)
  }
  _showActionSheet = () => {
    this.ActionSheet.show()
  };
  
  onScroll(e){
    console.log(e.detail)
  }

  handleChange (value) {
    this.setState({
      value
    })
  }
  onSubmit (event) {
    console.log(event)
  }
  onReset (event) {
    console.log(event)
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  refLineChart = (node) => this.lineChart = node

  getOptions = ()=>{
    return  {
      title: {
          text: 'ECharts demo'
      },
      tooltip: {},
      legend: {
          data:['销量']
      },
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
    }
  }
  render () {
    const {home:{data=[]},dispatch} = this.props

  

    return (
      <ScrollView>
        {
          process.env.TARO_ENV === 'rn' && <Header
          leftComponent={
            <View onClick={()=>{
              Taro.showActionSheet({
                itemList: ['a', 'b', 'c']
              })
            }}>
                <Icon
                  name='menu'
                  type='EvilIcons'
                  color="#fff"
                  underlayColor="#03a9f4"
              />
            </View>
          }
          centerComponent={{ text: '购物车', style: { color: '#fff'} }}
          rightComponent={
            <View onClick={this._showActionSheet}>
                <Icon
                  name='ios-more'
                  type='ionicon'
                  color="#fff"
                  underlayColor="#03a9f4"
              /> 
            </View>
          }
          containerStyle={{'backgroundColor':'#1DBAF1',height: 70,marginTop: -10}}
        />
        }

        {
          process.env.TARO_ENV === 'rn' &&  <ActionSheet
          ref={o => this.ActionSheet = o}
          title={''}
          options={this.state.options}
          cancelButtonIndex={2}
          // onPress={(index) => {this.onActionSheet(index) }}
        />}
        
        {
          process.env.TARO_ENV === 'rn' && <Echarts option={this.getOptions()} height={300} />
        }
        
        {process.env.TARO_ENV === 'weapp' && 
          <AtNavBar
              color='#000'
              title='NavBar 导航栏示例'
              leftText='返回'
              rightFirstIconType='bullet-list'
              rightSecondIconType='user'
          />
        }
        {process.env.TARO_ENV === 'weapp' &&  <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name='value'
          title='文本'
          type='text'
          placeholder='单行文本'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>}
      {process.env.TARO_ENV === 'weapp' && 
      <AtCalendar />
       }
       {process.env.TARO_ENV === 'weapp' && 
       <View className='container'>
       <View className='page-body'>
         <View className='page-section'>
           <Text>地区选择器</Text>
           <View>
             <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
               <View className='picker'>
               <Text>当前选择：{this.state.selectorChecked}</Text>
               </View>
             </Picker>
           </View>
         </View>
         <View className='page-section'>
           <Text>时间选择器</Text>
           <View>
             <Picker mode='time' onChange={this.onTimeChange}>
               <View className='picker'>
                 <Text>当前选择：{this.state.timeSel}</Text>
               </View>
             </Picker>
           </View>
         </View>
         <View className='page-section'>
           <Text>日期选择器</Text>
           <View>
             <Picker mode='date' onChange={this.onDateChange}>
               <View className='picker'>
                 <Text>当前选择：{this.state.dateSel}</Text>
               </View>
             </Picker>
           </View>
         </View>
       </View>
     </View>
      }

      </ScrollView>
    )
  }
}

