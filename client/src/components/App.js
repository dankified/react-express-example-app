//Import dependencies
import React from 'react';
// import BreweriesList from '.BreweriesList';
import Slideshow from './slideshow';
// import SearchBar from './searchBar';
import axios from 'axios';
import SearchBar from "./searchBar.js";
import Footer from "./footer.js"

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
		this.setState({ breweriesList });
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
		return <div id="maincontainer">
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
				<h3 id="featured" >This month's featured breweries.</h3>
				</div>
        <div>
          <Slideshow id='slideshow' />
          {this.state.hasList === false ? null : <BreweriesList breweriesList={this.state.breweriesList} />}
        </div>
        <div id='footer' >
          <Footer />
        </div>
      </div>;
	}
}

export default App;

// TODO!!  make the city search box also scroll the page down to the card section

// { this.state.breweriesList != [] && <BreweriesList breweries={this.state.breweriesList} /> }
