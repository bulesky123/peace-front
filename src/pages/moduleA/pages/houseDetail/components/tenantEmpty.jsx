import React from "react";
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import TenantItem from './tenantItem.jsx'
import addIcon from '../images/add.png'
import empty from '../images/empty.png'
import './tenant.less'

export default (props) => {
  const { roomId } = props
  const jumpUrl = (url) => {
    Taro.navigateTo({
      url: `url?roomId=${id}`
    })
  }
  return (
    <View className="empty-box">
      <View className="empty-image-box">
        <View>
          <Image className="img-empty" src={empty} />
          <View className="empty-tips">还没有租客，去招租</View>
        </View>
      </View>
      <View className="empty-btn-box">
        <AtButton
          className='btn yuding'
          type='default'
          size='small'
          onClick={() => jumpUrl('/pages/moduleA/pages/reserveRoom/index')}
        >预定房间</AtButton>
        <AtButton
          className='btn'
          type="primary"
          size='small'
          onClick={() => jumpUrl('/pages/moduleA/pages/addTanant/index')}
        >租客入住</AtButton>
      </View>
    </View>
  )
}