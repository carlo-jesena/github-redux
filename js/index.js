require('babel-polyfill');
import * as actions from './actions/index-actions';
import store from './store';
//
// console.log(actions);

store.dispatch(actions.addRepo('que tal'));
store.dispatch(actions.addRepo('comment ca-va'));
store.dispatch(actions.addRepo('ki dayra'));
store.dispatch(actions.rateRepo(
	1, 'VERY NICE WELL DONE'));

console.log(store.getState());
