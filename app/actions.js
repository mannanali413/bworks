import { createAction } from 'redux-actions';

import * as constants from './constants';

export const setShape = createAction(constants.SET_SHAPE, payload => new Promise((resolve, reject) => {
	resolve(payload);
}))

export const clearShape = createAction(constants.CLEAR_SHAPE, payload => new Promise((resolve, reject) => {
	resolve(payload);
}))