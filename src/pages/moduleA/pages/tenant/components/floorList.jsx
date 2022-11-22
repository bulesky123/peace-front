import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Item from './floorItem.jsx'


export default (props) => {
  const { list = [] } = props
  return (
    <View className="floor-list-box">
      {
        Array.isArray(list) && list.length > 0 &&
        list.map(item => (
          <Item
            key={item.houseId}
            {...item}
          />
        ))
      }
    </View>
  )
}