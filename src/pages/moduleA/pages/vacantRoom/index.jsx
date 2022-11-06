import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AllWaitList from './components/allWaitList.jsx'
import FloorList from './components/floorList.jsx'

import './index.less'


@connect(
  state => ({
    // list: state.house?.list,
  }),
  dispatch => bindActionCreators({
    // getHouseList,
  }, dispatch),
)
class Tenant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabActive: 1,
    }
    this.tabs = [
      { key: 1, lable: '全部空房' },
      { key: 2, lable: '按房屋' },
    ]
  }
  queryTab(item) {
    this.setState({
      tabActive: item.key
    })
  }
  render() {
    const { tabActive } = this.state
    return (
      <View className='vacantRoom'>
        <View className='tab'>
          {
            this.tabs.map(item => (
              <View
                key={item.key}
                className={item.key == tabActive ? 'active' : ''}
                onClick={() => this.queryTab(item)}
              >{item.lable}</View>
            ))
          }
        </View>
        <View className='content'>
          {tabActive == 1 && <AllWaitList />}
          {tabActive == 2 && <FloorList />}
        </View>
      </View>
    )
  }
}

export default Tenant