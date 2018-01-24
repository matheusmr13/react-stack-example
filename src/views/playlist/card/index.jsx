import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlaylistPropType from 'services/playlist/proptype';

import './playlist-card.css';

import PlaylistCardShimmer from './shimmer';

class PlaylistCard extends Component {
	state = {
		loadingImage: true
	}

	onImageLoad = () => {
		this.setState({
			loadingImage: false
		});
	}

	render() {
		const { playlist } = this.props;
		const { loadingImage } = this.state;

		return (
			<a
				href={playlist.external_urls.spotify}
				target="_blank"
				className="playlist-card"
			>
				{ loadingImage ? <PlaylistCardShimmer /> : null }
				<div style={{ display: loadingImage ? 'none' : 'block' }}>
					<div className="playlist-card__image">
						<img src={playlist.images[0].url} alt={playlist.name} onLoad={this.onImageLoad} />
						<div className="playlist-card__hover">
							<div className="circle">
								<svg className="icon-play" viewBox="0 0 85 100">
									<path fill="#fff" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
										<title>PLAY</title>
									</path>
								</svg>
							</div>
						</div>
					</div>
					<div className="playlist-card__name">{playlist.name}</div>
				</div>
			</a>
		);
	}
}

PlaylistCard.propTypes = {
	playlist: PropTypes.shape(PlaylistPropType).isRequired
};

export default PlaylistCard;
