import React, { useState } from "react";
import { View, Text, Image, Button } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Item from './item.jsx'
import Empty from './empty.jsx'


export default (props) => {
  const { 
    list = [],
    getList = () => null
  } = props
  const [active, setActive] = useState(1)
  const config = [
    {
      key: 1,
      name: '逾期'
    },
    {
      key: 2,
      name: '提醒交租'
    },
    {
      key: 3,
      name: '已交租'
    },
    {
      key: 4,
      name: '按收租时间'
    },
  ]
  const handleClick = (key) => {
    setActive(key)
    getList('currentList', { conditionType: key })
  }
  return (
    <View className="tenant-list">
      <View className="tenant-search-box">
        {
          config.map(item => (
            <Text onClick={() => handleClick(item.key)} key={item.key}>{item.name}</Text>
          ))
        }
      </View>
      <View className="tenant-list-box">
        {
          Array.isArray(list) && list.length > 0 ?
          list.map(item => (
              <Item
                key={item.id}
                {...item}
              />
          )) : <Empty/>
        }
      </View>
    </View>
  )
}