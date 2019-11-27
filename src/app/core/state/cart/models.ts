import { IStockItem } from '../warehouse/models';

export interface ICartRow {
  item: IStockItem,
  qty: number
}