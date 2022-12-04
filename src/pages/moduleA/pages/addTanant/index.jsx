import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Picker, Textarea } from "@tarojs/components"
import { AtIcon, AtInput, AtButton, AtModal, AtModalHeader, AtModalContent, AtList, AtListItem } from 'taro-ui'
import { FormPicker } from '@/components'
import Tools from '@/utils/tools'
import { addHouse } from '@/api/house'
import Upload from './components/upload'
import './index.less'


class AddHouse extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.delRoom = this.delRoom.bind(this)
    this.addRoom = this.addRoom.bind(this)
    this.addRoomFun = this.addRoomFun.bind(this)
    this.blur = this.blur.bind(this)
    this.state = {
      name: '', // 房屋名称
      address: '', // 地址
      area: '', // 所在区
      contactMobile: '', // 看房联系人手机号
      contactName: '', // 看房人联系人姓名
      contactSex: '', // 性别
      floorNum: '', // 楼层数
      heatingType: '', // 供暖类型
      hotWaterFlag: '', // 热水开关
      houseType: '', //
      ielevatorStatus: '', // 电梯状态：是/否
      layerList: '',
      roomNamePrefix: '', // 房间名称前缀
      roomNum: '', // 房间数
      rooms: [],
      isOpened: false,
      customRoomNumber: '', // 自定义房间号
      activeFlod: '', // 自定义房间的楼层
      dateSel: '2022-11-26',
    }
  }
  delRoom(flod, room) {
    const { rooms = [] } = this.state
    const newRooms = rooms.map(item => {
      if (item.flod == flod) {
        item.rooms.map(i => {
          if (i.value == room.value) {
            i.disable = !i.disable
          }
          return i
        })
      }
      return item
    })
    this.setState({
      rooms: newRooms,
    })
  }
  addRoom(flod) {
    this.setState({
      isOpened: !this.state.isOpened,
      activeFlod: flod,
    })
  }
  addRoomFun() {
    const { activeFlod, customRoomNumber, rooms } = this.state
    const newRooms = rooms.map(item => {
      if (item.flod == activeFlod) {
        item.rooms.push({
          value: customRoomNumber,
          disable: false,
        })
      }
      return item
    })
    this.setState({
      rooms: newRooms,
      isOpened: false,
    })
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  blur() {
    this.getRooms()
  }
  getRooms() {
    const { floorNum, roomNum, roomNamePrefix } = this.state
    if (!!floorNum && !!roomNum) {
      let arr = Array.from({ length: floorNum }, (v, k) => ({ flod: k + 1 }))
        .map(item => {
          return {
            flod: item.flod,
            rooms: Array.from({ length: roomNum }, (v, k) => ({
              value: `${item.flod}${Tools.getZero(k + 1, Tools.getPlace(roomNum))}`,
              disable: false,
            }))
          }
        })
      this.setState({
        rooms: arr,
      })
    }
  }
  chooseRooms() {
    const { rooms = [] } = this.state
    const num = rooms.length > 0 && rooms.reduce((prev, next) => {
      const prevRooms = prev.rooms.filter(i => !i.disable)
      const nextRooms = next.rooms.filter(i => !i.disable)
      return prevRooms.length + nextRooms.length
    })
    return num
  }
  async onSubmit() {
    await addHouse(this.state)
    console.log(this.state)
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  render() {
    const { rooms, isOpened, customRoomNumber } = this.state
    const chooseRoom = this.chooseRooms()
    return (
      <View>
        <View className='room-head'>红木林南1号楼-102</View>
        <View className='add-house-container'>
          <View className='house-title'>
            <View className='title'>主承租人信息</View>
            <View className='title-btn'>添加历史租客</View>
          </View>
          <View className='input-item'>
            <Text className='input-label'>姓名</Text>
            <Input
              value={this.state.name}
              onInput={(e) => this.handleChange('name', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入姓名'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>身份证号</Text>
            <Input
              value={this.state.contactName}
              className='input-test'
              type='text'
              placeholder='承租人身份证号'
              onInput={(e) => this.handleChange('contactName', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>电话</Text>
            <Input
              value={this.state.contactName}
              className='input-test'
              type='text'
              placeholder='承租人电话'
              onInput={(e) => this.handleChange('contactName', e.detail.value)}
            />
          </View>
          <View className='input-item' style={{ borderBottom: 'none' }}>
            <Text className='input-label'>身份照片</Text>
          </View>
          <View className='card-box'>
            <Upload
              tips="添加正面"
              style={{
                width: 'calc(( 100% - 4px ) / 2)',
                display: 'inline-block',
                marginRight: 4,
              }}
            />
            <Upload
              tips="添加反面"
              style={{
                width: 'calc(( 100% - 4px ) / 2)',
                display: 'inline-block',
              }}
            />
          </View>
          <View className='add-self-btn'>
            <View><AtIcon value='add-circle' size='19' color='#2154F4' /> 添加同住人</View>
          </View>
          <View className='house-title'>
            <View className='title'>租约详情</View>
          </View>
          <Picker mode='date' onChange={(e) => this.handleChange('name', e.detail.value)}>
            <AtList>
              <AtListItem title='入住日期' extraText={this.state.dateSel} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={(e) => this.handleChange('name', e.detail.value)}>
            <AtList>
              <AtListItem title='租期' extraText={this.state.dateSel} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={(e) => this.handleChange('name', e.detail.value)}>
            <AtList>
              <AtListItem title='到期日期' extraText={this.state.dateSel} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={(e) => this.handleChange('name', e.detail.value)}>
            <AtList>
              <AtListItem title='收租日' extraText={this.state.dateSel} />
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
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入租金'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>押金</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入押金'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>网费</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入网费'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
          </View>
          <View className='input-item' style={{ borderBottom: 'none' }}>
            <Text className='input-label'>添加合同照片</Text>
          </View>
          <View>
            <Upload
              style={{
                width: 'calc(( 100% - 4px ) / 2)',
                display: 'inline-block',
              }}
            />
          </View>
          <View className='input-item' style={{ borderBottom: 'none' }}>
            <Text className='input-label'>备注</Text>
          </View>
          <View>
            <Textarea
              style={{
                background: '#fff',
                minHeight: 100,
                padding: '16px 10px',
                border: '1px solid #E2E2E2',
                borderRadius: 2,
                fontSize: 18,
                color: '#05203D',
                width: '100%',
                boxSizing: 'border-box',
              }}
              autoHeight
              placeholder='备注信息，例如定金，交租日期等'
            />
          </View>
        </View>
        <View className='house-container'>
          <View className='tips'>默认提前3天提醒租客交租/房东收租</View>
          <View className='add-house-btn'>
            <AtButton onClick={this.onSubmit} type="primary" size='small'>确定</AtButton>
          </View>
        </View>
        <AtModal isOpened={isOpened}>
          <AtModalHeader>添加房间号</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              <AtInput
                name='customRoomNumber'
                type='text'
                placeholder='自定义房间号'
                border={false}
                value={customRoomNumber}
                onChange={val => this.handleChange('customRoomNumber', val)}
              />
              <View className='save-btn'>
                <AtButton onClick={this.addRoomFun} type="primary" size="small">保存</AtButton>
              </View>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}
export default AddHouse