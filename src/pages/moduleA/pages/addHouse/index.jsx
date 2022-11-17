import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Switch } from "@tarojs/components"
import { AtIcon, AtInput, AtButton, AtModal, AtModalHeader, AtModalContent } from 'taro-ui'
import { FormPicker } from '@/components'
import Tools from '@/utils/tools'
import { addHouse } from '@/api/house'
import Fold from './components/fold'
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
    const { floorNum , roomNum, roomNamePrefix } = this.state
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
  render() {
    const { rooms, isOpened, customRoomNumber } = this.state
    const chooseRoom = this.chooseRooms()
    return (
      <View>
        <View className='add-house-container'>
          <View className='input-item'>
            <Text className='input-label'>房屋名称</Text>
            <Input
              value={this.state.name}
              onInput={(e) => this.handleChange('name', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>看房联系人</Text>
            <Input
              value={this.state.contactName}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('contactName', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>联系电话</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
          </View>
          <FormPicker
            lable="性别"
            placeholder='请输入（必填）'
            range={['男士', '女士']}
            onChange={(val) => this.handleChange('contactSex', val)}
            state={this.state.contactSex}
          />
          <FormPicker
            lable="所属地区"
            placeholder='请输入（必填）'
            range={['男', '女']}
            onChange={(val) => this.handleChange('area', val)}
            state={this.state.area}
          />
          <FormPicker
            lable="位置(招租用)"
            placeholder='请输入（必填）'
            range={['男', '女']}
            onChange={(val) => this.handleChange('address', val)}
            state={this.state.address}
          />
          <FormPicker
            lable="房屋类型"
            placeholder='请输入（必填）'
            range={['村屋/自建公寓', '市区/独栋品质社区','小区/公寓', '其他类型']}
            onChange={(val) => this.handleChange('houseType', val)}
            state={this.state.houseType}
          />
          <FormPicker
            lable="电梯"
            placeholder='请输入（必填）'
            range={['有', '无']}
            onChange={(val) => this.handleChange('ielevatorStatus', val)}
            state={this.state.ielevatorStatus}
          />
          <FormPicker
            lable="供暖"
            placeholder='请输入（必填）'
            range={['自产暖', '集中供暖', '无暖气']}
            onChange={(val) => this.handleChange('heatingType', val)}
            state={this.state.heatingType}
          />
          <View className='input-item'>
            <Text className='input-label'>总楼层</Text>
            <Input
              value={this.state.floorNum}
              className='input-test'
              type="number"
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('floorNum', e.detail.value)}
              onBlur={this.blur}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>每层房间数</Text>
            <Input
              value={this.state.roomNum}
              className='input-test'
              type='number'
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('roomNum', e.detail.value)}
              onBlur={this.blur}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>房号前缀</Text>
            <Input
              value={this.state.roomNamePrefix}
              className='input-test'
              type='text'
              placeholder='选填，如填1号楼，则房号为1号楼101'
              onInput={(e) => this.handleChange('roomNamePrefix', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>房屋热水计量收费</Text>
            <Switch
              value={this.state.hotWaterFlag}
              className='input-test'
              checked
              onChange={(e) => this.handleChange('hotWaterFlag', e.detail.value)}
            />
          </View>
        </View>
        <View className='house-list'>
          <Text className='house-head'>房屋列表<Text className='tips'>(可以自主选择房间号)</Text></Text>
          <Text className='house-num'>已选{chooseRoom}间</Text>
        </View>
        <View className='house-container'>
          {
            rooms.map(item => (
              <Fold
                key={item.flod}
                {...item}
                addRoom={this.addRoom}
                delRoom={this.delRoom}
              />
            ))
          }
          <View className='add-house-btn'>
            <AtButton onClick={this.onSubmit} type='default' size='small'>保存</AtButton>
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