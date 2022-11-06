import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BillItem from './components/bill'
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
class Bill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2]
    }
  }
  render() {
    const { list } = this.state
    return (
      <View className='bill'>
        {
          list.length > 0 ? list.map(item => (
            <BillItem key={item} />
          )) : <Empty />
        }
      </View>
    )
  }
}

export default Bill