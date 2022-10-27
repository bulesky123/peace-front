import Taro from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitUserInfo } from '../../in/redux'
import { AtButton,  AtActionSheet, AtActionSheetItem } from 'taro-ui'
import "taro-ui/dist/style/components/modal.scss"
@connect(
  state => ({}),
  dispatch => bindActionCreators({
    submitUserInfo,
  }, dispatch),
)
class PModal extends React.Component {
  constructor(props) {
    super(props)
    this.getPhoneNumber = this.getPhoneNumber.bind(this)
  }
  async getPhoneNumber(e) {
    await this.props.submitUserInfo({phone: e.detail.encryptedData})
  }
  render() {
    console.log(this.props.isOpened, 'this.props.isOpened')
    return (
      this.props.isOpened &&
      <AtActionSheet
        isOpened
        cancelText='取消'
        title='申请获取您的手机号'
        // onCancel={this.handleCancel}
        onClose={this.props.handleClose}>
        <AtButton
          customStyle={{ border: 'none' }}
          onClick={this.props.handleClose}
          openType="getPhoneNumber"
          onGetPhoneNumber={this.getPhoneNumber}>确定</AtButton>
      </AtActionSheet>
    )
  }
}

export default PModal