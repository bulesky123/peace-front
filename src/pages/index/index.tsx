import Taro from "@tarojs/taro";
import { Component } from "react";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import classnames from "classnames";

import "./index.scss";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      showLoading: true,
      bannerList: [],
      searchValue: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
    this.setState({
      showLoading: false
    });
  }

  componentWillMount() {
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidMount() {

  }

  switchTab(value) {
    if (value !== 1) return;
    Taro.reLaunch({
      url: "/pages/my/index"
    });
  }

  render() {
    return (
      <View
        className={classnames({
          index_container: true,
          // hasMusicBox: !!song.currentSongInfo.name
        })}
      >
        <View>首页5555</View>
        <AtTabBar
          fixed
          selectedColor="#d43c33"
          tabList={[
            { title: "发现", iconPrefixClass: "fa", iconType: "feed" },
            { title: "我的", iconPrefixClass: "fa", iconType: "music" }
          ]}
          onClick={this.switchTab.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
