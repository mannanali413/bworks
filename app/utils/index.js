export function capitalize(inString){
	if(inString){
		return `${String(inString[0]).toUpperCase()}${inString.slice(1)}`
	}
	else return ""
}

export function getParsedDimensions(dimensions){
	if(!dimensions){
		throw new TypeError("need dimensions object for the shape");
	}
	if(dimensions === Object(dimensions)){
		let _dimensions = {}
		let dimKeys = Object.keys(dimensions)
		for(let dimension of dimKeys){
			let temp = parseFloat(dimensions[dimension])
			if(!isNaN(temp)){
				_dimensions[dimension] = temp
			}
			else{
				throw new TypeError("fed wrong dimension to shape")
			}
		}
		return _dimensions
	}
	else{
		throw new TypeError("need dimensions object for the shape");
	}
}