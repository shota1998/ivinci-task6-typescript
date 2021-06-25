import React from 'react';
import { Button } from '@material-ui/core';

import useStyles from './AddCartButton.style';

interface IProps {
  onClick: () => {};
}

const AddCartButton: React.FC<IProps> = ({ onClick, children }) => {
  console.log('--- AddCartButton()');

  const classes = useStyles();

  return (
    <div className={classes.actions}>
      <Button onClick={onClick} size='small' variant='outlined' color='primary'>
        {children}
      </Button>
    </div>
  );
};

export default React.memo(AddCartButton);
