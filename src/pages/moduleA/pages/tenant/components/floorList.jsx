import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Item from './floorItem.jsx'


export default (props) => {
  return (
    <View className="floor-list-box">
      <Item />
    </View>
  )
}