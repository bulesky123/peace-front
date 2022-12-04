import React from "react";
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.less'


export default (props) => {
  const {
    title,
    total,
    showTips,
    tips,
    showTotal = true,
    style,
  } = props
  console.log(tips)
  return (
    <View className="title-container">
      <View className="title" style={style}>{title}
        {showTips && <AtIcon className="icon-help" value='help' size='19' color='#ccc' />}
      </View>
      {showTotal && <View className="title-num">总计：{total}元</View>}
    </View>
  )
}