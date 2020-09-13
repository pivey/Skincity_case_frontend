import { createStore } from 'redux';
import appReducer from './reducers/AppReducer';

const store = createStore(appReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof appReducer>;

export default store;
