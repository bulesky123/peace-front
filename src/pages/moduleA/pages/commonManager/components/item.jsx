import React from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Tips from '../../house/components/tips'
import more from '../../floorDetail/images/more.png'


export default (props) => {
  const {
    name,
    mobile,
    title,
    delet = () => null,
    edit = () => null,
  } = props
  const delteFun = () => {
    delet()
  }
  const editFun = () => {
    edit()
  }
  const data = [
    {
      label: '编辑',
      onClick: editFun
    },
    {
      label: '删除',
      onClick: delteFun
    }
  ]
  return (
    <View className="item">
      <View className="item-left">
        <View className="item-name">
          <Text className="item-name">{title}</Text>
          <View className='item-right'>
            <Tips data={data}>
              <Image className="more" src={more} />
            </Tips>
          </View>
        </View>
        <View className="item-content">姓名：{name}</View>
        <View className="item-content">电话：{mobile}</View>
      </View>
    </View>
  )
}