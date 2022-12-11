import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Tenant from './components/tenant.jsx'
import Cost from './components/cost'
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
      tabActive: 1,
      roomId: '',
    }
    this.tabs = [
      { key: 1, lable: '租客' },
      { key: 2, lable: '费用' },
      { key: 3, lable: '单据' },
      { key: 4, lable: '招租' },
    ]
  }
  getQuery() {
    return getCurrentInstance().router.params
  }
  queryTab(item) {
    this.setState({
      tabActive: item.key
    })
  }
  componentDidMount() {
    const { roomId } = this.getQuery()
    console.log(roomId, roomId)
    this.setState({
      roomId
    })
  }
  render() {
    const { tabActive, roomId } = this.state
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
        <View className='content-box'>
          {tabActive == 1 && <Tenant roomId={roomId} />}
          {tabActive == 2 && <Cost roomId={roomId} />}
          {tabActive == 3 && <View roomId={roomId}>单据</View>}
          {tabActive == 4 && <View roomId={roomId}>招租</View>}
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