import React, { useContext } from 'react';

import classes from './Filters.module.css';
import { FilterContext } from '../../App';
const Filters = props => {
  const filter = useContext(FilterContext);

  return (
    <div className={classes.filters}>
      <ul>
        <li
          onClick={() => props.changeFilter('top_rated')}
          className={filter === 'top_rated' ? classes.active : ''}
        >
          #top movies
        </li>
        <li
          href='#upcoming_movies'
          onClick={() => props.changeFilter('upcoming')}
          className={filter === 'upcoming' ? classes.active : ''}
        >
          #upcoming movies
        </li>
        <li
          href='#now_playing_movies'
          onClick={() => props.changeFilter('now_playing')}
          className={filter === 'now_playing' ? classes.active : ''}
        >
          #now playing movies
        </li>
      </ul>
    </div>
  );
};
export default Filters;
