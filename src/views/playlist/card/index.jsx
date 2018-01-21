import React from 'react';
import PropTypes from 'prop-types';
import PlaylistPropType from 'services/playlist/proptype';

const PlaylistCard = ({ playlist }) => (
	<div>
		<img src={playlist.images[0].url} alt={playlist.name} />
		<div>{playlist.name}</div>
	</div>
);

PlaylistCard.propTypes = {
	playlist: PropTypes.shape(PlaylistPropType).isRequired
};

export default PlaylistCard;
