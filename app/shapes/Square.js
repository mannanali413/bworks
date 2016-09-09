import Shape from './Shape'

export default class Square extends Shape{
	
	constructor(){
		let dimensions = {
			'side': 0
		}
		super('square', dimensions)
	}

	computeArea(){
		let {side} = this._dimensions
		let area = (side * side)
		this.computedArea(area);
	}
}