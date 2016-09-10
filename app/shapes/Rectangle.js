import Shape from './Shape'

export default class Rectangle extends Shape{
	
	constructor(){
		let dimensions = {
			'length': 0,
			'width': 0
		}
		super('rectangle', dimensions)
	}

	computeArea(){
		let {length, width} = this._dimensions
		let area = (length * width)
		this.computedArea = area;
	}
}