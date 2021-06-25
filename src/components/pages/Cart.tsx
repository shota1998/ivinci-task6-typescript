import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Container } from '@material-ui/core';

import { IRootState, IItem } from '../../interface';
import useStyles from './Cart.style';
import CartItem from '../CartItem';

const Cart = () => {
  console.log('--- Cart()');
  useSelector((state: IRootState): number => state.cart.items.length);

  const classes = useStyles();
  const items: IItem[] = useSelector<IRootState, IItem[]>(
    (state) => state.cart.items
  );

  return (
    <>
      <Container maxWidth='sm'>
        <Typography
          variant='h5'
          align='center'
          color='textSecondary'
          gutterBottom
        >
          Your Shopping Cart
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
