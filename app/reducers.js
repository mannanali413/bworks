import { handleActions } from 'redux-actions'

import * as constants from './constants';

const defaultState = {
	shape: null,
}

export default handleActions(Object.assign({}, {
	[constants.SET_SHAPE] (state, action){
		let newState = Object.assign({}, state);
		newState.shape = action.payload.shape;
		return newState;
	},

	[constants.CLEAR_SHAPE] (state, action){
		let newState = Object.assign({}, state)
		newState.shape = null
		return newState;
	}

}), defaultState);