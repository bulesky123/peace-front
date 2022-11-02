import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Switch } from "@tarojs/components"
import { AtIcon, AtButton } from 'taro-ui'
import { FormPicker } from '../../../../components'
import './index.less'


class AddHouse extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      name: '', // 房屋名称
      address: '', // 地址
      area: '', // 所在区
      contactMobile: '', // 看房联系人手机号
      contactName: '', // 看房人联系人姓名
      contactSex: '', // 性别
      floorNum: '', // 楼层数
      heatingType: '', // 供暖类型
      hotWaterFlag: '', // 热水开关
      houseType: '', //
      ielevatorStatus: '', // 电梯状态：是/否
      layerList: '',
      roomNamePrefix: '', // 房间名称前缀
      roomNum: '', // 房间数
    }
  }
  handleChange(key, value) {
    console.log(key, value)
    this.setState({
      [key]: value
    })
  }
  onSubmit() {
    console.log(this.state)
  }
  onReset(event) {
    this.setState({
      value: '',
    })
  }
  render() {
    return (
      <View>
        <View className='add-house-container'>
          <View className='input-item'>
            <Text className='input-label'>房屋名称</Text>
            <Input
              value={this.state.name}
              onInput={(e) => this.handleChange('name', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>看房联系人</Text>
            <Input
              value={this.state.contactName}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('contactName', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>联系电话</Text>
            <Input
              value={this.state.contactMobile}
              className='input-test'
              type='text'
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('contactMobile', e.detail.value)}
            />
          </View>
          <FormPicker
            lable="性别"
            placeholder='请输入（必填）'
            range={['男士', '女士']}
            onChange={(val) => this.handleChange('contactSex', val)}
            state={this.state.contactSex}
          />
          <FormPicker
            lable="所属地区"
            placeholder='请输入（必填）'
            range={['男', '女']}
            onChange={(val) => this.handleChange('area', val)}
            state={this.state.area}
          />
          <FormPicker
            lable="位置(招租用)"
            placeholder='请输入（必填）'
            range={['男', '女']}
            onChange={(val) => this.handleChange('address', val)}
            state={this.state.address}
          />
          <FormPicker
            lable="房屋类型"
            placeholder='请输入（必填）'
            range={['村屋/自建公寓', '市区/独栋品质社区','小区/公寓', '其他类型']}
            onChange={(val) => this.handleChange('houseType', val)}
            state={this.state.houseType}
          />
          <FormPicker
            lable="电梯"
            placeholder='请输入（必填）'
            range={['有', '无']}
            onChange={(val) => this.handleChange('ielevatorStatus', val)}
            state={this.state.ielevatorStatus}
          />
          <FormPicker
            lable="供暖"
            placeholder='请输入（必填）'
            range={['自产暖', '集中供暖', '无暖气']}
            onChange={(val) => this.handleChange('heatingType', val)}
            state={this.state.heatingType}
          />
          <View className='input-item'>
            <Text className='input-label'>总楼层</Text>
            <Input
              value={this.state.floorNum}
              className='input-test'
              type="number"
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('floorNum', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>每层房间数</Text>
            <Input
              value={this.state.roomNum}
              className='input-test'
              type='number'
              placeholder='请输入（必填）'
              onInput={(e) => this.handleChange('roomNum', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>房号前缀</Text>
            <Input
              value={this.state.roomNamePrefix}
              className='input-test'
              type='text'
              placeholder='选填，如填1号楼，则房号为1号楼101'
              onInput={(e) => this.handleChange('roomNamePrefix', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>房屋热水计量收费</Text>
            <Switch
              value={this.state.hotWaterFlag}
              className='input-test'
              checked
              onChange={(val) => this.handleChange('hotWaterFlag', e.detail.value)}
            />
          </View>
        </View>
        <View className='house-list'>
          <Text className='house-head'>房屋列表<Text className='tips'>(可以自主选择房间号)</Text></Text>
          <Text className='house-num'>已选16间</Text>
        </View>
        <View className='house-container'>
          <View className='fold-title'>1层</View>
          <View className='fold-container'>
            <Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text>
            <Text className='flod-item add'><AtIcon value='add' size={20} color='#1846C1'></AtIcon></Text>
          </View>
          <View className='fold-title'>2层</View>
          <View className='fold-container'>
            <Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text><Text className='flod-item'>101</Text>
            <Text className='flod-item add'><AtIcon value='add' size={20} color='#1846C1'></AtIcon></Text>
          </View>
          <View className='add-house-btn'>
            <AtButton onClick={this.onSubmit} type='default' size='small'>保存</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
export default AddHouse