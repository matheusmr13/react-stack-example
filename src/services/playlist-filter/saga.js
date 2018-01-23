import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Actions as PlaylistActions } from 'services/playlist/module';

import FilterService from './service';
import { Actions } from './module';

function* fetchFilters() {
	try {
		const filters = yield call(() => FilterService.fetchFilters());
		yield put(Actions.setPossibleFilters(filters));
	} catch (e) {
		console.info(e);
	}
}


function* onFilterChange() {
	try {
		yield put(PlaylistActions.filterPlaylists());
	} catch (e) {
		console.info(e);
	}
}

function* watchFetchFilters() {
	yield takeLatest(Actions.fetchFilters, fetchFilters);
}

function* watchOnFilterChange() {
	yield takeLatest(Actions.onFilterChange, onFilterChange);
}

export default function* filterSagas() {
	yield all([
		watchFetchFilters(),
		watchOnFilterChange()
	]);
}
