import React, { Component } from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { setLanguage } from '../i18n/lang';
import { CURRENT_LANG } from '../constants/lang';

import '../styles/App.css';

import Header from './Header';
import Goals from './Goals';
import Footer from '../components/Footer';

class App extends Component {

  componentWillMount() {
    setLanguage(CURRENT_LANG);
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className='app'>
            <Header />
            <div className='content'>
              <Switch>
                <Route exact path='/' component={Goals} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;