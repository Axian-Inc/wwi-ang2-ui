import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ICartRow } from './models';
import { CartState } from './state';

const getCartState = (state: AppState) => state.cart;
const getCartRows = (state: CartState): ICartRow[] => state.cartRows || [];
const getCartTotal = (state: CartState): number => {
  let total = 0;
  if(!state.cartRows || !state.cartRows.length) {
    return total;
  }
  state.cartRows.forEach(r => total = total + (r.item.UnitPrice * r.qty));
  return total;
};

export const selectCartRows = createSelector(getCartState, getCartRows);
export const selectCartTotal = createSelector(getCartState, getCartTotal);