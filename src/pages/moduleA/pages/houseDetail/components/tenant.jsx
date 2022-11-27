import React from "react";
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import TenantItem from './tenantItem.jsx'
import TenantEmpty from './tenantEmpty.jsx'
import addIcon from '../images/add.png'
import '../index.less'

export default (props) => {
  const { list } = props
  return (
    <View>
      {
        Array.isArray(list) && list.length > 0 ?
          <View>
            <TenantItem />
            <View className="add-user-box"><Image src={addIcon} />添加同住人</View>
            <View className='add-house-btn'>
              <AtButton
                className='btn'
                type='default'
                size='small'
              >退租</AtButton>
            </View>
          </View>
          : <TenantEmpty />
      }
    </View>
  )
}