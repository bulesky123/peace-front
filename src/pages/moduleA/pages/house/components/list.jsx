import React, { useState } from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { delHouse } from '@/api/house'
import Tips from './tips'


export default (props) => {
  const { houseId, name, roomCount, emptyRoomCount, getHouseList = () => null } = props
  const delteFun = async () => {
    await delHouse(houseId)
    getHouseList()
  }
  const data = [
    {
      label: '删除',
      onClick: delteFun
    }
  ]
  return (
    <View className='house-item'>
      <View className='item-left'>
        <View className='item-title'>{name || '红木林南1号楼'}</View>
        <View className='item-tips'>共{roomCount || 0}间 | 闲置<Text className='num'>{emptyRoomCount || 0}</Text>间</View>
      </View>
      <View className='item-right'>
        <View className='item-opts'><Tips data={data}>...</Tips></View>
        <View className='item-zz' onClick={props.onClick}><Text>去招租</Text><AtIcon value='chevron-right' color='#ccc'></AtIcon></View>
      </View>
    </View>
  )
}