import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Empty from './components/empty'
import HouseList from './components/list'
import { getHouseList } from '../house/redux'

import './index.less'

@connect(
  state => ({
    list: state.house?.list,
  }),
  dispatch => bindActionCreators({
    getHouseList,
  }, dispatch),
)
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    // 获取用户的信息
    this.props.getHouseList()
  }
  render () {
    return (
      <View className='house'>
        {
          this.props?.list?.length == 0 ? 
          <Empty />
          :
          this.props?.list?.map(item => (
            <HouseList key={item.houseId} {...item} />
          ))
        }
        <View className='add-house-btn'>
          <AtButton type='primary' size='small'>添加房屋</AtButton>
        </View>
      </View>
    )
  }
}

export default List