import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import playlist from 'services/playlist/module';
import filter from 'services/playlist-filter/module';
import app from 'services/app/module';

import rootSaga from './saga';

export const reducers = combineReducers({
	playlist,
	filter,
	app
});

const sagaMiddleware = createSagaMiddleware();


export default createStore(
	(state, action) => reducers(state, action),
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
