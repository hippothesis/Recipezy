/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

import { combineReducers } from 'redux';

import navigationReducer from './NavigationReducer';
import shoppingListReducer from './ShoppingListReducer';

/*
 * Return the next state given the current state and an action to
 * handle
 */
const rootReducer = combineReducers({
  navigation: navigationReducer,
  shoppingList: shoppingListReducer
});

export default rootReducer;