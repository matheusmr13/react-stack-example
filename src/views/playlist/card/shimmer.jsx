import React from 'react';
import ContentLoader from 'react-content-loader';

const CardShimmer = () => (
	<ContentLoader
		height={337}
		width={300}
		speed={2}
		primaryColor="#282828"
		secondaryColor="#404040"
	>
		<rect x="1" y="1" rx="5" ry="5" width="298" height="298" />
		<rect x="50" y="310" rx="5" ry="5" width="200" height="30" />
	</ContentLoader>
);

export default CardShimmer;
