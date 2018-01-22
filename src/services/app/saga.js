import { all, call, put, takeLatest } from 'redux-saga/effects';

import SpotifyService from 'services/spotify/service';

import AppService from './service';
import { Actions } from './module';

function* fetchLoggedUser() {
	try {
		const loggedUser = yield call(() => AppService.checkLoggedUser());
		yield put(Actions.setLoggedUser(loggedUser));

		const me = yield call(() => SpotifyService.fetchLoggedUserInfos());
		loggedUser.info = me;

		yield put(Actions.setLoggedUser(loggedUser));
	} catch (e) {
		yield () => console.info(e);
	}
}

function* onLogout() {
	AppService.logout();
	yield put(Actions.setLoggedUser(null));
}

function* watchFetchLoggedUser() {
	yield takeLatest(Actions.fetchLoggedUser, fetchLoggedUser);
}

function* watchOnLogout() {
	yield takeLatest(Actions.onLogout, onLogout);
}

export default function* appSagas() {
	yield all([
		watchFetchLoggedUser(),
		watchOnLogout()
	]);
}