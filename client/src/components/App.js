//Import dependencies
import React from 'react';
// import BreweriesList from '.BreweriesList';
import Slideshow from './slideshow';
// import SearchBar from './searchBar';
import axios from 'axios';
import SearchBar from "./searchBar.js";

class App extends React.Component {
	//Define constructor function to be able to define state
	constructor() {
		//Call super to be able to set state
		super();
		//Set the state object with one property animalList that
		//by default will be assigned an empty array
		this.state = {
			breweriesList: []
		}
		this.updateBreweriesList = this.updateBreweriesList.bind(this);
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
			this.setState({ breweriesList: data })
			console.log(data)
		})

	}

	// componentDidMount() {
	// 	axios.get('/animals').then((data) => {
	// 		this.updateAnimalList(data.data.data);
	// 	})
	// }

	//Render jsx
	render() {
		return (
			// Render AnimalList component with list prop equals to
			//animalList state property
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
				{/* <AnimalList list={this.state.animalList} /> */}
				</div>
			</div>
		)
	}
}

export default App;
