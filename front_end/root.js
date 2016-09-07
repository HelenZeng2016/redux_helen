'use strict';

import React, {Component} from 'react';
import Counter from './react_redux/containers/counter'
import InfoListContainer from './react_redux/containers/info_list';

export default class Root extends Component{
  render() {
    return(
      <div>
        <Counter />
        <InfoListContainer />
      </div>
    )
  }
}