import Taro from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addName } from '../in/redux'
import { AtButton, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import PModal from './components/phoneModal'
import './index.less'
import bg_msg from './images/bg_msg.png'
import fwgl from './images/fwgl.png'
import zkgl from './images/zkgl.png'
import sdcb from './images/sdcb.png'
import qftz from './images/qftz.png'
import notice from './images/notice.png'
import banner from './images/banner.png'
import zd from '../../assets/images/shequ.png'
import fb from './images/fb.png'
import zz from './images/zz.png'
import gb from './images/gb.png'

@connect(
  state => ({
    headImageUrl: state.in.headImageUrl,
    nicknameFlag: state.in.nicknameFlag,
    mobileFlag: state.in.mobileFlag,
  }),
  dispatch => bindActionCreators({
    addName,
  }, dispatch),
)
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
    }
    this.getUserInfo = this.getUserInfo.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  getUserInfo() {
    const that = this
    if (!this.props.nicknameFlag) {
      Taro.getUserProfile({
        desc: '用于完善资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: async (res) => {
          await that.props.addName({
            headImageUrl: res.userInfo.avatarUrl,
            nickName: res.userInfo.nickName,
          })
          !that.props.mobileFlag && that.setState({ isOpened: true })
        },
        fail: (res) => {
          console.log(res, '-----')
        }
      })
      return
    }
    if (!this.props.mobileFlag) {
      that.setState({ isOpened: true })
    }
  }
  handleClose() {
    this.setState({ isOpened: false })
  }
  jumpUrl(url) {
    if (this.props.mobileFlag && this.props.nicknameFlag) {
      Taro.navigateTo({
        url
      })
    }
  }
  render() {
    return (
      <React.Fragment>
        <View className='container' onClick={this.getUserInfo}>
        <View className='container-bg'>
          <Image className='msg' src={bg_msg} />
          <View className='msg-tips'>智慧公寓租房管理服务工具</View>
        </View>
        <View className='content'>
          <View className='content-list'>
            <View className='item' onClick={() => this.jumpUrl('/pages/house/index')}>
              <Image className='item-bg' src={fwgl} />
              <View className='item-msg-box'>
                <View className='item-title'>房屋管理</View>
                <View className='item-dsc'>管理所有的房间</View>
              </View>
              </View>
            <View className='item'>
              <Image className='item-bg' src={zkgl} />
              <View className='item-msg-box'>
                <View className='item-title'>租客管理</View>
                <View className='item-dsc'>管理所有的租客</View>
              </View>
            </View>
            <View className='item'>
              <Image className='item-bg' src={sdcb} />
              <View className='item-msg-box'>
                <View className='item-title'>水电抄表</View>
                <View className='item-dsc'>集中抄表 一键发送</View>
              </View>
            </View>
            <View className='item'>
              <Image className='item-bg' src={qftz} />
              <View className='item-msg-box'>
                <View className='item-title'>群发通知</View>
                <View className='item-dsc'>群发通知 方便省心</View>
              </View>
            </View>
          </View>
          <View className='notice-box'>
            <View>
              <Image className='notice-img' src={notice} />
              系统通知系统通知系统通知系统通知系统…
              <View className='notice-link'>详情</View>
            </View>
          </View>
          <View className='banner-box'>
            <Image src={banner} className="banner" />
          </View>
          <View className='reminders'>
            <View className='title'>提醒事项</View>
            <View className='box'>
              <View className='item'>
                <Image className='bg' src={zd} />
                <View className='tips'>到期账单</View>
              </View>
              <View className='item'>
                <Image className='bg' src={zd} />
                <View className='tips'>逾期账单</View>
              </View>
              <View className='item'>
                <Image className='bg' src={zd} />
                <View className='tips'>空房汇总</View>
              </View>
              <View className='item'>
                <Image className='bg' src={zd} />
                <View className='tips'>待抄水电</View>
              </View>
              <View className='item'>
                <Image className='bg' src={zd} />
                <View className='tips'>租期到期</View>
              </View>
              <View className='item'>
                <Image className='bg' src={zd} />
                <View className='tips'>待确认收款</View>
              </View>
              <View className='item'>
                <Image className='bg' src={zd} />
                <View className='tips'>租客报修</View>
              </View>
              
            </View>
          </View>
          <View className='reminders tools'>
            <View className='title'>招租工具</View>
            <View className='tools-box'>
              <View className='tools-item'><Image className='tools-img' src={fb} /></View>
              <View className='tools-item'><Image className='tools-img' src={zz} /></View>
              <View className='tools-item'><Image className='tools-img' src={gb} /></View>
            </View>
          </View>
          <View className='reminders todo'>
            <View className='title'>待办事项</View>
            <View className='todo-box'></View>
          </View>
        </View>
      </View>
      <PModal isOpened={this.state.isOpened} handleClose={this.handleClose} />
      </React.Fragment>
    )
  }
}
export default Home
