import Shape from './Shape'

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
		let area = (Math.pi*major * minor)
		this.computedArea(area);
	}
}