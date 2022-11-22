import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTabNum, getList } from './redux'
import TenantList from './components/tenantList.jsx'
import FloorList from './components/floorList.jsx'
import HistoryTenantList from './components/historyTenant.jsx'

import './index.less'


@connect(
  state => ({
    currentList: state.tenant?.currentList,
    roomTenantList:  state.tenant?.roomTenantList,
    historyList:  state.tenant?.historyList,
    historyTenantNum:  state.tenant?.historyTenantNum,
    holdTenantNum:  state.tenant?.holdTenantNum,
    houseNum:  state.tenant?.houseNum,
    tabs: state.tenant?.tabs,
  }),
  dispatch => bindActionCreators({
    getTabNum,
    getList,
  }, dispatch),
)
class Tenant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabActive: 'currentList',
    }
    this.tabs = [
      { key: 'currentList', lable: '现有租客(123)' },
      { key: 'roomTenantList', lable: '按房屋(6)' },
      { key: 'historyList', lable: '历史租客(1024)' },
    ]
  }
  queryTab(item) {
    this.setState({
      tabActive: item.key
    })
    this.props.getList(item.key, { conditionType: 0 })
  }
  componentDidMount() {
    this.props.getTabNum()
    this.props.getList('currentList', { conditionType: 0 })
  }
  render() {
    const { tabActive } = this.state
    const { currentList, roomTenantList, historyList } = this.props
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
          { tabActive == 'currentList' && <TenantList list={currentList} getList={this.props.getList} /> }
          { tabActive == 'roomTenantList' && <FloorList list={roomTenantList} /> }
          { tabActive == 'historyList' && <HistoryTenantList list={historyList} /> }
        </View>
      </View>
    )
  }
}

export default Tenant