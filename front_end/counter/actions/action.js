'use strict';

import * as actionType from '../contains/action_type';

//plus
export function incrementCount() {
  return{
    type: actionType.INCREMENT
  }
}

//minus
export function decrementCount() {
  return{
    type: actionType.DECREMENT
  }
}