import React, { useContext } from 'react';

import classes from './Filters.module.css';
import { FilterContext } from '../../App';
const Filters = props => {
  const filter = useContext(FilterContext);

  return (
    <div className={classes.filters}>
      <ul>
        <li>
          <a
            href='#top_movies'
            onClick={() => props.changeFilter('top_rated')}
            className={filter === 'top_rated' ? classes.active : ''}
          >
            #top movies
          </a>
        </li>
        <li>
          <a
            href='#upcoming_movies'
            onClick={() => props.changeFilter('upcoming')}
            className={filter === 'upcoming' ? classes.active : ''}
          >
            #upcoming movies
          </a>
        </li>
        <li>
          <a
            href='#now_playing_movies'
            onClick={() => props.changeFilter('now_playing')}
            className={filter === 'now_playing' ? classes.active : ''}
          >
            #now playing movies
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Filters;
