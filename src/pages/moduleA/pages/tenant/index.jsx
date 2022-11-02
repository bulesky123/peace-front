import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TenantList from './components/tenantList.jsx'
import FloorList from './components/floorList.jsx'
import HistoryTenantList from './components/historyTenant.jsx'

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
      { key: 1, lable: '现有租客(123)' },
      { key: 2, lable: '按房屋(6)' },
      { key: 3, lable: '历史租客(1024)' },
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
      <View className='container'>
        <Input className='search-input' type='text' placeholder='请输入租客名称'/>
        <View className='tab'>
          {
            this.tabs.map(item => (
              <View 
               key={item.key} 
               className={item.key == tabActive ? 'active': ''}
               onClick={() => this.queryTab(item)}
              >{item.lable}</View>
            ))
          }
        </View>
        <View className='content'>
          { tabActive == 1 && <TenantList /> }
          { tabActive == 2 && <FloorList /> }
          { tabActive == 3 && <HistoryTenantList /> }
        </View>
      </View>
    )
  }
}

export default Tenant