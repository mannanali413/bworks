import Shape from './Shape'
import * as Utils from 'utils'

export default class Ellipse extends Shape{
	
	constructor(){
		let dimensions = {
			'major': 0,
			'minor': 0
		}
		super('ellipse', dimensions)
	}

	computeArea(){
		let {major, minor} = this._dimensions
		let area = (Math.PI*major * minor)
		this.computedArea = area;
	}
}