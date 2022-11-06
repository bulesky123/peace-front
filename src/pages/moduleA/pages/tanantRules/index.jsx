import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './index.less'


@connect(
  state => ({
    // list: state.house?.list,
  }),
  dispatch => bindActionCreators({
    // getHouseList,
  }, dispatch),
)
class Rules extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <View className='rules'>
        <View className='rules-content'>
          这里是默认的租客须知，同步到租客小程序端这里是默认的租客须知，同步到租客小程序端这里是默认的租客须知，同步到租客小程序端这里是默认的租客须知，同步到租客小程序端这里是默认的租客须知，同步到租客小程序端这里是默认的租客须知，同步到租客小程序端
        </View>
        <View className='rules-foot'>
          <AtButton
            className='btn'
            onClick={this.onSubmit}
            type="primary"
            size='small'
          >修改</AtButton>
        </View>
      </View>
    )
  }
}

export default Rules