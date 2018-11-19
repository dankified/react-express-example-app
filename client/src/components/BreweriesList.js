import React from 'react';
import { Grid } from 'semantic-ui-react';
//Card, Image,
import Brewery from "./brewery.js";

import  brew1 from '../styles/images/brew1.jpg'
import  brew2 from '../styles/images/brew2.jpg'
import  brew3 from '../styles/images/brew3.jpg'
import  brew4 from '../styles/images/brew4.jpg'
import  brew6 from '../styles/images/brew6.jpg'
import  brew7 from '../styles/images/brew7.jpg'
import  brew8 from '../styles/images/beer8.jpg'
import  brew9 from '../styles/images/beer9.jpg'
import  brew10 from '../styles/images/beer10.jpg'
import  brew12 from '../styles/images/beer12.jpg'
import  brew13 from '../styles/images/beer13.jpg'
import  brew14 from '../styles/images/beer14.jpg'
import  brew15 from '../styles/images/beer15.jpg'
import  brew16 from '../styles/images/beer16.jpg'
import  brew17 from '../styles/images/beer17.jpg'
import  brew18 from '../styles/images/beer18.jpeg'




let pics = [brew1, brew2, brew3,brew4,brew6,brew7,brew8,brew9,brew10,brew12,brew13,
brew14,brew15,brew16,brew17,brew18]



const BreweriesList = (props) => {
  return(
    <Grid columns='equal' centered>
      {props.breweriesList.map((brewery, index) => {
        let randomPic = pics[Math.floor(Math.random() * pics.length)];
        return <Brewery className="brewcards" pic={randomPic} key={index} brewery={brewery} />
      })}
    </Grid>
  )
}

export default BreweriesList;
