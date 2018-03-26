/*
 * @Author: young 
 * @Date: 2018-03-21 10:43:47 
 * @Last Modified by: young
 * @Last Modified time: 2018-03-21 11:30:28
 * 组件化开发提高可复用性
 * 1. 可变参数都应该在组件调用时通过传递参数来使用
 * 2. 组件的样式是否需要用户自定义
 * 3. 具体功能的可配置行,是否加载全部功能
 * 4. 组件升级时尽量添加新的属性,减少对原属性的改动提高兼容性
 * 5. react-swipe 有bug 第一次渲染时根据轮播图的个数计算样式,后期数据变化style不会重新计算,此时只能重新调用组件
 */

// static defaultProps = {
//   data: [],
//   style: {},
//   className: '',
//   initSlide: 0,
//   auto: 3000,
//   isFocus: true
// };
// static propTypes = {
//   data: PropTypes.array,
//   style: PropTypes.object,
//   className: PropTypes.string,
//   initSlide: PropTypes.number,
//   auto: PropTypes.number,
//   isFocus: PropTypes.bool
// };

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactSwipe from "react-swipe";
import {} from "swipe-js-iso";
import "./banner.less";

class Banner extends Component {
  // 自动轮播的时间,初始显示第几张图片,过渡时间,是否显示 焦点 左右箭头等,初始样式设置,添加类名
  static defaultProps = {
    startSlide: 0,
    auto: 2000,
    style: {},
    data: []
  };
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.startSlide
    };
  }

  render() {
    let { data, auto } = this.props;
    if (data.length === 0) {
      return null;
    }
    let { index } = this.state;
    return (
      <div className="bannerBox">
        <ReactSwipe
          className="carousel"
          swipeOptions={{
            auto: auto,
            callback: (index, ele) => {
              this.setState({ index });
            }
          }}
        >
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.img} alt={item.title} />
              </div>
            );
          })}
        </ReactSwipe>
        <ul className="focus clearfix">
          {data.map((item, i) => {
            return <li key={i} className={i === index ? "active" : ""} />;
          })}
        </ul>
      </div>
    );
  }
}

Banner.propTypes = {
  startSlide: PropTypes.number,
  data: PropTypes.array,
  auto: PropTypes.number
};

export default withRouter(connect()(Banner));
