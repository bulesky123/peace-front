import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  return (
    <View className="allWaitList" onClick={props.onClick}>
      <View className="list-item">
        <View className="item-title">红木林1号楼101</View>
        <View className="item-opts">
          <Text>去抄水电</Text>
          <Text>分享给租客</Text>
        </View>
      </View>
      <View className="list-item">
        <View className="item-title">红木林1号楼101</View>
        <View className="item-opts">
          <Text>去抄水电</Text>
          <Text>分享给租客</Text>
        </View>
      </View>
    </View>
  )
}