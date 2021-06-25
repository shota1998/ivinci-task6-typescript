import { PayloadAction } from '@reduxjs/toolkit';

import { IItem } from '../../interface';
import * as actionTypes from '../actionTypes';
import { ICartState } from '../../interface';

const initialState: ICartState = {
  items: [],
  total: 0,
};

export default function cartReducer(
  state = initialState,
  action: PayloadAction<IItem[]>
) {
  switch (action.type) {
    case actionTypes.UPDATE_CART_REDUCER: {
      console.log('---UPDATE_CART_REDUCER---');
      const items = action.payload;
      var total = 0;
      for (const item of items) {
        total += item.quantity;
      }

      return {
        ...state,
        items: items,
        total: total,
      };
    }

    default:
      return state;
  }
}
