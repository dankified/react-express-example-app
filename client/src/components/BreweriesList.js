import React from 'react';
import { Grid } from 'semantic-ui-react';
//Card, Image,
import Brewery from "./brewery.js";

import  brew1 from '../styles/images/brew1.jpg'
import  brew2 from '../styles/images/brew2.jpg'
import  brew3 from '../styles/images/brew3.jpg'

let pics = [brew1, brew2, brew3]

let randomPic = pics[Math.floor(Math.random() * pics.length)]

const BreweriesList = (props) => {
  return(
    <Grid columns='equal' centered>
      {props.breweriesList.map((brewery, index) => {
        return <Brewery className="brewcards" pic={randomPic} key={index} brewery={brewery} />
      })}
    </Grid>
  )
}

export default BreweriesList;
