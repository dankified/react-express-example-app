//Import dependencies
import React from 'react';
import AnimalList from './AnimalList';

class App extends React.Component {
	//Define constructor function to be able to define state
	constructor() {
		//Call super to be able to set state
		super();
		//Set the state object with one property animalList that
		//by default will be assigned an empty array
		this.state = {
			animalList: []
		}
	}
	
	//Render jsx
	render() {
		return (
			// Render AnimalList component with list prop equals to
			//animalList state property
			<div>
				<h1>The Animal List App!</h1>
				<AnimalList list={this.state.animalList} />
			</div>
		)
	}
}

export default App;