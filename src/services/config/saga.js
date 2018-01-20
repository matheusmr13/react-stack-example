import { all } from 'redux-saga/effects';

import PlaylistSaga from 'services/playlist/saga';
import AppSaga from 'services/app/saga';

export default function* rootSaga() {
	yield all([
		PlaylistSaga(),
		AppSaga()
	]);
}
