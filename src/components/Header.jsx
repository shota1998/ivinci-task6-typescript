import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Toolbar } from '@material-ui/core';

import useStyles from './Header.style';
import GoCartButton from './UI/GoCartButton.jsx';

const Header = () => {
  console.log('--- Header()');
  const classes = useStyles();

  return (
    <Toolbar position='relative' className={classes.root}>
      <Link to='/' style={{ textDecoration: 'none' }} className={classes.title}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.title_font}
        >
          ReduxCart
        </Typography>
      </Link>

      <GoCartButton>CART</GoCartButton>
    </Toolbar>
  );
};

export default Header;
