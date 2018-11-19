import React from 'react'
import { Card, Image, Grid, } from 'semantic-ui-react';
// Segment
const cards ={
  width:'300px',
  height: '350px',

  margin: '10px'
}

class Brewery extends React.Component {
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
   <Image id='cardimages' src={this.props.pic} alt="alt" />
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

export default Brewery;
