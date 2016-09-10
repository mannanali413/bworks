import * as Utils from 'utils'

export default class Shape {
	constructor(type, dimensions){
		if (new.target === Shape) {
      		throw new TypeError("Cannot construct Abstract instances directly");
    	}
    	if(this.computeArea === undefined ){
    		throw new TypeError("Must Override computeArea method")
    	}
		this._type = type
		this._dimensions = dimensions
		this._area = 0
	}

	get shapeType(){
		return this._type
	}

	get dimensions(){
		return this._dimensions
	}

	set dimensions(value){
		this._dimensions = Utils.getParsedDimensions(value)
	}

	get computedArea(){
		return this._area;
	}

	set computedArea(value){
		this._area = value
	}

}