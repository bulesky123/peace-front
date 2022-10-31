import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Tenant from './components/tenant.jsx'
import rightIcon from './images/right.png'

import './index.less'


@connect(
  state => ({
    // list: state.house?.list,
  }),
  dispatch => bindActionCreators({
    // getHouseList,
  }, dispatch),
)
class HouseDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View className='container'>
        <View className='head'>
          <View className='head-title'>
            红木林南1号楼
          </View>
          <View className='head-content'>
            <Text className='house-num'>102</Text>
            <Text className='house-type'>单间</Text>
            <Text className='house-type house-moneny'>1000元/月</Text>
            <View className='house-state'>已预定<Image className='rightIcon' src={rightIcon} /></View>
          </View>
        </View>
        <View className='tab'>
          <View className='active'>租客</View>
          <View>费用</View>
          <View>单据</View>
          <View>招租</View>
        </View>
        <View className='content-box'>
          <Tenant />
        </View>
        {/* <View className='add-house-btn'>
          <AtButton
            className='btn'
            onClick={this.onSubmit}
            type='default'
            size='small'
          >添加房间</AtButton>
        </View> */}
      </View>
    )
  }
}

export default HouseDetail