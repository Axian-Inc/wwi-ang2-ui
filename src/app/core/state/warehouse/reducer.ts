import { InitialWarehouseState } from './state';
import { ActionTypes, Actions } from './actions';

export function reducer(state = InitialWarehouseState, action: Actions) {
	switch (action.type) {
		case ActionTypes.GET_STOCK_ITEMS_SUCCESS:
			return { ...state, stockItems: action.stockItems }
		default:
			return state;
	}
}