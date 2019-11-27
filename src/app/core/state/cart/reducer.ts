import { InitialCartState } from './state';
import { ActionTypes, Actions } from './actions';

export function reducer(state = InitialCartState, action: Actions) {
	switch (action.type) {
		case ActionTypes.ADD_ITEM_TO_CART:
        state.cartRows.push(action)
			return { ...state }
		default:
			return state;
	}
}