import React from "react";
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { delRoom } from '@/api/house'
import Tips from '../../../house/components/tips'
import more from '../../images/more.png'
import './index.less'


export default (props) => {
  const {
    id,
    name,
    rentAmount, // 租金
    rentCount, // 租客数量
    roomStatus, // 闲:100 预订:200 住：300
    getList = () => null,
  } = props
  const goDetail = () => {
    Taro.navigateTo({
      url: `/pages/moduleA/pages/houseDetail/index?roomId=${id}`
    })
  }
  const delteFun = async () => {
    await delRoom({
      roomId: id,
    })
    getList()
  }
  const checkOutFun = async () => {
    Taro.navigateTo({
      url: `/pages/moduleA/pages/houseDetail/index?roomId=${id}`
    })
  }
  const statusMap = {
    1: {
      des: '闲',
      class: 'colorX'
    },
    2: {
      des: '定',
      class: 'colorRed'
    },
    3: {
      des: '住',
      class: 'colorRed'
    },
  }
  const data = roomStatus == 1 ? [
    {
      label: '删除',
      onClick: delteFun
    }
  ] : [
    {
      label: '退租',
      onClick: checkOutFun
    }
  ]
  return (
    <View className="item-list">
      <View className="item width60" onClick={goDetail}>
        <Text className={`item-icon ${statusMap[roomStatus].class}`}>{statusMap[roomStatus].des}</Text>
      </View>
      <View className="item item-content" onClick={goDetail}>
        <View className="item-title">{name}</View>
        <View className="item-tips">房租{rentAmount}元/期</View>
      </View>
      <View className="item width70">
        <View className="item-more"><Tips data={data}><Image className="more" src={more} /></Tips></View>
        <View className={rentCount > 0 ? 'item-opts' : 'item-opts item-opt-color'}>{rentCount > 0 ? `${rentCount}租客` : '去招租'}<AtIcon value='chevron-right' color='#ccc' /></View>
      </View>
    </View>
  )
}