'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import root from '../component/root';
import * as actions from '../actions/action';

function mapStateToProps(state) {

  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);

  // {
  // incrementCount: () => {
  //   dispatch(actions.incrementCount());
  // },
  // decrementCount: () => {
  //   dispatch(actions.decrementCount());
  // }
  // };
}

export default connect(mapStateToProps, mapDispatchToProps)(root);
