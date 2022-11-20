import Taro from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { AtInput, AtButton, AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from './redux'
import { addManager, delManager, updateManager } from '@/api/my'
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
      mobile: undefined,
      name: '',
      isOpened: false,
      id: '',
    }
    this.addFun = this.addFun.bind(this)
    this.submit = this.submit.bind(this)
    this.deletFun = this.deletFun.bind(this)
    this.eidtFun = this.eidtFun.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  addFun() {
    this.setState({
      isOpened: true,
      id: undefined
    })
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  async submit() {
    const { mobile, name, id } = this.state
    if (id) {
      await updateManager({
        mobile,
        name,
        id,
      })
    } else {
      await addManager({
        mobile,
        name,
      })
    }
    this.setState({
      isOpened: false
    })
    this.props.getList()
  }
  async deletFun(id) {
    await delManager({
      id
    })
    this.props.getList()
  }
  eidtFun(item) {
    this.setState({
      ...item,
      isOpened: true,
    })
  }
  componentDidMount() {
    this.props.getList()
  }
  render() {
    const { mobile, name, isOpened } = this.state
    const { list } = this.props
    return (
      <View className='commonManager'>
        <View className="commonManager-content">
          {
            list.length > 0 && list.map((item, index) => (
              <Item
                delet={() => this.deletFun(item.id)}
                edit={() => this.eidtFun(item)}
                title={`共同管理人${index + 1}`}
                key={item.id}
                {...item}
              />
            ))
          }
        </View>
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
                name='name'
                type='text'
                placeholder='请输入姓名'
                border={false}
                value={name}
                onChange={(val) => this.handleChange('name', val)}
                style={{ marginBottom: 16, background: '#F8F8F8' }}
              />
              <AtInput
                name='mobile'
                type='text'
                placeholder='请输入手机号'
                border={false}
                value={mobile}
                onChange={(val) => this.handleChange('mobile', val)}
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