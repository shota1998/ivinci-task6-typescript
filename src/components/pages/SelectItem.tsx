import React, { useEffect, useState, useCallback } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';

import { IItem } from '../../interface';
import { getItems } from '../../redux/api/items';
import useStyles from './SelectItem.style';
import Item from '../Item';

const SelectItem = () => {
  console.log('--- SelectItem()');

  const classes = useStyles();
  const [items, setItems] = useState<IItem[]>([]);

  const initItems = useCallback(async () => {
    const result = await getItems();
    if (result[0]) {
      setItems(result[1] as IItem[]);
    } else {
      console.log(result[1]);
    }
  }, []);

  useEffect(() => {
    initItems();
  }, [initItems]);

  return (
    <>
      <Container maxWidth='sm'>
        <Typography
          variant='h5'
          align='center'
          color='textSecondary'
          gutterBottom
        >
          Buy your favorite products
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default SelectItem;
