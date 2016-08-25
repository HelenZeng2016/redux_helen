'use strict';

require("./counter/sass/test.sass");

import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './counter/containers/counter';
import reduces from './counter/reducers/counter'

const store = createStore(reduces);
const element = document.getElementById('root');

if (element) {
  ReactDOM.render(
    <Provider store={store}>
      <Counter />
    </Provider>,
    element
  )
}