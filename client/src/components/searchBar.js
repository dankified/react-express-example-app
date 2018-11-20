import React from 'react';

const SearchBar = (props) => {
  return (
    <form onSubmit={props.getBrews}>
      <input id='citysearch'name="city" placeholder="City Name"></input>
      <button>Search</button>
    </form>
  )
}

export default SearchBar;
