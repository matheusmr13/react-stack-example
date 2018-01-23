import { all, call, put, takeLatest, select } from 'redux-saga/effects';

import PlaylistService from './service';
import { Actions } from './module';

function* filterPlaylists() {
	try {
		const { filter: { selectedFilters } } = yield select();
		const playlits = yield call(() => PlaylistService.filterPlaylists(selectedFilters));
		yield put(Actions.setPlaylistList(playlits));
	} catch (e) {
		yield () => console.info(e);
	}
}

function* watchPlaylistList() {
	yield takeLatest(Actions.filterPlaylists, filterPlaylists);
}

export default function* playlistSagas() {
	yield all([
		watchPlaylistList()
	]);
}
