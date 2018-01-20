import { connect } from 'react-redux';

import { Actions } from 'services/playlist/module';
import PlaylistView from 'views/playlist';

const mapStateToProps = state => ({
	playlists: state.playlist.playlists,
	loadingPlaylists: state.playlist.loadingPlaylists
});

const mapDispatchToProps = dispatch => ({
	fetchInitialPlaylists: () => dispatch(Actions.filterPlaylists({}))
});

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(PlaylistView);

export default PlaylistContainer;
