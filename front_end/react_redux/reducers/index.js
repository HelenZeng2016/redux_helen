'use strict';

import {combineReducers} from 'redux';
import counter from './counter';
import info from './info';

const RootReducer = combineReducers({counter, info});
export default RootReducer;