import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Item from './components/item'
import Empty from './components/empty'

import './index.less'


@connect(
  state => ({
    // list: state.house?.list,
  }),
  dispatch => bindActionCreators({
    // getHouseList,
  }, dispatch),
)
class ConfirmReceipt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2]
    }
  }
  render() {
    const { list } = this.state
    return (
      <View className='confirmReceipt'>
        {
          list.length > 0 ? list.map(item => (
            <Item key={item} />
          )) : <Empty />
        }
      </View>
    )
  }
}

export default ConfirmReceipt