import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { Menu } from '@/components'

class Tips extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visiable: false
    }
    this.setVisibable = this.setVisibable.bind(this)
  }
  setVisibable(falg) {
    console.log(falg, '-')
    this.setState({
      visiable: falg
    })
  }
  render() {
    const style = {
      position: 'absolute',
      width: 'max-content',
      right: 0,
      top: 26,
    }
    return (
      <View className='tips' onClick={this.setVisibable.bind(this, true)}>
        {
          this.props.children
        }
        {
          this.state.visiable && <Menu
            style={style}
            data={this.props.data || []}
            onClick={this.setVisibable.bind(this, false)}
          />
        }
      </View>
    )
  }
}
export default Tips