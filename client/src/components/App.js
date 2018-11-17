//Import dependencies
import React from 'react';
// import BreweriesList from '.BreweriesList';
import Slideshow from './slideshow';
// import SearchBar from './searchBar';
import axios from 'axios';
import SearchBar from "./searchBar.js";

import BreweriesList from './BreweriesList.js';

class App extends React.Component {
	//Define constructor function to be able to define state
	constructor() {
		//Call super to be able to set state
		super();

		// this.state = {
		// 	breweriesList: []
		// }
		this.updateBreweriesList = this.updateBreweriesList.bind(this);
	}

	state = {
		breweriesList: [],
		hasList: false
	}

	updateBreweriesList(breweriesList) {
		console.log(breweriesList);
		this.setState({breweriesList});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
		.then((res) => {
			let data = res.data;
			this.setState({ breweriesList: data, hasList: true })
			console.log(data)
		})
	}
	//Render jsx
	render() {
		return (

			<div id='maincontainer'>
				<div id="titlebox">
					<h1>
						LocalBrew
					</h1>
				</div>
				<div id='slogan'>
					<h3>Find Your Local Brewery!</h3>
				</div>
				<div id='searchbox'>
				<SearchBar getBrews={this.handleSubmit} />
				</div>
				<div>
				<Slideshow />
				{ this.state.hasList === false ? null : <BreweriesList breweriesList={this.state.breweriesList} /> }
				</div>
			</div>
		)
	}
}

export default App;

// { this.state.breweriesList != [] && <BreweriesList breweries={this.state.breweriesList} /> }
