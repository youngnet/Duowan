import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from '../../components/post/post';
import Footer from "../../components/footer/footer"
import StarItem from '../../components/starItem/starItem';

class Star extends Component {
  render() {
    return <div>
      <StarItem/>
      <Post/>
      <Footer/>
    </div>;
  }
}

Star.propTypes = {};

export default Star;
