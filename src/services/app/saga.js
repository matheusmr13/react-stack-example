import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ErrorWrapper } from 'services/config/saga';
import SpotifyService from 'services/spotify/service';

import AppService from './service';
import { Actions } from './module';

function* fetchLoggedUser() {
	const loggedUser = yield call(() => AppService.checkLoggedUser());
	yield put(Actions.setLoggedUser(loggedUser));

	const me = yield call(() => SpotifyService.fetchLoggedUserInfos());

	yield put(Actions.setLoggedUser({
		...loggedUser,
		info: me
	}));
}

function* onLogout() {
	AppService.logout();
	yield put(Actions.setLoggedUser(null));
}

function* watchFetchLoggedUser() {
	yield takeLatest(Actions.fetchLoggedUser, ErrorWrapper(fetchLoggedUser));
}

function* watchOnLogout() {
	yield takeLatest(Actions.onLogout, ErrorWrapper(onLogout));
}

export default function* appSagas() {
	yield all([
		watchFetchLoggedUser(),
		watchOnLogout()
	]);
}
