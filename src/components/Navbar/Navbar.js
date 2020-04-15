import React from 'react';

import classes from './Navbar.module.css';
import Logo from './logo.png';

const Navbar = props => (
  <nav className={classes.navbar}>
    <div className={classes.logo}>
      <a href='/'>
        <img className={classes.logo} alt='logo' src={Logo} height='45' />
      </a>
    </div>

    <ul className={classes.navList}>
      <li>
        <a href='#'>Home</a>
      </li>
      <li>
        <a href='#'>Favorite</a>
      </li>
    </ul>
  </nav>
);
export default Navbar;
