import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { CssBaseline, Container } from '@material-ui/core';

import useStyles from './App.style';
import { fetchCartItemRequest } from './redux/actions';
import Header from './components/Header';
import SelectItem from './components/pages/SelectItem';
import Cart from './components/pages/Cart';

export default function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const dispatchFetchRequest = useCallback(
    () => dispatch(fetchCartItemRequest()),
    [dispatch]
  );

  useEffect(() => {
    dispatchFetchRequest();
  }, [dispatchFetchRequest]);

  return (
    <Container maxWidth='lg'>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.container}>
          <Switch>
            <Route path='/' exact render={() => <SelectItem />} />
            <Route path='/cart' render={() => <Cart />} />
            <Redirect to='/' />
          </Switch>
        </div>
      </main>
    </Container>
  );
}
