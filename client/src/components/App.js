//Import dependencies
import React from 'react';
import BreweriesList from '.BreweriesList';
import axios from 'axios';

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
		this.updateBreweriesList = this.BreweriesList.bind(this);
	}

	updateBreweriesList(breweriesList) {
		console.log(breweriesList);
		this.setState({breweriesList});
	}
	
	componentDidMount() {
		axios.get('/animals').then((data) => {
			this.updateAnimalList(data.data.data);
		})
	}

	//Render jsx
	render() {
		return (
			// Render AnimalList component with list prop equals to
			//animalList state property
			<div>
				
				<AnimalList list={this.state.animalList} />
			</div>
		)
	}
}

export default App;
