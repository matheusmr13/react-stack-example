import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { ErrorWrapper } from 'services/config/saga';

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
		if (error.status === 400) {
			yield put(AppActions.showMessage({
				text: error.message,
				generatedAt: moment().toDate().getTime()
			}));
		} else {
			throw error;
		}
	}
}

function* onScheduleRefresh() {
	const time = parseInt(process.env.REACT_APP_REFRESH_TIME_PLAYLISTS_SECONDS, 10);
	if (time) {
		yield delay(time * 1000);
	}
	const { filter: { lastUpdated } } = yield select();
	const seconds = moment().diff(lastUpdated, 'seconds');
	if (!lastUpdated || seconds >= 5) {
		yield put(Actions.filterPlaylists());
	} else if (typeof time !== 'undefined') {
		yield put(Actions.onScheduleRefresh());
	}
}

function* watchPlaylistList() {
	yield takeLatest(Actions.filterPlaylists, ErrorWrapper(filterPlaylists));
}

function* watchOnScheduleRefresh() {
	yield takeLatest(Actions.onScheduleRefresh, ErrorWrapper(onScheduleRefresh));
}

export default function* playlistSagas() {
	yield all([
		watchPlaylistList(),
		watchOnScheduleRefresh()
	]);
}
