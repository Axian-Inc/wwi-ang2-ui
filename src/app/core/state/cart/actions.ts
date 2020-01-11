import { Action } from '@ngrx/store';
import { IStockItem } from '../warehouse/models';

export enum ActionTypes {
	ADD_ITEM_TO_CART = '[CART] Add Stock Item To Cart',
	CHECKOUT = '[CART] Checkout',
	CHECKOUT_SUCCESS = '[CART] Checkout Success',
}

export class AddItemToCart implements Action {
	readonly type = ActionTypes.ADD_ITEM_TO_CART;
	constructor(public item: IStockItem, public qty: number) { }
}

export class Checkout implements Action {
	readonly type = ActionTypes.CHECKOUT;
	constructor() {}
}

export class CheckoutSuccess implements Action {
	readonly type = ActionTypes.CHECKOUT_SUCCESS;
	constructor() {}
}

export type Actions =
	| AddItemToCart
	| Checkout
	| CheckoutSuccess
	;