import { all, call, put, takeLatest } from 'redux-saga/effects';

import AppService from './service';
import { Actions } from './module';

function* fetchLoggedUser() {
	try {
		const loggedUser = yield call(() => AppService.checkLoggedUser());

		yield put(Actions.setLoggedUser(loggedUser));
	} catch (e) {
		yield () => console.info(e);
	}
}

function* watchFetchLoggedUser() {
	yield takeLatest(Actions.fetchLoggedUser, fetchLoggedUser);
}

export default function* appSagas() {
	yield all([
		watchFetchLoggedUser()
	]);
}
