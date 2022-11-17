import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtInput, AtButton, AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from './redux'
import { addManager } from '@/api/my'
import Item from './components/item'

import './index.less'


@connect(
  state => ({
    list: state.commonManager?.list,
  }),
  dispatch => bindActionCreators({
    getList,
  }, dispatch),
)
class CommonManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: undefined,
      isOpened: false,
    }
    this.addFun = this.addFun.bind(this)
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  addFun() {
    this.setState({
      isOpened: true
    })
  }
  handleChange (phone) {
    this.setState({
      phone
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return phone
  }
  async submit() {
    await addManager({ phone: this.state.phone })
    this.setState({
      isOpened: false
    })
    this.props.getList()
  }
  componentDidMount() {
    this.props.getList()
  }
  render() {
    const { phone, isOpened } = this.state
    const { list } = this.props
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
            onClick={this.addFun}
            type='default'
            size='small'
          >添加</AtButton>
        </View>
        <AtModal isOpened={isOpened}>
          <AtModalHeader>添加共同管理人</AtModalHeader>
          <AtModalContent>
            <View className='modal-content'>
              <AtInput
                name='phone'
                type='text'
                placeholder='请输入手机号'
                border={false}
                value={phone}
                onChange={this.handleChange}
              />
              <View className='save-btn'>
                <AtButton onClick={this.submit} type="primary" size="small">保存</AtButton>
              </View>
            </View>
          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}

export default CommonManager