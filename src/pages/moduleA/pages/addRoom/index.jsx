import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Image } from "@tarojs/components"
import { AtButton } from 'taro-ui'
import Tools from '@/utils/tools'
import { addRoom } from '@/api/house'
import room_icon from './images/room.png'
import './index.less'


class AddHouse extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      roomName: '',
      layerNum: '',
    }
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  async onSubmit() {
    // houseId
    const houseId = Tools.getParameterByName('houseId') || 1
    const { roomName, layerNum } = this.state
    await addRoom({
      houseId,
      roomName,
      layerNum,
    })
    Taro.navigateBack({
      delta: 1
    })
  }
  render() {
    return (
      <View>
        <View className="head">
          <Image className="img" src={room_icon} />
          红木林南1号楼
        </View>
        <View className='add-house-container'>
          <View className='input-item'>
            <Text className='input-label'>房号</Text>
            <Input
              value={this.state.roomName}
              onInput={(e) => this.handleChange('roomName', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入房号'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>楼层</Text>
            <Input
              value={this.state.layerNum}
              className='input-test'
              type='text'
              placeholder='请输入房间所在的楼层'
              onInput={(e) => this.handleChange('layerNum', e.detail.value)}
            />
          </View>
        </View>
        <View className='house-container'>
          <View className='add-house-btn'>
            <AtButton className="btn" onClick={this.onSubmit} type='default' size='small'>保存</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
export default AddHouse