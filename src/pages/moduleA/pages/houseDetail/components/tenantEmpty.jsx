import React from "react";
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import TenantItem from './tenantItem.jsx'
import addIcon from '../images/add.png'
import empty from '../images/empty.png'
import './tenant.less'

export default () => {
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
        >预定房间</AtButton>
        <AtButton
          className='btn'
          type="primary"
          size='small'
        >租客入住</AtButton>
      </View>
    </View>
  )
}