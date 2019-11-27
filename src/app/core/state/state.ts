import { WarehouseState, InitialWarehouseState } from './warehouse/state';
import { CartState, InitialCartState } from './cart/state';

export interface AppState {
  warehouse: WarehouseState,
  cart: CartState
}

export const initialState: AppState = {
  warehouse: InitialWarehouseState,
  cart: InitialCartState
}