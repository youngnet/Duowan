import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/search/search'
import Footer from "../../components/footer/footer"

class Forum extends Component {
  render() {
    return (
      <div style={{position:'absolute',overflow:'hidden',width:'100%',height:'100%'}}>
        <Search/>
        Forum
        <Footer/>
      </div>
    );
  }
}

Forum.propTypes = {

};

export default Forum;