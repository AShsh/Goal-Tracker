import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import User from './User';

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <Navigation />
        <User
          name={this.props.name}
          avatar={this.props.avatar}
        />
      </div>
    )
  }
}

Header.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string
}

Header.defaultProps = {
  avatar: '',
  name: ''
};

function mapStateToProps(state) {
  return {
    name: state.user.name,
    // TODO avatar
    avatar: state.user.avatar
  }
}

export default connect(mapStateToProps)(Header);