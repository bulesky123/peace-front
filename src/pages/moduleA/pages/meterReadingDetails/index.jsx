import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormPicker } from '@/components'

import './index.less'


@connect(
  state => ({
    // list: state.house?.list,
  }),
  dispatch => bindActionCreators({
    // getHouseList,
  }, dispatch),
)
class MeterReadingDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      floor: ''
    }
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  render() {
    const { item = {}} = this.props
    return (
      <View className='container'>
        <View className='floor-container'>
          <FormPicker
            lable="抄表楼层"
            placeholder='请输入（必填）'
            range={['一层', '二层']}
            onChange={(val) => this.handleChange('floor', val)}
            state={this.state.floor}
          />
          <View className='floor-title'>楼层房间</View>
          <View className='fold-container'>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
            <Text className={item.disable ? 'flod-item disabled' : 'flod-item'}>101</Text>
          </View>
        </View>
        <View className='height10' />
        <View className='floor-detail-container'>
          <View className='detail-title'>
            <Text className='title'>1号楼101</Text>
            <View>
              <Text className='opt-btn edit'>修改</Text>
              <Text className='opt-btn'>已保存</Text>
            </View>
          </View>
          <View className='time-box'>
            <View>
              <View className='time'>收租日期：2022-07-19</View>
              <View className='time'>抄表日期：2022-07-19</View>
            </View>
            <View style={{paddingTop: 20}}><AtIcon value='chevron-right' color='#ccc'></AtIcon></View>
          </View>
          <View className='des-box'>
            <View className='periods'>
              <View className='periods-title'>上期读数</View>
              <View>电：<Text>12133</Text></View>
              <View>水：<Text>12133</Text></View>
              <View>热：<Text>12133</Text></View>
            </View>
            <View className='periods'>
              <View  className='periods-title'>本期读数</View>
              <View>电：<Input placeholder='请输入'/></View>
              <View>水：<Input placeholder='请输入'/></View>
              <View>热：<Input placeholder='请输入'/></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default MeterReadingDetails