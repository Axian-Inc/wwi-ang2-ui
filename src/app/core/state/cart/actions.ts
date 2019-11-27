import { Action } from '@ngrx/store';
import { IStockItem } from '../warehouse/models';

export enum ActionTypes {
	ADD_ITEM_TO_CART = '[CART] Add Stock Item To Cart'
}

export class AddItemToCart implements Action {
	readonly type = ActionTypes.ADD_ITEM_TO_CART;
	constructor(public item: IStockItem, public qty: number) { }
}

export type Actions =
	| AddItemToCart
	;