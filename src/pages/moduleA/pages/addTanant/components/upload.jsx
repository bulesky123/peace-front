import React from "react";
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './upload.less'


export default (props) => {
  const {
    style = {},
    tips,
    upload = () => null,
  } = props
  return (
    <View style={style} onClick={upload}>
      <View className="upload-box">
        <View>
          <View className="image-tips"><AtIcon value='add' size='30' color='#ccc'></AtIcon></View>
          {tips && <View className="tips">{tips}</View>}
        </View>
      </View>
    </View>
  )
}