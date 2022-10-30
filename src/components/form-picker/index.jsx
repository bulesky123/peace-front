import React, { useState, useEffect } from 'react'
import { View, Text, Picker } from "@tarojs/components"
import { AtIcon } from 'taro-ui'

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
    setState(state)
  }, [state])
  const handlChange = (e) => {
    const value = range[e.detail.value]
    setState(value)
    onChange(value)
  }
  return (
    <View className='input-item'>
      <Text className='input-label'>{lable}</Text>
      <Picker
        className='input-test'
        {...props}
        placeholder={placeholder}
        mode='selector'
        range={range}
        onChange={handlChange}
      >
        <View className='picker'>
          {stateValue} {hasIcon && <AtIcon value='chevron-right' size='20'></AtIcon>}
        </View>
      </Picker>
    </View>
  )
}