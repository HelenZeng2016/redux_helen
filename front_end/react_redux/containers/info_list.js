'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import StudentInfo from '../component/student_info';
import * as actions from '../actions/action';

function mapStateToProps(state) {
  return{
    stuInfo: state.info
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initInfo: () => {
      dispatch(actions.initInfo());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);