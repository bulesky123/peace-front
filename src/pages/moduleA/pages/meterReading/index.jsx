import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Item from './components/item.jsx'

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
  onClick() {
    Taro.redirectTo({
      url: `/pages/moduleA/pages/meterReadingDetails/index`
    })
  }
  render() {
    return (
      <View className='container'>
        <Item onClick={this.onClick} />
        <Item />
      </View>
    )
  }
}

export default HouseDetail