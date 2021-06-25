import React from 'react';
import { Button } from '@material-ui/core';

import useStyles from './ChangeQuantityButton.style';

interface IProps {
  onClick: () => {};
  children: React.ReactNode;
}

const ChangeQuantityButton: React.FC<IProps> = ({ onClick, children }) => {
  console.log('ChangeQuantityButton');

  const classes = useStyles();

  return (
    <div className={classes.actions}>
      <Button onClick={onClick} size='small' variant='outlined' color='primary'>
        {children}
      </Button>
    </div>
  );
};

export default React.memo(ChangeQuantityButton);
