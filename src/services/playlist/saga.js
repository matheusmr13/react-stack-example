import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import moment from 'moment';
import PlaylistService from './service';
import { Actions } from './module';

function* filterPlaylists() {
	try {
		const { filter: { selectedFilters } } = yield select();

		const playlits = yield call(() => PlaylistService.filterPlaylists(selectedFilters));
		yield put(Actions.setPlaylistList(playlits));

		yield put(Actions.onScheduleRefresh());
	} catch (e) {
		yield () => console.info(e);
	}
}

function* onScheduleRefresh() {
	yield delay(5000);
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
