import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  return (
    <View className="list-item">
      <View className="item-title">红木林1号楼101</View>
      <View className="item-content">
        <View className="item-left">
          <View>租 客：张长征</View>
          <View className="secoud">抄 表：已抄表</View>
        </View>
        <View className="item-right">
          <View>交租日：10日</View>
          <View className="secoud">账 单：<Text className="orange">已发送</Text></View>
        </View>
      </View>
      <View className="item-opts">提醒交租 <AtIcon value='chevron-right' color='#2154F4'></AtIcon></View>
    </View>
  )
}