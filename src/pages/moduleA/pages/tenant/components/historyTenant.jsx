import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  const { list} = props
  return (
    <View className="history-tenant-box">
      {
        Array.isArray(list) && list.length > 0 &&
        list.map((item, index) => (
          <View className="tenant-head" key={index}>
            <View className="logo"></View>
            <View className="head-des">
              <View className="tenant-name">
                <Text className="name">{item.name}</Text>
                <AtIcon value='chevron-right' color='#ccc'></AtIcon>
              </View>
              <View className="tenant-phone">
                <Text>{item.tenantName}</Text>
              </View>
            </View>
          </View>
        ))
      }
    </View>
  )
}