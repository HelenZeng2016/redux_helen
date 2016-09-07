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

//info Action

export function initInfo(info) {
  return {
    type: actionType.INIT_INFO,
    data: info
  }
}

export function addInfo(info) {
  return{
    type: actionType.ADD_INFO,
    data: info
  }
}

export function deleteInfo(info) {
  return{
    type: actionType.DELETE_INFO,
    data: info
  }
}

export function updateInfo(info) {
  return{
    type: actionType.UPDATE_INFO,
    data: info
  }
}
