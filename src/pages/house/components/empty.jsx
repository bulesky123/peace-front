import React from "react";
import { View, Image } from '@tarojs/components'
import nullImg from '../images/null.png'
import '../index.less'


export default () => {
  return (
    <View className="empty">
      <Image className="empty-img" src={nullImg} />
      <View className="empty-tips">无添加的房屋</View>
    </View>
  )
}