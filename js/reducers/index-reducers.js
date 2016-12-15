import * as actions from '../actions/index-actions';

const initial = [];

export const repoReducer = (state = initial, action) => {

	switch (action.type) {

		case actions.ADD_REPO:
			return [...state, {
				name: action.repo,
				rating: 3,
				id: action.id
			}];

		case actions.RATE_REPO:
			var item = state.find(obj => obj.id === action.id);
			var index = state.indexOf(item);

			return [
				...state.slice(0, index),
				{
					name: item.name,
					rating: action.rating,
					id: action.id
				},
				...state.slice(index + 1)
			];

		default:
			return state;
	}
};
