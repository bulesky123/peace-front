import { Component } from "react";
import Taro from "@tarojs/taro";
import { AtTabBar } from "taro-ui";
import classnames from "classnames";
import { View } from "@tarojs/components";
import "./index.scss";



class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentWillUnmount() {}

  componentDidShow() {
  }

  componentDidHide() {}

  switchTab(value) {
    if (value !== 0) return;
    Taro.reLaunch({
      url: "/pages/index/index"
    });
  }

  render() {
    return (
      <View
        className={classnames({
          my_container: true,
        })}
      >
        <View>我的</View>
        <AtTabBar
          fixed
          selectedColor="#d43c33"
          tabList={[
            { title: "发现", iconPrefixClass: "fa", iconType: "feed" },
            { title: "我的", iconPrefixClass: "fa", iconType: "music" }
          ]}
          onClick={this.switchTab.bind(this)}
        />
      </View>
    );
  }
}

export default Page;
