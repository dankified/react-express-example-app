import React from 'react'
import { Card, Image, Grid, Segment } from 'semantic-ui-react';

const cards = {
  width: '300px',
  height: '300px',
  margin: '10px'
}

const Brewery = (props) => (
  <div style={cards}>
    <Grid.Column>
      <Grid.Row>
        <Card style={cards}>
          <Image src='https://www.maxpixel.net/static/photo/2x/Beer-Glass-Drink-3137819.jpg' />
          <Card.Content>
            <Card.Header>{props.brewery.name}</Card.Header>
            <Card.Meta>
              <span>{props.brewery.website_url}</span><br />
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

export default Brewery;
