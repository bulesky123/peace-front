import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDetail, getList } from './redux'
import House from './components/house/index'
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
    this.state = {

    }
  }
  componentDidMount() {
    this.props.getDetail()
    this.props.getList()
  }
  render() {
    return (
      <View className='container'>
        <View className='head'>
          <View className='head-title'>
            <Text className='title'>红木林南1号楼</Text>
            <Image className='edit' src={editImage} />
          </View>
          <View className='house-type'>村屋/出租屋</View>
          <View className='head-box'>
            <View className='head-item'>
              <View className='num'>16</View>
              <View className='tips'>总房间数</View>
            </View>
            <View className='head-item'>
              <View className='num'>16</View>
              <View className='tips'>闲置房间</View>
            </View>
            <View className='head-item'>
              <View className='num'>16</View>
              <View className='tips'>租客人数</View>
            </View>
          </View>
        </View>
        <View className='content-box'>
          <House />
          <House />
          <House />
          <House />
          <House />
          <House />
        </View>
        <View className='add-house-btn'>
          <AtButton
            className='btn'
            onClick={this.onSubmit}
            type='default'
            size='small'
          >添加房间</AtButton>
        </View>
      </View>
    )
  }
}

export default HouseDetail