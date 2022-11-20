import React from "react";
import { View, Text, Image } from '@tarojs/components'
import editImage from '../images/edit.png'


export default (props) => {
  const { emptyRoomCount, roomCount, tenantCount, name } = props
  return (
    <View className='head'>
      <View className='head-title'>
        <Text className='title'>{name}</Text>
        <Image className='edit' src={editImage} />
      </View>
      <View className='house-type'>村屋/出租屋</View>
      <View className='head-box'>
        <View className='head-item'>
          <View className='num'>{roomCount || 0}</View>
          <View className='tips'>总房间数</View>
        </View>
        <View className='head-item'>
          <View className='num'>{emptyRoomCount || 0}</View>
          <View className='tips'>闲置房间</View>
        </View>
        <View className='head-item'>
          <View className='num'>{tenantCount || 0}</View>
          <View className='tips'>租客人数</View>
        </View>
      </View>
    </View>
  )
}