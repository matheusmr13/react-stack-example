import { all, call, put, takeLatest } from 'redux-saga/effects';

import { ErrorWrapper } from 'services/config/saga';
import { Actions as PlaylistActions } from 'services/playlist/module';

import FilterService from './service';
import { Actions } from './module';

function* fetchFilters() {
	const filters = yield call(() => FilterService.fetchFilters());
	yield put(Actions.setPossibleFilters(filters));
}


function* onFilterChange() {
	yield put(PlaylistActions.filterPlaylists());
}

function* watchFetchFilters() {
	yield takeLatest(Actions.fetchFilters, ErrorWrapper(fetchFilters));
}

function* watchOnFilterChange() {
	yield takeLatest(Actions.onFilterChange, ErrorWrapper(onFilterChange));
}

export default function* filterSagas() {
	yield all([
		watchFetchFilters(),
		watchOnFilterChange()
	]);
}
