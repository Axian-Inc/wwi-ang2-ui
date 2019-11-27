import * as fromWarehouse from './warehouse/reducer';
import * as fromCart from './cart/reducer';
import { WarehouseEffects } from './warehouse/effect';

export const reducers = {
  warehouse: fromWarehouse.reducer,
  cart:fromCart.reducer,
}

export const effects = [
  WarehouseEffects
]