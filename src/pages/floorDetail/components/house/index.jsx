import React from "react";
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import more from '../../images/more.png'
import './index.less'


export default () => {
  const goDetail = () => {
    Taro.navigateTo({
      url: '/pages/houseDetail/index'
    })
  }
  return (
    <View className="item-list" onClick={goDetail}>
      <View className="item width60">
        <Text className="item-icon colorRed">闲</Text>
      </View>
      <View className="item">
        <View className="item-title">1号楼105</View>
        <View className="item-tips">房租0元/期</View>
      </View>
      <View className="item width70">
        <View className="item-more"><Image className="more" src={more} /></View>
        <View className="item-opts">去招租<AtIcon value='chevron-right' color='#ccc' /></View>
      </View>
    </View>
  )
}