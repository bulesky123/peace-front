import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  return (
    <View className="house-item">
      <View className="item-left">
        <View className="item-title">{ props.name || '红木林南1号楼'}</View>
        <View className="item-tips">共{props.roomCount || 0}间 | 闲置<Text className="num">{props.emptyRoomCount || 0}</Text>间</View>
      </View>
      <View className="item-right">
        <View className="item-opts">...</View>
        <View className="item-zz"><Text>去招租</Text><AtIcon value='chevron-right' color='#ccc'></AtIcon></View>
      </View>
    </View>
  )
}