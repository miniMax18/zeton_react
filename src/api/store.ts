import { createStore } from 'redux';
import userReducer from './reducers';

const store: any = createStore(userReducer as any);

export default store;
