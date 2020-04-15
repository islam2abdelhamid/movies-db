import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';
import Logo from './logo.png';

const Navbar = props => (
  <nav className={classes.navbar}>
    <div className={classes.logo}>
      <NavLink to='/'>
        <img className={classes.logo} alt='logo' src={Logo} height='45' />
      </NavLink>
    </div>

    <ul className={classes.navList}>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/favorite'>Favorite</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
