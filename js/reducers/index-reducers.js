import * as actions from '../actions/index-actions';

const initialState = [];

export const repoReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_REPO:
			return [...state, {
				name: action.repo,
				rating: null,
				id: action.id
			}];
		case actions.RATE_REPO:
			var item = state.find(obj => {
				return obj.id === action.id;
			});
			var index = state.indexOf(item);
			return [
				...state.slice(0, index),
				{
					name: item.name,
					id: action.id,
					rating: action.rating
				},
				...state.slice(index + 1)
			];
		default:
			return state;
	}
};
