import React, { useState, useEffect } from 'react';

import classes from './Movie.module.css';

const favoriteMovies =
  JSON.parse(localStorage.getItem('favorite_movies')) || [];

const Movie = props => {
  const handleFavorite = (e, id) => {
    if (favoriteMovies.includes(id)) {
      favoriteMovies.splice(favoriteMovies.indexOf(id), 1);
      e.target.classList.remove('fa-heart');
      e.target.classList.remove(classes.heartRed);
      e.target.classList.add('fa-heart-o');
      e.target.classList.add(classes.heart);
    } else {
      e.target.classList.remove('fa-heart-o');
      e.target.classList.remove(classes.heart);
      e.target.classList.add('fa-heart');
      e.target.classList.add(classes.heartRed);
      favoriteMovies.push(id);
    }
    localStorage.setItem('favorite_movies', JSON.stringify(favoriteMovies));
    console.log(localStorage.getItem('favorite_movies'));
  };
  return (
    <div className={classes.movieCard}>
      <div className={classes.movieImg}>
        <img
          src={'https://image.tmdb.org/t/p/w300/' + props.poster_path}
          alt='movie'
        />
      </div>
      <div className={classes.movieBody}>
        <h3 className={classes.textCenter}>{props.title}</h3>
        <div className={classes.textCenter}>
          <i className={classes.star + ' fa fa-star'} aria-hidden='true'></i>
          <span> {props.vote_average}/10</span>
        </div>
      </div>
      <div className={classes.cardOverly}>
        <i
          className={
            (favoriteMovies.includes(props.id) &&
              classes.heartRed + ' fa fa-heart ') ||
            classes.heart + ' fa fa-heart-o '
          }
          aria-hidden='true'
          onClick={e => {
            handleFavorite(e, props.id);
          }}
        ></i>
      </div>
    </div>
  );
};
export default Movie;
