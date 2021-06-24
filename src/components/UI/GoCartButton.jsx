import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';

import { getTotalQuantity } from '../../redux/selectors';
import useStyles from './GoCartButton.style';

const GoCartButton = ({ children }) => {
  console.log('--- GoCartButton()');

  const classes = useStyles();
  const total = useSelector(getTotalQuantity);

  return (
    <Link to='/cart' style={{ textDecoration: 'none' }}>
      <Button className={classes.button} size='small' variant='outlined'>
        <Typography>{children}</Typography>
        <Typography className={classes.badge}>{total}</Typography>
      </Button>
    </Link>
  );
};

export default GoCartButton;
