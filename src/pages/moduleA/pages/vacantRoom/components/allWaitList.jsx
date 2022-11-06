import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  return (
    <View className="allWaitList" onClick={props.onClick}>
      <View className="list-item">
        <View className="item-title">红木林1号楼101</View>
        <View className="item-opts">
          <Text>添加租客</Text>
          <Text>去招租</Text>
          <Text>分享空房</Text>
        </View>
      </View>
      <View className="list-item">
        <View className="item-title">红木林1号楼101</View>
        <View className="item-opts">
          <Text>添加租客</Text>
          <Text>去招租</Text>
          <Text>分享空房</Text>
        </View>
      </View>
    </View>
  )
}