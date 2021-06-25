import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Toolbar, Button } from '@material-ui/core';

import { getTotalQuantity } from '../redux/selectors';
import useStyles from './Header.style';

const Header = () => {
  console.log('--- Header()');
  const classes = useStyles();
  const total = useSelector(getTotalQuantity);
  const x: string = 'relative';

  return (
    <Toolbar className={classes.root}>
      <Link to='/'>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
        >
          ReduxCart
        </Typography>
      </Link>
      <Link to='/cart' style={{ textDecoration: 'none' }}>
        <Button className={classes.button} size='small' variant='outlined'>
          <Typography>Cart</Typography>
          <Typography className={classes.badge}>{total}</Typography>
        </Button>
      </Link>
    </Toolbar>
  );
};

export default Header;
