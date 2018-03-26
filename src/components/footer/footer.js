import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import "./footer.less";
import { connect } from "react-redux";

class footer extends Component {
  render() {
    return (
      <ul className="footer">
        <li>
          <NavLink to="/star" exact>
            <i className="iconfont icon-iconfontguanzhu" />
            关注
          </NavLink>
        </li>
        <li>
          <NavLink to="/forum">
            <i className="iconfont icon-luntan" />
            论坛
          </NavLink>
        </li>
        <li>  
          <NavLink to="/rank">
            <i className="iconfont icon-wanyouxi" />
            排行
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <i className="iconfont icon-iconfuzhi" />
            我的
          </NavLink>
        </li>
      </ul>
    );
  }
}

footer.propTypes = {};

export default withRouter(connect(state => ({ ...state }))(footer));
