import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  const { 
    currentRentDay,
    liveDate,
    liveFinishDate,
    roomId,
    roomName,
    upRentDay,
    tenantNameList = []
  } = props || {}
  return (
    <View className="tenant-box">
      <View className="tenant-head">
        <View className="logo"></View>
        <View className="head-des">
          <View className="tenant-name">
            <Text className="name">{roomName}</Text>
          </View>
          <View className="tenant-phone">
            <Text>18510806732</Text> 
            <Text className="icon-btn phone">致电租客</Text></View>
        </View>
      </View>
      <View className="tenant-content">
        <View className="tenant-tips">
          <View className="time-tips">
            <View>入住日：{liveDate}</View>
            <View>到租日：{liveFinishDate}</View>
          </View>
          <View className="tenant-state yuqi">已逾期去催租</View>
        </View>
        <View className="tenant-tips">
          <View className="time-tips">
            <View>上次交租日期：{upRentDay}</View>
            <View>本次收租日期：{currentRentDay}</View>
          </View>
          <View className="tenant-state">已交租</View>
        </View>
      </View>
    </View>
  )
}