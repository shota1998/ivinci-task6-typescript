import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  CardActions,
  CardContent,
  Grid,
  Card,
} from '@material-ui/core';

import { IItem } from '../interface'
import { addItem } from '../redux/actions';
import useStyles from './Item.style';
import AddCartButton from './UI/AddCartButton.jsx';

const Item: React.FC<IItem> = ({ item }) => {
  console.log('--- Item()');

  const classes = useStyles();
  const dispatch = useDispatch();
  const dispatchAddItem = useCallback(
    (item) => dispatch(addItem(item)),
    [dispatch]
  );

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5'>
            {item.title}
          </Typography>
          <Typography>${item.value}</Typography>
          <Typography>{item.description}</Typography>
        </CardContent>
        <CardActions>
          <AddCartButton onClick={() => dispatchAddItem(item)}>
            Add to Cart
          </AddCartButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Item;
