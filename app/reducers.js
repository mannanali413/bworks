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
	},

	[constants.SET_DIM_AND_COMPUTE_AREA] (state, action){
		let newState = Object.assign({}, state)
		if(!action.error){
			newState.shape.dimensions = action.payload
			newState.shape.computeArea()
		}
		return newState;
	}

}), defaultState);