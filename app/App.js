import React, {Component} from 'react'
import Header from 'header'

const CalculatorDescription = () => (
		<div className="calculator-block calculator-description">
			<h1 className="title">Welcome to Shape Calculator</h1>
			<p className="calculator-description__para calculator-description__para-bold">
				Shape Calculator is an interactive web application. 
				To the right you will find the 3 step application. 
				Follow the instructions in each step. Clicking cancel will take you back to step 1. 
				Enjoy!
			</p>
			<p className="calculator-description__para">
				A small river named Duden flows by their place and supplies it with the necessary regelialia. 
				It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
			</p>
			<p className="calculator-description__para">
				Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
				One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
				The Big Oxmox advised her not to do so, because there were thousands of bad Commas.
			</p>
		</div>
	)

class CalculatorAside extends Component {
	constructor(props){
		super(props)
		this.handleImageLoad = this.handleImageLoad.bind(this);
	}

	render(){
		return(
			<aside className="calculator-block calculator-aside">
				<img onLoad={this.handleImageLoad} src="https://bombayworks.se/images/logo_circle.png" alt="bombayworks hiring assignment" />
			</aside>
		)
	}

	handleImageLoad(e){

	}
}

class App extends Component{
	
	constructor(props){
		super(props)
	}

	render() {
		return (
			<div style={{height: '100%'}}>
				<Header/>
				<div className="page">
					<div className="calculator-container">
						<CalculatorDescription/>
						<div className="calculator-block calculator-steps">
							{this.props.children}
						</div>
						<CalculatorAside/>
					</div>
				</div>
			</div>
		)
	}
}

export default App;