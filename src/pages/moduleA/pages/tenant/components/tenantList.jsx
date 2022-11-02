import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Item from './item.jsx'
import Empty from './empty.jsx'


export default (props) => {
  return (
    <View className="tenant-list">
      <View className="tenant-search-box">
        <Text>逾期</Text>
        <Text>提醒交租</Text>
        <Text>已交租</Text>
        <Text>按收租时间</Text>
      </View>
      <View className="tenant-list-box">
        {/* <Empty/> */}
        <Item/>
        <Item/>
      </View>
    </View>
  )
}