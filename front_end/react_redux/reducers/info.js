'use strict';

import * as actionType from '../contains/action_type';
import allStuInfo from '../shared/info_json';

export default function info(state={stuInfo:[]}, action){
  switch (action.type){
    case actionType.INIT_INFO:  
      let information;
      for(var i=0; i<allStuInfo.length; i++){
        information = allStuInfo[i];
        state.stuInfo.push(information);
      }
      return {stuInfo: [...state.stuInfo]};
    default:
      return state;
  }

}