import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import more from '../../floorDetail/images/more.png'


export default (props) => {
  return (
    <View className="item">
      <View className="item-left">
        <Text className="item-name">管理人1</Text>
        <Text>18621876737</Text>
      </View>
      <View className="item-right"><Image className="more" src={more} /></View>
    </View>
  )
}