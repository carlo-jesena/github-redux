import { createStore } from 'redux';
import * as reducers from './reducers/index-reducers';

export default createStore(reducers.repoReducer);
