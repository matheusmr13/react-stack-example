import React from 'react';
import PropTypes from 'prop-types';
import PlaylistPropType from 'services/playlist/proptype';

import './playlist-card.css';

const PlaylistCard = ({ playlist }) => (
	<div className="playlist-card">
		<img src={playlist.images[0].url} alt={playlist.name} />
		<div className="playlist-card__name">{playlist.name}</div>
	</div>
);

PlaylistCard.propTypes = {
	playlist: PropTypes.shape(PlaylistPropType).isRequired
};

export default PlaylistCard;
