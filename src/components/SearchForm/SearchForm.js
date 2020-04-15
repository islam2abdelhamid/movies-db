import React, { useState } from 'react';

import classes from './SearchForm.module.css';
import { connect } from 'react-redux';
import { getMovieByTitle } from '../../stores/movies/actions';

const SearchForm = props => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = e => {
    setSearchInput(e.target.value);
  };
  const handleSearch = e => {
    e.preventDefault();
    props.searchByTitle(searchInput);
  };
  return (
    <div className={classes.topSearch}>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for a movie'
          className={classes.textInput}
          value={searchInput}
          onChange={handleChange}
          onKeyUp={handleSearch}
        />
        <input type='submit' className={classes.submitInput} value='' />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    searchByTitle: filter => dispatch(getMovieByTitle(filter))
  };
};
export default connect(null, mapDispatchToProps)(SearchForm);
