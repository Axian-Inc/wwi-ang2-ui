import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { WarehouseState } from './state';
import { IStockItem } from './models';

const getWarehouseState = (state: AppState) => state.warehouse;
const getStockItemList = (state: WarehouseState): IStockItem[] => state.stockItems || [];

export const selectStockItemState = createSelector(getWarehouseState, getStockItemList);