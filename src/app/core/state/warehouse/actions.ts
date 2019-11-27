import { Action } from '@ngrx/store';
import { IStockItem } from './models';

export enum ActionTypes {
	GET_STOCK_ITEMS = '[WAREHOUSE] Get Stock Items',
	GET_STOCK_ITEMS_SUCCESS = '[WAREHOUSE] Get Stock Items Success',
	GET_STOCK_ITEMS_FAILURE = '[WAREHOUSE] Get Stock Items Failure',
}

export class GetStockItems implements Action {
	readonly type = ActionTypes.GET_STOCK_ITEMS;
	constructor() { }
}

export class GetStockItemsSuccess implements Action {
	readonly type = ActionTypes.GET_STOCK_ITEMS_SUCCESS;
	constructor(public stockItems: IStockItem[]) { }
}

export class GetStockItemsFailure implements Action {
	readonly type = ActionTypes.GET_STOCK_ITEMS_FAILURE;
	constructor(public error: any) { }
}

export type Actions =
	| GetStockItems
	| GetStockItemsSuccess
	| GetStockItemsFailure
	;