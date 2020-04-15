import React, { useState } from 'react';

import classes from './FavoriteMovies.module.css';
import Movie from '../../components/Movie/Movie';
import Spinner from '../../components/Spinner/Spinner';

const FavoriteMovies = props => {
  const localMovies = localStorage.getItem('favorite_movies')
    ? JSON.parse(localStorage.getItem('favorite_movies'))
    : [];
  const [movies, setMovies] = useState(localMovies);

  const removeFromFavorite = id => {
    const newMovies = movies.filter(movie => movie.id !== id);
    setMovies(newMovies);
  };

  return (
    <div className={classes.movieCards}>
      {(props.loading && <Spinner />) ||
        (movies.length === 0 && (
          <h1 className={classes.textWhite}>No Favorite Movies</h1>
        )) ||
        movies.map(movie => (
          <Movie
            key={movie.id}
            removeMovie={removeFromFavorite}
            movie={{
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average
            }}
          />
        ))}
    </div>
  );
};

export default FavoriteMovies;
