import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon, AtMessage } from 'taro-ui'
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
  constructor(props) {
    super(props)
    this.subscribeMessage = this.subscribeMessage.bind(this)
  }
  componentDidMount() {
    // 获取用户的信息
    this.props.getUserInfo()
  }
  jumpUrl(url) {
    Taro.navigateTo({
      url
    })
  }
  subscribeMessage() {
    Taro.getSetting({
      withSubscriptions: true,
      success(res) {
        // console.log(res.authSetting)
        // userInfo 是否授权用户信息，对应接口 wx.getUserInfo
        // userLocation 是否授权地理位置，对应接口 wx.getLocation, wx.chooseLocation
        // address 是否授权通讯地址，已取消此项授权，会默认返回true
        // invoiceTitle 是否授权发票抬头，已取消此项授权，会默认返回true
        // invoice 是否授权获取发票，已取消此项授权，会默认返回true
        // werun 是否授权微信运动步数，对应接口 wx.getWeRunData
        // record 是否授权录音功能，对应接口 wx.startRecord
        // writePhotosAlbum 是否授权保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum
        // camera 是否授权摄像头，对应[camera]((camera)) 组件
        // bluetooth 是否授权蓝牙，对应接口 wx.openBluetoothAdapter、wx.createBLEPeripheralServer
        // addPhoneContact 是否添加通讯录联系人，对应接口 wx.addPhoneContact
        // addPhoneCalendar 是否授权系统日历，对应接口 wx.addPhoneRepeatCalendar、wx.addPhoneCalendar
        console.log(res.subscriptionsSetting)
        // if (!res.subscriptionsSetting?.mainSwitch) {
        //   Taro.requestSubscribeMessage({
        //     tmplIds: ['9u4ItXlg8fTCfF8i8hmtygLmW94yH46I8nrBCihcnJE'],
        //     success(res) {
        //       console.log(res, 'res')
        //     },
        //     complete(res) { console.log(res, 'complete') }
        //   })
        // } else {
        //   Taro.atMessage({
        //     message: '已经获取过了',
        //     type: 'info',
        //   })
        // }
        Taro.requestSubscribeMessage({
          tmplIds: ['9u4ItXlg8fTCfF8i8hmtygLmW94yH46I8nrBCihcnJE'],
          success(res) {
            console.log(res, 'res')
          },
          complete(res) { console.log(res, 'complete') }
        })
      }
    })
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
          <View className='list' onClick={() => this.jumpUrl('/pages/moduleA/pages/commonManager/index')}>
            <View className='item-msg'>添加共同管理人</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View className='list' onClick={() => this.jumpUrl('/pages/moduleA/pages/tanantRules/index')}>
            <View className='item-msg'>租户须知</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View className='list' onClick={() => this.jumpUrl('/pages/moduleA/pages/share/index')}>
            <View className='item-msg'>推荐给好友</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View className='list' onClick={() => this.jumpUrl('/pages/moduleA/pages/about/index')}>
            <View className='item-msg'>关于我们</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View className='list' onClick={this.subscribeMessage}>
            <View className='item-msg'>获取消息推送权限</View>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <AtMessage />
        </View>
      </View>
    )
  }
}

export default My