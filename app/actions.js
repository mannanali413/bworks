import { createAction } from 'redux-actions';

import * as constants from './constants';
import * as Utils from 'utils'

export const setShape = createAction(constants.SET_SHAPE, payload => new Promise((resolve, reject) => {
	resolve(payload);
}));

export const setDimensionAndComputeArea = createAction(constants.SET_DIM_AND_COMPUTE_AREA, 
							payload => new Promise((resolve,reject) => {
								try{
									let parsedDimensions = Utils.getParsedDimensions(payload)							
									resolve(parsedDimensions);
								}
								catch(e) {
									return reject(e)
								}
}));

export const clearShape = createAction(constants.CLEAR_SHAPE, payload => new Promise((resolve, reject) => {
	resolve(payload);
}));