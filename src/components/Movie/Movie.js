import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Movie.module.css';

let favoriteMovies = localStorage.getItem('favorite_movies')
  ? JSON.parse(localStorage.getItem('favorite_movies'))
  : [];
const Movie = props => {
  const handleFavorite = (e, movie) => {
    if (favoriteMovies.some(el => el.id === movie.id)) {
      e.target.classList.remove('fa-heart', classes.heartRed);
      e.target.classList.add('fa-heart-o', classes.heart);
      if (props.location.pathname === '/favorite') {
        props.removeMovie(movie.id);
      }
      favoriteMovies = favoriteMovies.filter(item => item.id !== movie.id);
    } else {
      e.target.classList.remove('fa-heart-o', classes.heart);
      e.target.classList.add('fa-heart', classes.heartRed);
      favoriteMovies.push(movie);
    }

    localStorage.setItem('favorite_movies', JSON.stringify(favoriteMovies));
  };
  return (
    <div className={classes.movieCard}>
      <div className={classes.movieImg}>
        <img
          src={'https://image.tmdb.org/t/p/w300/' + props.movie.poster_path}
          alt={props.movie.title}
        />
      </div>
      <div className={classes.movieBody}>
        <h3 className={classes.textCenter}>{props.movie.title}</h3>
        <div className={classes.textCenter}>
          <i className={classes.star + ' fa fa-star'} aria-hidden='true'></i>
          <span> {props.movie.vote_average}/10</span>
        </div>
      </div>
      <div className={classes.cardOverly}>
        <i
          className={
            (favoriteMovies.some(el => el.id === props.movie.id) &&
              classes.heartRed + ' fa fa-heart ') ||
            classes.heart + ' fa fa-heart-o '
          }
          aria-hidden='true'
          onClick={e => {
            handleFavorite(e, props.movie);
          }}
        ></i>
      </div>
    </div>
  );
};
export default withRouter(Movie);
