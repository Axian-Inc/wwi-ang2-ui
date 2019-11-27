import { IStockItem } from './models';

export interface WarehouseState {
  stockItems: IStockItem[]
}

export const InitialWarehouseState: WarehouseState = {
  stockItems: []
}