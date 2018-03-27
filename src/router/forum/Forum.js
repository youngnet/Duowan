import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/search/search'

class Forum extends Component {
  render() {
    return (
      <div>
        <Search/>
      </div>
    );
  }
}

Forum.propTypes = {

};

export default Forum;