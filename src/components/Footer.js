import React, { Component } from 'react';

import { i18n } from '../i18n/lang';

class Footer extends Component {

  render() {
    return (
      <div className='footer'>
        {i18n.t('footer_info')}
      </div>
    )
  }
}

export default Footer;