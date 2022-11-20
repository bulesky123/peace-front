import React from "react";
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'


export default (props) => {
  const { 
    flod, rooms = [],
    addRoom = () => null,
    delRoom = () => null,
  } = props
  return (
    <View className="empty">
      <View className='fold-title'>{flod}层</View>
      <View className='fold-container'>
        {
          rooms.map(item => (
            <Text
              onClick={() => delRoom(flod, item)}
              key={item.value}
              className={item.disable ? 'flod-item disabled' : 'flod-item'}
            >{item.value}</Text>
          ))
        }
        <Text onClick={() => addRoom(flod)} className='flod-item add'><AtIcon value='add' size={20} color='#1846C1'></AtIcon></Text>
      </View>
    </View>
  )
}