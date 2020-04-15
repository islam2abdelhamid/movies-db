/* eslint-disable default-case */
import * as actions from './actionTypes';
import { updateObject, runQuery } from '../../utils/utils';

const initialState = {
  movies: [],
  loading: false,
  errors: false,
  searchQuery: '',
  searchResult: [],
  favoriteMovies: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_STARTED:
      return updateObject(state, { loading: true });

    case actions.FETCH_SUCCEEDED:
      return updateObject(state, {
        movies: action.movies,
        loading: false,
        error: false,
        searchResult: action.movies
      });

    case actions.FETCH_FAILED:
      return updateObject(state, {
        loading: false,
        errors: action.errors
      });
    case actions.SEARCH_MOVIE:
      return updateObject(state, {
        searchQuery: action.query,
        searchResult: runQuery(state.movies, action.query)
      });
  }
  return state;
};

export default reducer;
