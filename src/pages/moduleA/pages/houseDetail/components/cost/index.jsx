import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Switch, Picker, Textarea } from "@tarojs/components"
import { AtIcon, AtInput, AtButton, AtModal, AtModalHeader, AtModalContent, AtList, AtListItem } from 'taro-ui'
import { FormPicker } from '@/components'
import Tools from '@/utils/tools'
import { addHouse } from '@/api/house'
import Title from './title'
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
  render() {
    const { rooms, isOpened, customRoomNumber } = this.state
    const chooseRoom = this.chooseRooms()
    return (
      <View className='cost-content'>
        <View className='add-house-container'>
          <Title
            title="租金"
            total="+1000"
            showTips
          />
          <View className='input-item'>
            <Text className='input-label'>租金/月</Text>
            <Input
              value={this.state.name || 1000}
              onInput={(e) => this.handleChange('name', e.detail.value)}
              className='input-test'
              type='text'
              disabled
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>交租日</Text>
            <Input
              value={this.state.contactName || '20日'}
              className='input-test'
              type='text'
              disabled
              onInput={(e) => this.handleChange('contactName', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>收租周期</Text>
            <Input
              value={this.state.contactMobile || '一月一次'}
              className='input-test'
              type='text'
              disabled
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>本次收租周期</Text>
            <Input
              value={this.state.contactMobile || '2022.06.20-2022.07.1'}
              className='input-test'
              type='text'
              disabled
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
          </View>
          <View className='item-container'>
            <Title
              title="押金"
              total="+1000"
            />
            <View className='input-item'>
              <Text className='input-label'>押金</Text>
              <Input
                value={this.state.contactMobile || '+1000'}
                className='input-test'
                type='text'
                disabled
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
              />
            </View>
          </View>
          <View className='item-container'>
            <Title
              title="订金"
              total="-500"
            />
            <View className='input-item'>
              <Text className='input-label'>订金</Text>
              <Input
                value={this.state.contactMobile || '-500'}
                className='input-test'
                type='text'
                disabled
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
              />
            </View>
          </View>
          <View className='item-container'>
            <Title
              title="水费"
              total="0"
            />
            <View className='input-item'>
              <Text className='input-label'>水单价</Text>
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                disabled
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
              />
            </View>
            <View className='input-item' style={{ borderBottom: 'none' }}>
              <Text className='input-label'>水表底数</Text>
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
                placeholder="请输入数值"
              />
            </View>
            <Picker mode='date' onChange={(e) => this.handleChange('name', e.detail.value)}>
              <AtList style={{ padding: '20px 0' }}>
                <AtListItem title='抄表日期' extraText={this.state.dateSel} />
              </AtList>
            </Picker>
          </View>
          <View className='item-container'>
            <Title
              title="热水费"
              total="0"
            />
            <View className='input-item'>
              <Text className='input-label'>水单价</Text>
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                disabled
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
              />
            </View>
            <View className='input-item' style={{ borderBottom: 'none' }}>
              <Text className='input-label'>水表底数</Text>
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
                placeholder="请输入数值"
              />
            </View>
            <Picker mode='date' onChange={(e) => this.handleChange('name', e.detail.value)}>
              <AtList style={{ padding: '20px 0' }}>
                <AtListItem title='抄表日期' extraText={this.state.dateSel} />
              </AtList>
            </Picker>
          </View>
          <View className='item-container'>
            <Title
              title="电费"
              total="0"
            />
            <View className='input-item'>
              <Text className='input-label'>电单价</Text>
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                disabled
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
              />
            </View>
            <View className='input-item' style={{ borderBottom: 'none' }}>
              <Text className='input-label'>电表底数</Text>
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
                placeholder="请输入数值"
              />
            </View>
            <Picker mode='date' onChange={(e) => this.handleChange('name', e.detail.value)}>
              <AtList style={{ padding: '20px 0' }}>
                <AtListItem title='抄表日期' extraText={this.state.dateSel} />
              </AtList>
            </Picker>
          </View>
          <View className='item-container'>
            <Title
              title="暖气费"
              total="0"
            />
            <View className='input-item'>
              <Text className='input-label'>暖气费</Text>
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                disabled
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
              />
            </View>
          </View>
          <View className='item-container'>
            <Title
              title="自定义费用"
              style={{ color: '#2154F4' }}
              total="0"
              showTotal={false}
            />
            <View className='input-item'>
              {/* <Text className='input-label'> */}
              <Input
                value={this.state.contactMobile}
                className='input-test custom-input'
                type='text'
                placeholder='自定义名称'
              />
              {/* </Text> */}
              <Input
                value={this.state.contactMobile || '8'}
                className='input-test'
                type='text'
                disabled
                onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
              />
            </View>
          </View>
          <View className='item-container'>
            <Title
              title="展开更多费用"
              style={{ color: '#2154F4' }}
              total="0"
              showTotal={false}
            />
          </View>
          <View className='add-self-btn'>
            <View><AtIcon value='add-circle' size='19' color='#2154F4' />添加自定义费用</View>
          </View>
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
        <View className='house-container'>
          <View className='total-cost'>本次总计费用：0元</View>
          <View className='add-house-btn'>
            <AtButton onClick={this.onSubmit} type="primary" size='small'>发送租客</AtButton>
            <View style={{ marginTop: 20 }}>
              <AtButton onClick={this.onSubmit} type='default' size='small'>确认收款</AtButton>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
export default AddHouse