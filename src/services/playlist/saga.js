import { all, call, put, takeLatest } from 'redux-saga/effects';

import PlaylistService from './service';
import { Actions } from './module';

function* filterPlaylists({ payload: filter }) {
	try {
		console.info(filter);
		const playlits = yield call(() => PlaylistService.filterPlaylists(filter));
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
