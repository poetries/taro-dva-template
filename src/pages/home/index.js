import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text,ScrollView,Button } from '@tarojs/components'
import './index.scss'

@connect(({ home }) => ({
  home
}))
export default class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    visible: false
  }
  componentWillMount () {
    
  }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() {
    console.log('正在刷新。。。')
  }
  onReachBottom() {
    console.log('监听用户上拉触底事件')
  }
  // 监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。
  // 注意：只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }

  render () {
    const {home:{data=[]},dispatch} = this.props

    const popupStyle = process.env.TARO_ENV === 'rn' ?
      { transform: [{ translateY: Taro.pxTransform(-100) }] } :
      { transform: `translateY(${Taro.pxTransform(-100)})` }

    return (
      <ScrollView>
       <Button className='btn-max-w' plain type='primary' onClick={()=>{
        dispatch({
          type: 'home/query'
        })
       }}>获取数据</Button>
        {data && data.map(v=> <View><Text  style={{fontSize:14,color:'#ccc'}}>{v.customerId}-{v.customerName}</Text></View>)}

        {process.env.TARO_ENV === 'weapp' &&   <Button className='btn-max-w' plain type='primary' onClick={()=>{
          Taro.navigateTo({
            url: '/pages/demos/echarts/echarts'
          })
        }}>echarts演示</Button>}

       

       <Text className='test'>{'\ue7e3'}</Text>

      </ScrollView>
    )
  }
}

