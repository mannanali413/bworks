import Shape from './Shape'

export default class Circle extends Shape{
	
	constructor(){
		let dimensions = {
			'diameter': 0
		}
		super('circle', dimensions)
	}

	computeArea(){
		let {diameter} = this._dimensions
		let area = (Math.pi * diameter * diameter)/4
		this.computedArea(area);
	}
}