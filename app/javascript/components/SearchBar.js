import React from 'react';

const SearchBar = props => {
  
  return(
    <div className='search-bar'>
      <label>Search</label>
      <input type='text' name='search' onChange={props.searchChange}/>
      {props.searchResults()}
    </div>
  )
}

export default SearchBar;
