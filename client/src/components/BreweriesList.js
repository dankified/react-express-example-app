import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import Brewery from "./brewery.js";

const BreweriesList = (props) => {
  return(
    <Grid columns='equal' centered>
      {props.breweriesList.map((brewery, index) => {
        return <Brewery key={index} brewery={brewery} />
      })}
    </Grid>
  )
}

export default BreweriesList;
