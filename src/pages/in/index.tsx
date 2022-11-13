import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { codeForOpenId } from './redux'

@connect(
  state => ({}),
  dispatch => bindActionCreators({
    codeForOpenId,
  }, dispatch),
)
class AuthComponent extends React.Component {
  componentDidMount() {
    // 获取用户的token
    this.props.codeForOpenId()
  }
  render() {
    return null
  }
}

export default AuthComponent