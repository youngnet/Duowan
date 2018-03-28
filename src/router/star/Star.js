import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from '../../components/post/post';
import Footer from "../../components/footer/footer"

class Star extends Component {
  render() {
    return <div style={{position:'absolute',overflow:'hidden',width:'100%',height:'100%'}}>
      <Post/>
      <Footer/>
    </div>;
  }
}

Star.propTypes = {};

export default Star;
