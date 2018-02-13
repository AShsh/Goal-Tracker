import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';

import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

import UserSettings from '../components/UserSettings';

class User extends Component {

  state = {
    openSettings: false,
  };

  handleOpenSettings = () => {
    this.setState({ openSettings: true });
  };

  handleCloseSettings = () => {
    this.setState({ openSettings: false });
  };

  handleSubmitSettings = (nameValue) => {
    if (nameValue) {
      this.props.actions.changeUserSettings(nameValue);
    }
    this.setState({ openSettings: false });
  };

  render() {
    return (
      <div>
        <ListItem
          onClick={this.handleOpenSettings}
          leftAvatar={
            <Avatar src={this.props.avatar} />
          } >
          {this.props.name}
        </ListItem>

        <UserSettings
          openSettings={this.state.openSettings}
          handleCloseSettings={this.handleCloseSettings}
          handleSubmitSettings={this.handleSubmitSettings} />

      </div>
    )
  }
}

User.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  actions: PropTypes.shape({
    changeUserSettings: PropTypes.func.isRequired
  }),
}

User.defaultProps = {
  avatar: '',
  name: ''
};

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
