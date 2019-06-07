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
         {/**Icon图标 */}
          <Icon size='60' type='success' />
          <Icon size='60' type='info' />
          <Icon size='60' type='warn' color='#ccc' />
          <Icon size='60' type='warn' />
          <Icon size='60' type='waiting' />
          <Icon size='20' type='success_no_circle' />
          <Icon size='20' type='warn' />
          <Icon size='20' type='success' />
          <Icon size='20' type='download' />
          <Icon size='20' type='clear' color='red' />
          <Icon size='20' type='search' />

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
          
        {/*Checkbox*/}
        <View className='page-body'>
          <View className='page-section'>
            <Text>默认样式</Text>
            <Checkbox value='选中' checked>选中</Checkbox>
            <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
          </View>
          <View className='page-section'>
            <Text>推荐展示样式</Text>
            {this.state.list.map((item, i) => {
              return (
                <Label className='checkbox-list__label' for={i} key={i}>
                  <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>
                </Label>
              )
            })}
          </View>
        </View>
        
        {/**Form, Switch */}
        <Form onSubmit={this.formSubmit} onReset={this.formReset} >
        <View className='example-body'>
          <Switch name='switch' className='form-switch'></Switch>
        </View>
      </Form>

        <View className='example-body'>
        <Text>可以自动聚焦的 input</Text>
          <Input type='text' placeholder='将会获取焦点' focus/>
          <Text>控制最大输入长度的 input</Text>
          <Input type='text' placeholder='最大输入长度为 10' maxLength='10'/>
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

      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  当前选择：{this.state.timeSel}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                  当前选择：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>

      <View className='container'>
        <Head title='Radio' />
        <View className='page-body'>
          <View className='page-section'>
            <Text>默认样式</Text>
            <Radio value='选中' checked>选中</Radio>
            <Radio style='margin-left: 20rpx' value='未选中'>未选中</Radio>
          </View>
          <View className='page-section'>
            <Text>推荐展示样式</Text>
            <View className='radio-list'>
              <RadioGroup>
                {this.state.listRadio.map((item, i) => {
                  return (
                    <Label className='radio-list__label' for={i} key={i}>
                      <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                    </Label>
                  )
                })}
              </RadioGroup>
            </View>
          </View>
        </View>
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
        <Text>默认样式</Text>
        <Switch checked/>
        <Switch/>
        <Text>推荐展示样式</Text>
        <Switch checked/>
        <Switch/>
      </View>

      <View className='components-page'>
        <Text>输入区域高度自适应，不会出现滚动条</Text>
        <Textarea style='background:#fff;width:100%;min-height:80px;padding:0 30rpx;' autoHeight/>
        <Text>这是一个可以自动聚焦的 textarea</Text>
        <Textarea style='background:#fff;width:100%;height:80px;padding:0 30rpx;' autoFocus/>
      </View>
      </ScrollView>
    )
  }
}

