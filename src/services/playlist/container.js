import { connect } from 'react-redux';
import { createAction } from 'redux-actions';

import PlaylistView from 'views/playlists';

const mapStateToProps = state => ({
	playlists: state.playlist.playlists,
	loadingPlaylists: state.playlist.loadingPlaylists
});

const mapDispatchToProps = dispatch => ({
	filterPlaylists: filter => dispatch(createAction('FILTER_PLAYLISTS')(filter))
});

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(PlaylistView);

export default PlaylistContainer;
