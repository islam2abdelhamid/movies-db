import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';

import classes from './Movies.module.css';
import { fetchMovies } from '../../stores/movies/actions';
import Movie from '../../components/Movie/Movie';
import Spinner from '../../components/Spinner/Spinner';
import { FilterContext } from '../../App';

const Movies = props => {
  const filter = useContext(FilterContext);

  useEffect(() => {
    props.getMovies(filter);
  }, [filter]);
  return (
    <div className={classes.movieCards}>
      {(props.loading && <Spinner />) ||
        (props.movies.length === 0 && props.errors === false && (
          <h1 className={classes.textWhite}>No match found</h1>
        )) ||
        (props.errors && (
          <h1 className={classes.textWhite}>Server Error :(</h1>
        )) ||
        props.movies.map(movie => <Movie key={movie.id} {...movie} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  movies: state.searchResult,
  errors: state.errors,
  searchQuery: state.searchQuery
});

const mapDispatchToProps = dispatch => {
  return {
    getMovies: filter => dispatch(fetchMovies(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
