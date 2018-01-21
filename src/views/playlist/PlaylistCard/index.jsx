import React from 'react';

import './PlaylistCard.css';

const PlaylistCard = ({ playlist }) => {
	return (
		<div className="playlist-card">
			<img src={playlist.images[0].url} alt={playlist.name} />
			<div className="playlist-card__name">{playlist.name}</div>
		</div>
	);
};

export default PlaylistCard;
