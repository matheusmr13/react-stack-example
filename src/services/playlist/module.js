import { createActions, handleActions } from 'redux-actions';

const initialState = {
	loadingPlaylists: true,
	playlists: null
};

export const Actions = createActions({
	SET_PLAYLIST_LIST: playlists => playlists,
	FILTER_PLAYLISTS: () => {}
});

const reducer = handleActions({
	[Actions.setPlaylistList]: (state, { payload: playlists }) => ({
		...state,
		playlists,
		loadingPlaylists: false
	})
}, initialState);

export default reducer;
