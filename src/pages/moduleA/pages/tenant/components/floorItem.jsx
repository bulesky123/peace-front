import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  const {
    emptyRoomCount,
    houseId,
    liveCount,
    name,
    roomCount,
    tenantCount,
  } = props
  return (
    <View className="house-item">
      <View className="item-left">
        <View className="item-title">{ name}</View>
        <View className="item-tips">
          共{roomCount}间 | 闲置
          <Text className="num">{emptyRoomCount}</Text>间  | {tenantCount}租客</View>
      </View>
      <View className="item-right">
        <View className="item-zz"><Text className="item-opts">去招租</Text><AtIcon value='chevron-right' color='#ccc'></AtIcon></View>
      </View>
    </View>
  )
}