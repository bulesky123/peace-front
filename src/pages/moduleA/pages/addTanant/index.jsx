import Taro from '@tarojs/taro'
import React from 'react'
import { View, Input, Text, Picker, Textarea } from "@tarojs/components"
import { AtIcon, AtInput, AtButton, AtModal, AtModalHeader, AtModalContent, AtList, AtListItem } from 'taro-ui'
import { FormPicker } from '@/components'
import Tools from '@/utils/tools'
import { addHouse } from '@/api/house'
import Upload from './components/upload'
import './index.less'


class AddHouse extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      contractUrl: '', // 合同地址
      houseId: 0, // 房屋ID
      leaseType: 0, // 租期 1 一季度 2 半年 3 一年 4 两年 5不限
      leaveDate: "2022-12-11", // 合同终止日
      liveDate: "2022-12-11", // 入住日期
      liveFinishDate: "2022-12-11", // 到租日期
      mortgageAmount: 0, // 押金
      networkCost: 0, // 网费
      remark: '', // 备注
      rentAmount: 0, // 租金
      rentDay: 0, // 收租日
      rentPeriod: 0, // 收租周期
      rentUnit: 0, // 收租周期单位
      roomId: 0, // 房间ID
      tenantResps: [ // 租客列表
        {
          idcard: '', // 租客身份证号
          idcardDownUrl: '', // 租客身份证下面url地址
          idcardUpUrl: '', // 租客身份证正面url地址
          mobile: '', // 租客手机号
          name: '' // 租客姓名
        }
      ],
    }
  }
  handleChange(key, value) {
    this.setState({
      [key]: value
    })
  }
  async onSubmit() {
    await addHouse(this.state)
    console.log(this.state)
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  upload(type) {
    console.log(type)
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  }
  render() {
    const {
      name,
      idcard,
      mobile,
      idcardUpUrl,
      idcardDownUrl,
      liveDate,
      liveFinishDate,
      leaseType,
      leaveDate,
      rentPeriod,
      rentDay,
      rentAmount,
      mortgageAmount,
      networkCost,
      contractUrl,
      remark
    } = this.state
    return (
      <View>
        <View className='room-head'>红木林南1号楼-102</View>
        <View className='add-house-container'>
          <View className='house-title'>
            <View className='title'>主承租人信息</View>
            <View className='title-btn'>添加历史租客</View>
          </View>
          <View className='input-item'>
            <Text className='input-label'>姓名</Text>
            <Input
              value={name}
              onInput={(e) => this.handleChange('name', e.detail.value)}
              className='input-test'
              type='text'
              placeholder='请输入姓名'
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>身份证号</Text>
            <Input
              value={idcard}
              className='input-test'
              type='text'
              placeholder='承租人身份证号'
              onInput={(e) => this.handleChange('idcard', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>电话</Text>
            <Input
              value={mobile}
              className='input-test'
              type='text'
              placeholder='承租人电话'
              onInput={(e) => this.handleChange('mobile', e.detail.value)}
            />
          </View>
          <View className='input-item' style={{ borderBottom: 'none' }}>
            <Text className='input-label'>身份照片</Text>
          </View>
          <View className='card-box'>
            <Upload
              tips="添加正面"
              upload={this.upload.bind(this, 'idcardUp')}
              url={idcardUpUrl}
              style={{
                width: 'calc(( 100% - 4px ) / 2)',
                display: 'inline-block',
                marginRight: 4,
              }}
            />
            <Upload
              tips="添加反面"
              upload={this.upload.bind(this, 'idcardDown')}
              url={idcardDownUrl}
              style={{
                width: 'calc(( 100% - 4px ) / 2)',
                display: 'inline-block',
              }}
            />
          </View>
          <View className='add-self-btn'>
            <View><AtIcon value='add-circle' size='19' color='#2154F4' /> 添加同住人</View>
          </View>
          <View className='house-title'>
            <View className='title'>租约详情</View>
          </View>
          <Picker mode='date' onChange={(e) => this.handleChange('liveDate', e.detail.value)}>
            <AtList>
              <AtListItem title='入住日期' extraText={liveDate} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={(e) => this.handleChange('leaseType', e.detail.value)}>
            <AtList>
              <AtListItem title='租期' extraText={leaseType} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={(e) => this.handleChange('leaveDate', e.detail.value)}>
            <AtList>
              <AtListItem title='到期日期' extraText={leaveDate} />
            </AtList>
          </Picker>
          <Picker mode='date' onChange={(e) => this.handleChange('rentDay', e.detail.value)}>
            <AtList>
              <AtListItem title='收租日' extraText={rentDay} />
            </AtList>
          </Picker>
          <FormPicker
            lable="收租周期"
            placeholder='请选择收租周期'
            range={['一月一次', '三月一次']}
            onChange={(val) => this.handleChange('rentPeriod', val)}
            state={rentPeriod}
          />
          <View className='input-item'>
            <Text className='input-label'>租金</Text>
            <Input
              value={rentAmount}
              className='input-test'
              type='text'
              placeholder='请输入租金'
              onInput={(e) => this.handleChange('rentAmount', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>押金</Text>
            <Input
              value={mortgageAmount}
              className='input-test'
              type='text'
              placeholder='请输入押金'
              onInput={(e) => this.handleChange('mortgageAmount', e.detail.value)}
            />
          </View>
          <View className='input-item'>
            <Text className='input-label'>网费</Text>
            <Input
              value={networkCost}
              className='input-test'
              type='text'
              placeholder='请输入网费'
              onInput={(e) => this.handleChange('networkCost', e.detail.value)}
            />
          </View>
          <View className='input-item' style={{ borderBottom: 'none' }}>
            <Text className='input-label'>添加合同照片</Text>
          </View>
          <View>
            <Upload
              upload={this.upload.bind(this, 'contract')}
              url={contractUrl}
              style={{
                width: 'calc(( 100% - 4px ) / 2)',
                display: 'inline-block',
              }}
            />
          </View>
          <View className='input-item' style={{ borderBottom: 'none' }}>
            <Text className='input-label'>备注</Text>
          </View>
          <View>
            <Textarea
              value={remark}
              style={{
                background: '#fff',
                minHeight: 100,
                padding: '16px 10px',
                border: '1px solid #E2E2E2',
                borderRadius: 2,
                fontSize: 18,
                color: '#05203D',
                width: '100%',
                boxSizing: 'border-box',
              }}
              autoHeight
              placeholder='备注信息，例如定金，交租日期等'
            />
          </View>
        </View>
        <View className='house-container'>
          <View className='tips'>默认提前3天提醒租客交租/房东收租</View>
          <View className='add-house-btn'>
            <AtButton onClick={this.onSubmit} type="primary" size='small'>确定</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
export default AddHouse