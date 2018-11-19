//Import dependencies
import React from 'react';

// import BreweriesList from '.BreweriesList';
import Slideshow from './slideshow';
// import SearchBar from './searchBar';
import axios from 'axios';
import SearchBar from "./searchBar.js";
import Footer from "./footer.js";
import { Modal, Button, Grid, Row, Col } from "react-bootstrap";


import BreweriesList from './BreweriesList.js';

class App extends React.Component {
	//Define constructor function to be able to define state
	constructor() {
		//Call super to be able to set state
		super();
		this.updateBreweriesList = this.updateBreweriesList.bind(this);
	}

	state = {
		breweriesList: [],
		hasList: false,
		showVerification: true
	}

	updateBreweriesList(breweriesList) {
		console.log(breweriesList);
		this.setState({ breweriesList });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
			.then((res) => {
				let data = res.data;
				this.setState({ breweriesList: data, hasList: true }, document.getElementById('button').scrollIntoView())
				console.log(data)
			})
	}

	verifyYes = () => {
		this.setState( { showVerification: false } )
	}

	verifyNo = () => {
		window.location.href = 'https://www.disney.com/';
	}

	//Render jsx
	render() {
		return (

			<div>
				<Grid>
			    <Modal show={this.state.showVerification} onHide={this.handleClose} backdrop="static">
						<Modal.Header>Please verify your Age</Modal.Header>
						<Modal.Body>
							<h1>Are you over 21?</h1>
							  <Row className="show-grid">
							    <Col xs={6}>
										<Button block onClick={this.verifyYes}>Yes, let me in.</Button>
							    </Col>
							    <Col xs={6}>
										<Button block onClick={this.verifyNo}>No. I want my mommy.</Button>
							    </Col>
							  </Row>
						</Modal.Body>
			    </Modal>
				</Grid>


				<div id="maincontainer">
					<div id="titlebox">
						<img id="logo" src="/beerBottle.png" alt="" />
						<span>LocalBrew</span>
					</div>
					<div id="slogan">
						<h3>Find Your Local Brewery!</h3>
					</div>
					<div id="searchbox">
						<SearchBar getBrews={this.handleSubmit} />
					</div>
					<div>
						<Slideshow id='slideshow' />
						{this.state.hasList === false ? null : <BreweriesList breweriesList={this.state.breweriesList} />}
					</div>
					<div id='footer' >
						<Footer />
					</div>
				</div>
			</div>

		)

	}
}

export default App;

// TODO!!  make the city search box also scroll the page down to the card section

// { this.state.breweriesList != [] && <BreweriesList breweries={this.state.breweriesList} /> }
