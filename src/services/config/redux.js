import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import playlist from 'services/playlist/module';
import app from 'services/app/module';

import rootSaga from './saga';

const reducer = combineReducers({
	playlist,
	app
});

const sagaMiddleware = createSagaMiddleware();


export default createStore(
	(state, action) => reducer(state, action),
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
