import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  CardActions,
  CardContent,
  Grid,
  Card,
} from '@material-ui/core';

import { IItem } from '../interface'
import useStyles from './CartItem.style';
import * as selector from '../redux/selectors';
import { addItem, removeItem } from '../redux/actions';
import ChangeQuantityButton from './UI/ChangeQuantityButton.jsx';

interface IProps {
  item: IItem
}

const CartItem: React.FC<IProps> = React.memo(({ item }) => {
  console.log('--- CartItem()');
  useSelector((state) => selector.getOneQuantity(state, item.id));

  const classes = useStyles();

  const dispatch = useDispatch();
  const dispatchAddItem = useCallback(
    (item) => dispatch(addItem(item)),
    [dispatch]
  );

  const dispatchRemoveItem = useCallback(
    (item) => dispatch(removeItem(item)),
    [dispatch]
  );

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant='h5'>
              {item.title}
            </Typography>
            <Typography className={classes.price}>
              ${item.value * item.quantity}
            </Typography>
            <Typography>(${item.value}/item)</Typography>
            <Typography>x {item.quantity}</Typography>
          </CardContent>
          <CardActions>
            <ChangeQuantityButton onClick={() => dispatchAddItem(item)}>
              +
            </ChangeQuantityButton>
            <ChangeQuantityButton onClick={() => dispatchRemoveItem(item)}>
              -
            </ChangeQuantityButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
});

export default CartItem;
