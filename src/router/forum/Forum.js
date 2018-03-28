import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/search/search'
import Footer from "../../components/footer/footer"

class Forum extends Component {
  render() {
    return (
      <div>
        <Search/>
        <Footer/>
      </div>
    );
  }
}

Forum.propTypes = {

};

export default Forum;