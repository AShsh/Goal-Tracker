import React, { Component } from 'react';

import { i18n } from '../i18n/lang';

import { NavLink } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';

class Navigation extends Component {

  render() {
    return (
      <div className='navigation'>
        <NavLink exact to='/' >
          <RaisedButton primary={true}>
            {i18n.t('navigation_calendar')}
          </RaisedButton>
        </NavLink>
      </div>
    )
  }
}

export default Navigation;
