import React from "react";
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import '../index.less'


export default () => {
  return (
    <View className="tenant-container">
      <View className="tenant-head">
        <View className="logo"></View>
        <View className="head-des">
          <View className="tenant-name">
            <Text className="name">张嘉佳</Text>
            <Text className="icon-btn weixin">绑定微信</Text>
            <Text className="icon-btn phone">致电租客</Text>
          </View>
          <View className="tenant-phone">18510806732</View>
        </View>
      </View>
      <View className="tenant-content">
        <View>入住日期：2022.07.22</View>
        <View>交租日期：22日</View>
        <View>押 金：1000元</View>
      </View>
      <View className="tenant-tips">
        <View className="time-tips">
          <View>上次交租日期：2022.07.22</View>
          <View>本次收租日期：2022.08.22</View>
        </View>
        <View className="tenant-state">已逾期去催租</View>
      </View>
    </View>
  )
}