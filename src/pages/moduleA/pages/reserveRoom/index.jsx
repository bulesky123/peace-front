import Taro, { getCurrentInstance } from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Picker } from "@tarojs/components"
import { AtIcon, AtInput, AtButton, AtList, AtListItem } from 'taro-ui'
import { FormPicker } from '@/components'
import Tools from '@/utils/tools'
import { reserve } from '@/api/room.ts'
import './index.less'


class AddHouse extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      heatingCost: '', // 暖气费用
      liveDate: '2022-12-04', // 入住日期
      reserveDate: '2022-12-04', // 入住日期
      networkCost: '', // 网费
      rentAmount: '', // 租金
      reserveAmount: '', // 定金
      reserveMobile: '', // 手机号
      reserveName: '', // 姓名
      roomId: '', // 房间ID
    }
  }
  getQuery() {
    return getCurrentInstance().router.params
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  async onSubmit() {
    const { roomId } = this.getQuery()
    await reserve({ ...this.state, roomId })
    Taro.navigateTo({
      url: `/pages/moduleA/pages/houseDetail/index?roomId=${roomId}`
    })
  }
  render() {
    const { rooms, isOpened, customRoomNumber } = this.state
    return (
      <View>
        <View className='add-house-container'>
          <View className='input-item'>
            <Text className='input-label'>收取订金</Text>
            <Input
              value={this.state.reserveAmount}
              onInput={(e) => this.handleChange('reserveAmount', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入定金'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>预订人姓名</Text>
            <Input
              value={this.state.reserveName}
              className='input-test'
              type='text'
              placeholder='请输入姓名'
              onInput={(e) => this.handleChange('reserveName', e.detail.value)}
            />
          </View>
          <View className='input-item' style={{ borderBottom: 'none' }}>
            <Text className='input-label'>预订人电话</Text>
            <Input
              value={this.state.reserveMobile}
              className='input-test'
              type='text'
              placeholder='请输入电话'
              onInput={(e) => this.handleChange('reserveMobile', e.detail.value)}
            />
          </View>
          <Picker mode='date' onChange={(e) => this.handleChange('reserveDate', e.detail.value)}>
            <AtList>
              <AtListItem title='收取订金日期' extraText={this.state.reserveDate} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={(e) => this.handleChange('liveDate', e.detail.value)}>
            <AtList>
              <AtListItem title='入住日期' extraText={this.state.liveDate} />
            </AtList>
          </Picker>
          <FormPicker
            lable="收租周期"
            placeholder='请选择收租周期'
            range={['一月一次', '三月一次']}
            onChange={(val) => this.handleChange('contactSex', val)}
            state={this.state.contactSex}
          />
          <View className='input-item'>
            <Text className='input-label'>租金</Text>
            <Input
              value={this.state.rentAmount}
              onInput={(e) => this.handleChange('rentAmount', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入租金'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>网费</Text>
            <Input
              value={this.state.networkCost}
              onInput={(e) => this.handleChange('networkCost', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入网费'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>暖气费<Text className='label-tips'>（只有取暖季才有）</Text></Text>
            <Input
              value={this.state.heatingCost}
              onInput={(e) => this.handleChange('heatingCost', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入单月暖气费'
            />
          </View>
        </View>
        <View className='house-container'>
          <View className='tips'>收取定金之后，房间为已订状态，如租客未入住，定金不退。此页面数据租客端会显示给租客。</View>
          <View className='add-house-btn'>
            <AtButton onClick={this.onSubmit} type="primary" size='small'>确定</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
export default AddHouse