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
		this._dimensions = value
	}

	get computedArea(){
		return this._area;
	}

	set computedArea(value){
		this._area = value
	}

	getShapeInfo(){
		let infoArray = []
		let qString = `You have computed the area of ${this._type} with a `
		for(let key in this._dimensions){
			infoArray.push(`${key} of ${this._dimensions[key]}`)
		}
		let dimensionInfo = infoArray.join(" and ")
		qString = `${qString} ${dimensionInfo}.Below is your result`
		return qString
	}
}