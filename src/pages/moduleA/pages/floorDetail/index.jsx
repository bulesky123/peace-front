import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Tools from '@/utils/tools'
import { getDetail, getList } from './redux'
import House from './components/house/index'
import Head from './components/head'
import editImage from './images/edit.png'

import './index.less'


@connect(
  state => ({
    list: state.floorDetail?.list,
    emptyRoomCount: state.floorDetail?.emptyRoomCount,
    liveRoomCount: state.floorDetail?.liveRoomCount,
    name: state.floorDetail?.name,
    roomCount: state.floorDetail?.roomCount,
    tenantCount: state.floorDetail?.tenantCount,
  }),
  dispatch => bindActionCreators({
    getDetail,
    getList,
  }, dispatch),
)
class HouseDetail extends React.Component {
  constructor(props) {
    super(props)
    this.addHouse = this.addHouse.bind(this)
    this.state = {

    }
  }
  addHouse() {
    const houseId = Tools.getParameterByName('houseId') || 1
    Taro.navigateTo({
      url: `/pages/moduleA/pages/addRoom/index?roomId=${houseId}`
    })
  }
  getList() {
    const houseId = Tools.getParameterByName('houseId') || 1
    this.props.getList(houseId)
  }
  componentDidMount() {
    const houseId = Tools.getParameterByName('houseId') || 1
    this.props.getDetail(houseId)
    this.getList()
  }
  render() {
    const { emptyRoomCount, roomCount, tenantCount, list = [], name } = this.props
    return (
      <View className='container'>
        <Head
          emptyRoomCount={emptyRoomCount}
          roomCount={roomCount}
          tenantCount={tenantCount}
          name={name}
        />
        <View className='content-box'>
          {
            list && Array.isArray(list) && list.map(item => (
              <House
                key={item.houseId}
                {...item}
                getList={this.getList}
              />
            ))
          }
        </View>
        <View className='add-house-btn'>
          <AtButton
            className='btn'
            onClick={this.addHouse}
            type='default'
            size='small'
          >添加房间</AtButton>
        </View>
      </View>
    )
  }
}

export default HouseDetail