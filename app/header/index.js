import React, {Component} from 'react'

require('./header.scss')

export default class Header extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className='header'>
				<h1 className='header__title'>Shape Calculator</h1>
			</div>
		)
	}
}