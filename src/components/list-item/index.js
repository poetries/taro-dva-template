import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView,Button,Swiper, SwiperItem,Picker } from '@tarojs/components'
import {  ListItem,Icon } from 'react-native-elements'
import './index.scss'

export default class listItem extends Component {
  static componentName = 'listItem';

  constructor(props) {
    super(props);

    this.state = {

    };
  }
  
  render () {
    const {data=[],bgColor} = this.props
    return (
      <View>
          {
            data.map((item) => (
              <ListItem
                containerStyle={{borderBottomColor: '#fff',backgroundColor:bgColor}}
                key={item.title}
                title={item.title}
                leftIcon={<Icon
                  containerStyle={{paddingRight:10}}
                  name={item.icon}
                  type={item.type}
                  color="#fff"
                />}
                onPress={()=>item.action?item.action():null}
                rightIcon={{color:'#fff'}}
                titleStyle={{color:'#fff'}}
              />
            ))
          }
    </View>
    )
  }
}
