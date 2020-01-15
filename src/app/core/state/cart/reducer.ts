import { InitialCartState } from './state';
import { ActionTypes, Actions } from './actions';

export function reducer(state = InitialCartState, action: Actions) {
	switch (action.type) {
		case ActionTypes.ADD_ITEM_TO_CART:
        state.cartRows.push(action)
			return { ...state }
		case ActionTypes.CHECKOUT_SUCCESS:
			return { ...state, cartRows: []};
		default:
			return state;
	}
}