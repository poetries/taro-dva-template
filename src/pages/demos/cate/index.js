import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text,ScrollView,Button,Input,Switch,Slider,Textarea,Picker } from '@tarojs/components'
import './index.scss'

@connect(({ home }) => ({
  home
}))
export default class Cate extends Component {

  config = {
    navigationBarTitleText: '分类'
  }

  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }


  componentWillMount () {
    
  }

  componentDidMount () { 
    Taro.getSystemInfo({
      success: res => console.log(res)
    })
      .then(res => console.log(res))

      // Taro.setNavigationBarTitle({
      //   title: '当前页-分类-动态设置标题'
      // })
      // Taro.setNavigationBarColor({
      //   frontColor: '#ffffff',
      //   backgroundColor: '#f00'
      // })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

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


  render () {
    const {home:{data=[]},dispatch} = this.props

    console.log(Taro.getEnv(),'Taro.ENV_TYPE')
    return (
      <ScrollView>
          <Button className='btn-max-w' plain type='primary' onClick={()=>{
            Taro.navigateTo({
              url: '/pages/user-login/user-login'
            })
          }}>跳转到登录页</Button>

          <Button className='btn-max-w' plain type='primary' onClick={()=>{
            Taro.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })
          }}>showToast</Button>

          <Button className='btn-max-w' plain type='primary' onClick={()=>{
            Taro.showActionSheet({
              itemList: ['a', 'b', 'c']
            })
          }}>showActionSheet</Button>

          <Button  onClick={()=>Taro.showModal({
            title: '小明',
            content: 'hello world',
          })}>showModal1</Button>

          <View className='example-body'>
          <Text>可以自动聚焦的 input</Text>
            <Input type='text' placeholder='将会获取焦点' focus/>
            <Text>数字输入的 input</Text>
            <Input type='number' placeholder='这是一个数字输入框'/>
            <Text>密码输入的 input</Text>
            <Input type='password' password placeholder='这是一个密码输入框'/>
            <Text>带小数点的 input</Text>
            <Input type='digit' placeholder='带小数点的数字键盘'/>
            <Text>身份证输入的 input</Text>
            <Input type='idcard' placeholder='身份证输入键盘'/>
            <Text>控制占位符颜色的 input</Text>
            <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red'/>
        </View>

        <View className='example-body'>
           <Switch checked/>
        </View>

        <View className='components-page'>
        <Text>设置 step</Text>
        <Slider step={1} value={50}/>
        <Text>显示当前 value</Text>
        <Slider step={1} value={50} showValue/>
        <Text>设置最小/最大值</Text>
        <Slider step={1} value={100} showValue min={50} max={200}/>
      </View>

      <View className='components-page'>
        <Text>输入区域高度自适应，不会出现滚动条</Text>
        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>
      </View>

      
      </ScrollView>
    )
  }
}

