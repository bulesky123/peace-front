import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Item from './components/item'

import './index.less'


@connect(
  state => ({
    // list: state.house?.list,
  }),
  dispatch => bindActionCreators({
    // getHouseList,
  }, dispatch),
)
class CommonManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2]
    }
  }
  render() {
    const { list } = this.state
    return (
      <View className='commonManager'>
        {
          list.length > 0 && list.map(item => (
            <Item key={item} />
          ))
        }
        <View className='manager-foot'>
          <View className='tips'>添加管理人手机号码，最多可添加5个共同管</View>
          <AtButton
            className='btn'
            onClick={this.onSubmit}
            type='default'
            size='small'
          >添加</AtButton>
        </View>
      </View>
    )
  }
}

export default CommonManager