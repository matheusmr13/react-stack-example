import React from 'react';
import ContentLoader from 'react-content-loader';

const FieldFilterShimmer = () => (
	<ContentLoader
		height={80}
		width={250}
		speed={2}
		primaryColor="#f3f3f3"
		secondaryColor="#ecebeb"
	>
		<rect x="10" y="38" rx="5" ry="5" width="230.3" height="26.6" />
		<rect x="10" y="10.27" rx="4" ry="4" width="121.01" height="16.77" />
	</ContentLoader>
);

export default FieldFilterShimmer;
