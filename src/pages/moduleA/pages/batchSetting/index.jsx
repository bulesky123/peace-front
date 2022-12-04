import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Image } from "@tarojs/components"
import { AtIcon, AtInput, AtButton, } from 'taro-ui'
import Tools from '@/utils/tools'
import { addHouse } from '@/api/house'
import room_icon from './images/room.png'
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
        <View className='head-box'>
          <View className="head">
            <Image className="img" src={room_icon} />
            红木林南1号楼-102
          </View>
          <View className='head-tips'>
            此页面的数据保存后会同步到本栋楼的每个房,请慎重填写，如需修改这些数据，请回到此页面修改
          </View>
        </View>
        <View className='add-house-container'>
          <View className='input-item'>
            <Text className='input-label'>水单价</Text>
            <Input
              value={this.state.name}
              onInput={(e) => this.handleChange('name', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入水单价'
            />
            <Text className='danwei'>元/吨</Text>
          </View>
          <View className='input-item'>
            <Text className='input-label'>电单价</Text>
            <Input
              value={this.state.contactName}
              className='input-test'
              type='text'
              placeholder='承租人电单价'
              onInput={(e) => this.handleChange('contactName', e.detail.value)}
            />
            <Text className='danwei'>元/度</Text>
          </View>
          <View className='input-item'>
            <Text className='input-label'>热水单价</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入热水单价'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
            <Text className='danwei'>元/吨</Text>
          </View>
          <View className='input-item'>
            <Text className='input-label'>卫生费</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入金额，如无则输入0'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
            <Text className='danwei'>元</Text>
          </View>
          <View className='input-item'>
            <Text className='input-label'>管理费</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入金额，如无则输入0'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
            <Text className='danwei'>元</Text>
          </View>
          <View className='input-item'>
            <Text className='input-label'>其他</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入金额，如无则输入0'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
            <Text className='danwei'>元</Text>
          </View>
        </View>
        <View className='house-container'>
          <View className='lease-container'>默认起租期</View>
          <View className='box'>
            <Text className='active'>一季度</Text>
            <Text>半年</Text>
            <Text>一年</Text>
            <Text>两年</Text>
          </View>
          <View className='add-house-btn'>
            <AtButton className='btn' onClick={this.onSubmit} type="default" size='small'>确定</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
export default AddHouse