import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getUserInfo } from '../in/redux'
import bg from './images/bg.png'
import './index.less'
import logo from '../home/images/fb.png'

@connect(
  state => ({
    headImageUrl: state.in.headImageUrl,
    nickName: state.in.nickName,
  }),
  dispatch => bindActionCreators({
    getUserInfo,
  }, dispatch),
)
class My extends React.Component {
  componentDidMount() {
    // 获取用户的信息
    this.props.getUserInfo()
  }
  render() {
    return (
      <View className='my_container'>
        <View className='heade-container'>
          <View className='head'>
            <View className='head-image'><Image className='logo' src={this.props?.headImageUrl || logo} /></View>
            <View className='name'>{this.props?.nickName || '***'}</View>
          </View>
        </View>
        <View className='content'>
          <View className='list'>
            <View className='item-msg'>添加共同管理人</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View  className='list'>
            <View className='item-msg'>租户须知</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View  className='list'>
            <View className='item-msg'>推荐给好友</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View  className='list'>
            <View className='item-msg'>关于我们</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
        </View>
      </View>
    )
  }
}

export default My