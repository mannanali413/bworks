import React, {Component} from 'react'
import ShapeFactory from 'shapes/ShapeFactory'
import * as actions from '../actions'
import * as Utils from 'utils'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

require('./calculatorForm.scss');

class ShapeAreaInfo extends Component {
	
	constructor(props){
		super(props)
		this.resetForm = this.resetForm.bind(this)
	}

	componentWillMount(){
		if(!this.props.shape){
			this.resetForm()
		}
	}

	componentWillUnmount() {
		actions.clearShape()
	}

	render(){
		let {shape} = this.props
		let showString = this.getShapeInfo()
		return(
			<div className="calculatorForm">
				<h1 className="calculatorForm__title">Step 3: Your Results</h1>
				<p className="calculatorForm__helperText">
					You have computed the area of 
					<strong>{` ${shape.shapeType} `}</strong> with a {showString}
				</p>
				<div className="calculatorForm__result">
					<p className="result_text">
						The Area is {Math.round(shape.computedArea * 100)/100}
					</p>
				</div>
				<div className="calculatorForm-actionContainer">
					<input type="button" value="Go To Step 1" className="calculatorForm__button" onClick={this.resetForm}/>
				</div>
			</div>
		)
	}

	resetForm(){
		browserHistory.push('/')
	}

	getShapeInfo(){
		let {shape} = this.props
		if(!shape){
			return ''
		}
		let infoArray = []
		for(let dimension in shape.dimensions){
			infoArray.push(`${dimension} of ${shape.dimensions[dimension]}`)
		}
		let dimensionInfo = infoArray.join(" and ")
		let qString = `${dimensionInfo}.Below is your result`
		return qString
	}
}

function mapStateToProps(state){
	let shape = state['shape']
	return {
		'shape': shape
	}
}

/* function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}*/

export default connect(mapStateToProps)(ShapeAreaInfo)