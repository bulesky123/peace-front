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
          <View className="secoud">入住日期：2022.07.01</View>
        </View>
        <View className="item-right">
          <View>租 期：一年</View>
          <View className="secoud">到租日期：2023.06.30</View>
        </View>
      </View>
      <View className="item-opts">去续约 <AtIcon value='chevron-right' color='#2154F4'></AtIcon></View>
    </View>
  )
}