import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Actions as AppActions } from 'services/app/module';
import moment from 'moment';
import PlaylistService from './service';
import { Actions } from './module';

function* filterPlaylists() {
	try {
		const { filter: { selectedFilters } } = yield select();

		const playlists = yield call(() => PlaylistService.filterPlaylists(selectedFilters));

		yield put(Actions.setPlaylistList(playlists));

		yield put(Actions.onScheduleRefresh());
	} catch (error) {
		yield put(AppActions.showMessage({ text: error.message, generatedAt: new Date().getTime() }));
	}
}

function* onScheduleRefresh() {
	yield delay(process.env.REACT_APP_REFRESH_TIME_PLAYLISTS_SECONDS * 1000);
	const { filter: { lastUpdated } } = yield select();
	if (!lastUpdated || moment().diff(lastUpdated, 'seconds') >= 5) {
		yield put(Actions.filterPlaylists());
	} else {
		yield put(Actions.onScheduleRefresh());
	}
}

function* watchPlaylistList() {
	yield takeLatest(Actions.filterPlaylists, filterPlaylists);
}

function* watchOnScheduleRefresh() {
	yield takeLatest(Actions.onScheduleRefresh, onScheduleRefresh);
}


export default function* playlistSagas() {
	yield all([
		watchPlaylistList(),
		watchOnScheduleRefresh()
	]);
}
