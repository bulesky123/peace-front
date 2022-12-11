import React, { useState, useEffect } from 'react'
import { View, Text, Picker } from "@tarojs/components"
import { AtIcon } from 'taro-ui'
import Tools from '@/utils/tools'
import './index.less'

export default (props) => {
  const [stateValue, setState] = useState('')
  const {
    lable = 'lable',
    placeholder = '请输入（必填）',
    range = [],
    onChange = () => null,
    hasIcon = true,
    state,
  } = props
  useEffect(() => {
    const obj = range.filter((i) => {
      if (Tools.isObject(i)) {
        return i => i.value == state
      }
      return i == state
    })[0]
    const newState = Tools.isObject(obj) ? obj.lable : obj
    setState(newState)
  }, [])
  const handlChange = (e) => {
    const obj = range[e.detail.value]
    if (Tools.isObject(obj)) {
      setState(obj?.lable)
      onChange(obj?.value)
      return
    }
    setState(obj)
    onChange(obj)
  }
  const realRange = range.map((item) => {
    if (Tools.isObject(item)) {
      return item.lable
    }
    return item
  })
  return (
    <View className='input-item'>
      <Text className='input-label'>{lable}</Text>
      <Picker
        className='input-test'
        {...props}
        placeholder={placeholder}
        mode='selector'
        range={realRange}
        onChange={handlChange}
      >
        <View className='picker'>
          {stateValue} {hasIcon && <AtIcon value='chevron-right' size='20'></AtIcon>}
        </View>
      </Picker>
    </View>
  )
}