import axios from '../../backend/axios-movies';

import * as actionTypes from './actionTypes';

const apiKey = 'api_key=4a50b045ff5987a6014e4f8681052944';

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_STARTED
  };
};

export const fetchFail = errors => {
  return {
    type: actionTypes.FETCH_FAILED,
    errors
  };
};

export const fetchSuccess = movies => {
  return {
    type: actionTypes.FETCH_SUCCEEDED,
    movies
  };
};

const searchMovie = query => {
  return {
    type: actionTypes.SEARCH_MOVIE,
    query
  };
};

export const getMovieByTitle = query => {
  return dispatch => {
    dispatch(searchMovie(query));
  };
};

export const fetchMovies = filter => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .get(filter + '?' + apiKey)
      .then(res => {
        dispatch(fetchSuccess(res.data.results));
      })
      .catch(err => {
        return dispatch(fetchFail(err));
      });
  };
};
