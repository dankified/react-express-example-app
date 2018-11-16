//Import dependencies
import React from 'react';

//Create AnimalList component
class AnimalList extends React.Component {

	render() {
		return (
			<div id="animal-list">
				{this.props.list.map((el) => {
					return (
						<div>
							<p>Name: {el.name}</p>
							<img src={el.image} alt={el.name}/>
						</div>
					)
				})}
			</div>
		)
	}

}

export default AnimalList;