/**
 * Copyright 2016-present Greg Hurrell. All rights reserved.
 * Licensed under the terms of the MIT license.
 *
 * @flow
 */

import {call, put, take} from 'redux-saga/effects';
import loadConfig from './loadConfig';

/**
 * Root saga, started when application boots.
 */
export default function* saga(getState) {
  const config = yield call(loadConfig);
  yield put({type: 'CONFIG_LOADED', config});
}
