import React, {Component} from 'react'
import ShapeFactory from 'shapes/ShapeFactory'
import * as actions from '../actions'
import * as Utils from 'utils'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

require('./calculatorForm.scss');

class ShapeSelector extends Component {
	
	constructor(props){
		super(props)
		this.shapeTypes = ShapeFactory.getAllShapesList()
		this.shapeTitle = {}
		for(let shape of this.shapeTypes){
			this.shapeTitle[shape] = Utils.capitalize(shape)
		}
		this.state = {
			'selectedShapeType': '',
			'error': ''
		}
		this.handleRadioChange = this.handleRadioChange.bind(this)
		this.submitForm = this.submitForm.bind(this)
		this.resetForm = this.resetForm.bind(this)
	}

	render(){
		let {selectedShapeType, error} = this.state
		return(
			<div className="calculatorForm">
				<h1 className="calculatorForm__title">Step 1: Select your Shape</h1>
				<p className="calculatorForm__helperText">
					Please select the shape that you would like to calculate the area of and press 
					the button "Go to step 2"
				</p>
				<form action="" className="calculatorForm__form">
					{this.shapeTypes.map( (shape) => (
						<label for={shape} className="radio_label">
							<input id={shape} type="radio" name='shape' value={shape} checked={shape == selectedShapeType} onChange={this.handleRadioChange}/>
							{this.shapeTitle[shape]}
						</label> 
					))}
				</form>
				<div className="calculatorForm-actionContainer">
					{
						error ? <p className="calculatorForm__error">{error}</p> : <noscript></noscript>
					}
					<input type="button" value="Go To step 2" className="calculatorForm__button calculatorForm__button-submit" 
						onClick={this.submitForm}/>
					<input type="button" value="Cancel" className="calculatorForm__button" onClick={this.resetForm}/>
				</div>
			</div>
		)
	}

	handleRadioChange(event){
		let value = event.target.value
		this.setState({
			'selectedShapeType': value,
			'error': ''
		})
	}

	submitForm(event){
		let {selectedShapeType} = this.state
		if(!selectedShapeType){
			this.setState({
				'error': 'Select a shape and we can go to step 2'
			})
		}
		else{
			let _shape = ShapeFactory.getShape(selectedShapeType)
			this.props.actions.setShape({shape: _shape}).then(() => browserHistory.push('/step2'))
		}
	}

	resetForm(){
		this.setState({
			'selectedShapeType': '',
			'error': ''
		})
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(ShapeSelector)