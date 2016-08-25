'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import root from '../component/root';
import * as actions from '../actions/action';

function mapStateToProps(state) {
  return {
     counter: state
  }
}

function mapDispatchToProps(dispatch) {
  return{
    incrementCount: () => {
      dispatch(actions.incrementCount());
    },
    decrementCount: () => {
      dispatch(actions.decrementCount());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(root);
