import React, { Component } from 'react'
import { Card, Image, Grid, Segment } from 'semantic-ui-react';
import '../styles/brewery.css';

const cards ={
  width:'300px',
  height: '350px',

  margin: '10px'
}

<<<<<<< HEAD
class Brewery extends Component {

  constructor() {
    super()
    this.state = {
      on: false
    }
  }

  toggleVisibility = () => {
    if (this.state.on === false) {
      this.setState({ on: true})
    } else {
      this.setState({on: false})
    }
  }


  render() {
    return (
      <div style={cards}>
      <Grid.Column>
        <Grid.Row>
    <Card onClick={this.toggleVisibility} style={cards}>
      <Image src='https://www.maxpixel.net/static/photo/2x/Beer-Glass-Drink-3137819.jpg' />
      <Card.Content>
        <Card.Header>{this.props.brewery.name}</Card.Header>
        <p id="butts">Brewery Type: {this.props.brewery.brewery_type}</p>
        <Card.Meta id={this.state.on ? "show" : "hide"}>
          <span>{this.props.brewery.website_url}</span><br/>
          <span>{this.props.brewery.street}</span>
          <span>{this.props.brewery.city}</span>
          <span>{this.props.brewery.state}</span>
          {/* <span>{this.props.brewery.postal_code}</span> */}
        </Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
    </Card>
      </Grid.Row>
    </Grid.Column>
    </div>

    )
  }
}
=======
const Brewery = (props) => (
  <div style={cards}>
    <Grid.Column>
      <Grid.Row>
  <Card style={cards}>
    <Image src={props.pic} alt="alt" />
    <Card.Content>
      <Card.Header>{props.brewery.name}</Card.Header>
      <Card.Meta>
        <span>{props.brewery.website_url}</span><br/>
        <span>{props.brewery.street}</span>
        <span>{props.brewery.city}</span>
        <span>{props.brewery.state}</span>
      </Card.Meta>
      <Card.Description></Card.Description>
    </Card.Content>
  </Card>
    </Grid.Row>
  </Grid.Column>
  </div>
)
>>>>>>> 6f67ef25f8cd5756a1cb602cbea6d6c642ecd3b5

export default Brewery;
