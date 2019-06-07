import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text,ScrollView,Button,Icon,Progress,Checkbox,Form, Switch,Input,Picker,Slider,Radio,Audio,Image,MapVideo,Canvas,WebView,Textarea } from '@tarojs/components'
import './index.scss'

@connect(({ home }) => ({
  home
}))
export default class User extends Component {

  config = {
    navigationBarTitleText: '个人'
  }
  state = {
    btn: [
      {
        text: '页面主操作 Normal',
        size: 'default',
        type: 'primary'
      },
      {
        text: '页面主操作 Loading',
        size: 'default',
        type: 'primary',
        loading: true,
      },
      {
        text: '页面主操作 Disabled',
        size: 'default',
        type: 'primary',
        disabled: true,
      },
      {
        text: '页面次要操作 Normal',
        size: 'default',
        type: 'default'
      },
      {
        text: '页面次要操作 Disabled',
        size: 'default',
        type: 'default',
        disabled: true,
      },
      {
        text: '警告类操作 Normal',
        size: 'default',
        type: 'warn'
      },
      {
        text: '警告类操作 Disabled',
        size: 'default',
        type: 'warn',
        disabled: true,
      }
    ],
    list: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ],
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22',
    listRadio: [
      {
        value: '美国',
        text: '美国',
        checked: false
      },
      {
        value: '中国',
        text: '中国',
        checked: true
      },
      {
        value: '巴西',
        text: '巴西',
        checked: false
      },
      {
        value: '日本',
        text: '日本',
        checked: false
      },
      {
        value: '英国',
        text: '英国',
        checked: false
      },
      {
        value: '法国',
        text: '法国',
        checked: false
      }
    ]
  }
  componentWillMount () {
    
  }

  componentDidMount () { 
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  formSubmit = e => {
    console.log(e)
  }

  formReset = e => {
    console.log(e)
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

  render () {
    const {home:{data=[]},dispatch} = this.props

    return (
      <ScrollView>

        {/**Progress */}
        <View className='components-page'>
            <Progress percent={20} showInfo strokeWidth={2} />
            <Progress percent={40} strokeWidth={2} active />
            <Progress percent={60}  strokeWidth={2} active />
            <Progress percent={80}  strokeWidth={2} active activeColor='blue' />
      </View>

       {/**Button */}
        <View className='container'>
          {this.state.btn.map(item => {
            return (
              <Button
                size={item.size ? item.size : ''}
                type={item.type ? item.type : ''}
                loading={item.loading ? item.loading : false}
                disabled={item.disabled ? item.disabled : false}
              >
                {item.text}
              </Button>
            )
          })}
          <Button className='btn-max-w' plain type='primary'>按钮</Button>
          <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
          <Button className='btn-max-w' plain >按钮</Button>
          <Button className='btn-max-w' plain disabled >按钮</Button>
          <Button size='mini' type='primary'>按钮</Button>
          <Button size='mini' >按钮</Button>
          <Button size='mini' type='warn'>按钮</Button>
        </View>
      </ScrollView>
    )
  }
}

