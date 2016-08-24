'use strict';

require("./sass/test.sass");

import 'babel-polyfill'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

let element = document.getElementById('root');
if (element) {
  ReactDOM.render(<Root />, element)
}