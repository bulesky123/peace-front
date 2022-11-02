import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  return (
    <View className="history-tenant-box">
      <View className="tenant-head">
        <View className="logo"></View>
        <View className="head-des">
          <View className="tenant-name">
            <Text className="name">红木林南区-1号楼102</Text>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View className="tenant-phone">
            <Text>张悦</Text>
          </View>
        </View>
      </View>
      <View className="tenant-head">
        <View className="logo"></View>
        <View className="head-des">
          <View className="tenant-name">
            <Text className="name">红木林南区-1号楼102</Text>
            <AtIcon value='chevron-right' color='#ccc'></AtIcon>
          </View>
          <View className="tenant-phone">
            <Text>张悦</Text>
          </View>
        </View>
      </View>
    </View>
  )
}