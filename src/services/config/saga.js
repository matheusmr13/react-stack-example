import { all, put } from 'redux-saga/effects';

import PlaylistSaga from 'services/playlist/saga';
import FilterSaga from 'services/playlist-filter/saga';
import AppSaga from 'services/app/saga';

import { Actions as AppActions } from 'services/app/module';

export default function* rootSaga() {
	yield all([
		PlaylistSaga(),
		FilterSaga(),
		AppSaga()
	]);
}

export const ErrorWrapper = (func) => {
	return function* wrapper(payload) {
		try {
			yield func(payload);
		} catch (error) {
			if (error.status === 401) {
				yield put(AppActions.setLoggedUser(null));
			} else {
				yield put(AppActions.showMessage({ text: 'An error occurred, please contact support!', generatedAt: new Date().getTime() }));
			}
		}
	};
};
