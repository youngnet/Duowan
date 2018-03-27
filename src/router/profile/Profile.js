import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Profile.less';
import Footer from "../../components/footer/footer"

class Profile extends Component {
  render() {
    return (
      <div className="header-one">
        <div className="div-one">
        <div className="details">
            <img src={require("../../common/img/105628v3943kuuzudkekdk.png")} alt =""/>
          <div className="header-two">
            <h3 className="user">用户名</h3>
            <ul className='follow clearfix'>
                <li>关注：0</li>
                <li>粉丝：999999</li>
                <li>好友：66666</li>
            </ul>
          </div>
            <span className="iconfont icon-qianjin arrow"></span>
        </div>
        <div className="icon-text">
            <ul className='clearfix'>
                <li><i className=" iconfont icon-xiaoxi" style={{color:"#cee748"}}></i><p>我的消息</p></li>
                <li><i className=" iconfont icon-yaoqinghaoyou" style={{color:"#afc3ff"}}></i><p>我的好友</p></li>
                <li><i className=" iconfont icon-iconfontguanzhu" style={{color:"#fc91ea"}}></i><p>关注动态</p></li>
                <li><i className=" iconfont icon-tiezi" style={{color:"#ff8989"}}></i><p>我的帖子</p></li>
            </ul>
          <ul className='clearfix'>
              <li><i className=" iconfont icon-qiandao" style={{color:"#ffcda8"}}></i><p>签到日历</p></li>
              <li><i className=" iconfont icon-unie601" style={{color:"#fff34a"}}></i><p>我的收藏</p></li>
              <li><i className=" iconfont icon-guanzhu" style={{color:"#f6a45e"}}></i><p>我的关注</p></li>
              <li><i className=" iconfont icon-iconfuzhi" style={{color:"#a6e7f5"}}></i><p>我的板块</p></li>
          </ul>
        </div>
        </div>
        <div className="feedback">
              <ul>
                  <li className="user">用户反馈</li>
                  <li className="user">设置</li>
                  <li className="user">切换账号</li>
              </ul>
          </div>
          <Footer/>
      </div>
    );
  }
}


Profile.propTypes = {

};

export default Profile;
