import React from 'react';

const SearchBar = (props) => {
  return(
    <form onSubmit={props.getBrews}>
      <input name="city" placeholder="Beer is good!"></input>
      <button>Submit</button>
    </form>
  )
}

export default SearchBar;
