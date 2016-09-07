'use strict';

require("./sass/main.sass");

import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Root from './root';
import RootReducer from './react_redux/reducers/index';

const store = createStore(RootReducer);
const element = document.getElementById('root');

if (element) {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    element
  )
}