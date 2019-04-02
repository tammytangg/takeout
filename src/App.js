import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {GlobalResetStyle}  from './style.js';
import BottomBar from './common/BottomBar'
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <GlobalResetStyle/>
         <BottomBar/>
      </Provider>
    );
  }
}

export default App;
