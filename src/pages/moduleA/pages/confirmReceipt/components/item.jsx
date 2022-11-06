import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  return (
    <View className="list-item">
      <View className="item-title">红木林1号楼101</View>
      <View className="item-content">
        <View>租 客：张长征 | 同住人姓名</View>
        <View>交租日：10日</View>
        <View>发送账单日期：2022.07.10</View>
        <View>账单总金额：1689元</View>
      </View>
      <View className="item-opts"><Text className="opts-btn">确认收款</Text></View>
    </View>
  )
}