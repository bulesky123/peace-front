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
      contactSex: 1, // 性别
      floorNum: '', // 楼层数
      heatingType: 1, // 供暖类型
      hotWaterFlag: 1, // 热水开关
      houseType: 1, //
      elevatorStatus: 1, // 电梯状态：是/否
      layerList: '',
      roomNamePrefix: '', // 房间名称前缀
      roomNum: '', // 房间数
      rooms: [],
      isOpened: false,
      customRoomNumber: '', // 自定义房间号
      activeFloor: '', // 自定义房间的楼层
    }
  }
  delRoom(floor, room) {
    const { rooms = [] } = this.state
    const newRooms = rooms.map(item => {
      if (item.floor == floor) {
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
  addRoom(floor) {
    console.log(2222)
    this.setState({
      isOpened: !this.state.isOpened,
      activeFloor: floor,
    })
  }
  addRoomFun() {
    const { activeFloor, customRoomNumber, rooms } = this.state
    const newRooms = rooms.map(item => {
      if (item.floor == activeFloor) {
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
      let arr = Array.from({ length: floorNum }, (v, k) => ({ floor: k + 1 }))
        .map(item => {
          return {
            floor: item.floor,
            rooms: Array.from({ length: roomNum }, (v, k) => ({
              value: `${item.floor}${Tools.getZero(k + 1, Tools.getPlace(roomNum))}`,
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
    let num = 0
    const length = rooms.length || 0
    for (let i = 0; i < length; i++) {
      const len = rooms[i]?.rooms?.filter(item => !item.disable).length
      num = num + len
    }
    return num
  }
  async onSubmit() {
    const {
      rooms,
      address,
      area,
      contactMobile,
      contactName,
      contactSex,
      floorNum,
      heatingType,
      hotWaterFlag,
      houseType,
      elevatorStatus,
      name,
      roomNamePrefix,
      roomNum,
    } = this.state
    const params = {
      address,
      area,
      contactMobile,
      contactName,
      contactSex,
      elevatorStatus,
      floorNum,
      heatingType,
      hotWaterFlag: hotWaterFlag ? 1 : 0,
      houseType,
      layerList: rooms.map(item => {
        item.rooms = item.rooms?.filter(i => !i.disable).map(i => i.value)
        return item
      }),
      name,
      roomNamePrefix,
      roomNum,
    }
    await addHouse(params)
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
            range={[{ lable: '男士', value: 1 }, { lable: '女士', value: 2 }]}
            onChange={(val) => this.handleChange('contactSex', val)}
            state={this.state.contactSex}
          />
          <View className='input-item'>
            <Text className='input-label'>所属地区</Text>
            <Input
              value={this.state.area}
              onInput={(e) => this.handleChange('area', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
            />
          </View>
          {/* <FormPicker
            lable="所属地区"
            placeholder='请输入（必填）'
            range={['男', '女']}
            onChange={(val) => this.handleChange('area', val)}
            state={this.state.area}
          /> */}
          <View className='input-item'>
            <Text className='input-label'>位置(招租用)</Text>
            <Input
              value={this.state.address}
              onInput={(e) => this.handleChange('address', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
            />
          </View>
          {/* <FormPicker
            lable="位置(招租用)"
            placeholder='请输入（必填）'
            range={['男', '女']}
            onChange={(val) => this.handleChange('address', val)}
            state={this.state.address}
          /> */}
          <FormPicker
            lable="房屋类型"
            placeholder='请输入（必填）'
            range={[{
              lable: '村屋/自建公寓', value: 1
            }, {
              lable: '市区/独栋品质社区', value: 2
            }, {
              lable: '小区/公寓', value: 3
            }, { lable: '其他类型', value: 4 }
            ]}
            onChange={(val) => this.handleChange('houseType', val)}
            state={this.state.houseType}
          />
          <FormPicker
            lable="电梯"
            placeholder='请输入（必填）'
            range={[{ lable: '有', value: 1 }, { lable: '无', value: 0 }]}
            onChange={(val) => this.handleChange('elevatorStatus', val)}
            state={this.state.elevatorStatus}
          />
          <FormPicker
            lable="供暖"
            placeholder='请输入（必填）'
            range={[{ lable: '自产暖', value: 1 }, { lable: '集中供暖', value: 2 }, { lable: '无暖气', value: 3 }]}
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
                key={item.floor}
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
        {
          isOpened &&
          <AtModal
            isOpened={isOpened}
            onClose={() => this.setState({ isOpened: false })}
          >
            <AtModalHeader>添加房间号</AtModalHeader>
            <AtModalContent>
              {
                isOpened &&
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
              }
            </AtModalContent>
          </AtModal>
        }
      </View>
    )
  }
}
export default AddHouse