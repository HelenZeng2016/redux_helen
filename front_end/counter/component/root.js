'use strict';

import React, {Component} from 'react';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {incrementCount, decrementCount, counter} = this.props;
    console.log(incrementCount);
    console.log(counter);
    return (
      <div className="container">
        <div className="text">Hello Redux</div>
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