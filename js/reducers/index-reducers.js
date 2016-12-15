import * as actions from '../actions/index-actions';

const initial = [];

export const repoReducer = (state=initial, action) => {
console.log(state);
	switch (action.type) {
		case actions.ADD_REPO:
			return [...state, {
				name: action.repo,
				rating: 3,
				id: action.id
			}];
		case actions.RATE_REPO:
			// var index = state.findIndex(obj => {
			// 	console.log('obj id in reducers', obj.id)
			// 	console.log('action id in reducers', action.id)
			// 	// action ID is undefined
			// 	return obj.id === action.id;
			// });
			// console.log('index in reducers', index);
			var index = state.findIndex(obj => {
				console.log('obj name in reducers', obj.name)
				console.log('action name in reducers', action.name)
				return obj.name === action.name;
			});
			return [
				...state.slice(0, index),
				{
					id: action.id,
					rating: action.rating
				},
				...state.slice(index + 1)
			];
		default:
			return state;
	}
};
