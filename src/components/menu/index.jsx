import React, { useState, useEffect } from 'react'
import { View } from "@tarojs/components"
import './index.less'

export default (props) => {
  const { data = [1, 2], style } = props
  return (
    <View className='menu-list' style={style} onClick={props.onClick}>
      {
        data.map((item, index) => (
          <View className='menu-item' key={index} onClick={item.onClick}>{item.label}</View>
        ))
      }
    </View>
  )
}