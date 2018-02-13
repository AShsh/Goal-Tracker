import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>

), document.getElementById('root'));