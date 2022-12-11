import Taro from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPhone } from '../../in/redux'
import { AtButton, AtActionSheet, AtActionSheetItem } from 'taro-ui'
import "taro-ui/dist/style/components/modal.scss"
@connect(
  state => ({}),
  dispatch => bindActionCreators({
    addPhone,
  }, dispatch),
)
class PModal extends React.Component {
  constructor(props) {
    super(props)
    this.getPhoneNumber = this.getPhoneNumber.bind(this)
  }
  async getPhoneNumber(e) {
    console.log(e, '------')
    await this.props.addPhone({ code: e.detail.code, encryptedData: e.detail.encryptedData })
    this.props.handleClose()
  }
  render() {
    return (
      this.props.isOpened &&
      <AtActionSheet
        isOpened
        cancelText='取消'
        title='申请获取您的手机号'
        // onCancel={this.handleCancel}
        onClose={this.props.handleClose}>
        <AtButton
          openType="getPhoneNumber"
          onGetPhoneNumber={this.getPhoneNumber}>确定</AtButton>
      </AtActionSheet>
    )
  }
}

export default PModal