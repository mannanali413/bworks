export function capitalize(inString){
	if(inString){
		return `${String(inString[0]).toUpperCase()}{inString.slice(1)}`
	}
	else return ""
}