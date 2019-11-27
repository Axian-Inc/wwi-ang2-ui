import { ICartRow } from './models';

export interface CartState {
  cartRows: ICartRow[]
}

export const InitialCartState: CartState = {
  cartRows: []
}