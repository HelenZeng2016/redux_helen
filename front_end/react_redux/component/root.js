'use strict';

import React, {Component} from 'react';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('render react_redux');

    const {incrementCount, decrementCount, counter} = this.props;
    console.log(this.props.counter);
    
    return (
      <div className="container">
        <div className='counter'>
          <p>
            Clicked: {counter} times
            {' '}
            <button onClick={incrementCount}> +</button>
            {' '}
            <button onClick={decrementCount}> -</button>
          </p>
        </div>
      </div>
    )
  }
}