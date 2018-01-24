import React from 'react';
import ContentLoader from 'react-content-loader';
import PlaylistCardShimmer from './card/shimmer';

export const PlaylistsShimmer = () => Array(4).fill(0).map((e, i) => (
	<div className="playlist-card" key={i}>
		<PlaylistCardShimmer />
	</div>
));

export const PlaylistNameShimmer = () => (
	<div style={{ minWidth: '260px' }}>
		<ContentLoader
			height={32}
			width={300}
			speed={2}
			primaryColor="#282828"
			secondaryColor="#404040"
		>
			<rect x="1" y="1" rx="5" ry="5" width="298" height="30" />
		</ContentLoader>
	</div>
);
