import React, {Component} from 'react'
import ShapeFactory from 'shapes/ShapeFactory'
import * as actions from '../actions'
import * as Utils from 'utils'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

require('./calculatorForm.scss');

class ShapeDimensions extends Component {
	
	constructor(props){
		super(props)
		this.dimensions = {}
		for(let dimension in this.props.dimensions){
			this.dimensions[dimension] = this.props.dimensions[dimension]
		}
		this.state = {
			'dimensions': this.dimensions,
			'error': ''
		}
		this.handleTextChange = this.handleTextChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
		this.resetForm = this.resetForm.bind(this)
	}

	componentWillMount(){
		if(!this.dimensions || Object.keys(this.dimensions).length == 0){
			this.resetForm()
		}
	}

	componentWillUnmount(){
		actions.clearShape()
	}

	render(){
		let {dimensions, error} = this.state
		let {shapeType} = this.props
		return(
			<div className="calculatorForm">
				<h1 className="calculatorForm__title">Step 2: Insert your values</h1>
				<p className="calculatorForm__helperText">
					You have selected a 
					<strong>{` ${shapeType}`}</strong>, please input the required variables.
				</p>
				<div className="calculatorForm__form">
					{Object.keys(dimensions).map( (dimension) => (
						<label for={dimension} className="text_label">
							{`${Utils.capitalize(dimension)}: `}
							<input id={dimension} type="text" value={dimensions[dimension]} 
									autocomplete="off"
									name={dimension} onChange={this.handleTextChange}/>
						</label> 
					))}
				</div>
				<div className="calculatorForm-actionContainer">
					{
						error ? <p className='calculatorForm__error'>{error}</p> : <noscript></noscript> 
					}
					<input type="button" value="Go To step 3" className="calculatorForm__button calculatorForm__button-submit" 
						onClick={this.submitForm}/>
					<input type="button" value="Cancel" className="calculatorForm__button" onClick={this.resetForm}/>
				</div>
			</div>
		)
	}

	handleTextChange(event){
		let {name, value} = event.target
		let {dimensions} = this.state
		dimensions[name] = value
		this.setState({
			dimensions: dimensions,
		})
	}

	submitForm(event){
		let {dimensions} = this.state
		let allSet = true
		for(let dimension in dimensions){
			if(dimensions[dimension] === ''){
				allSet = false
			}
		}
		if(!allSet){
			this.setState({
				'error': 'Need numeric values for all fields'
			})
		}
		else{
			this.props.actions.setDimensionAndComputeArea(dimensions).then((action) => {
				if(action.error){
					this.setState({
						'error': 'Need numeric values for all fields'
					})
				}
				else{
					browserHistory.push('/step3')
				}
			})
		}
	}

	resetForm(){
		browserHistory.push('/')
	}
}

function mapStateToProps(state){
	let shape = state['shape']
	let dimensions = {}
	let shapeType = ''
	if(shape && shape.dimensions){
		dimensions = shape.dimensions
		shapeType = shape.shapeType
	}
	return {
		'dimensions': dimensions,
		'shapeType': shapeType
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeDimensions)