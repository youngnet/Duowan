import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Personal from '../../components/personal/personal'

class Profile extends Component {
  render() {
    return (
      <div>
        <Personal/>
      </div>
    );
  }
}

Profile.propTypes = {

};

export default Profile;