import React from 'react';

const SearchBar = props => {

  return(
    <div className='search-bar'>
      <input type='text' name='search' placeholder='Search...' onChange={props.searchChange}/>
      <div className='search-bar-results'>
        {props.searchResults()}
      </div>
    </div>
  )
}

export default SearchBar;
