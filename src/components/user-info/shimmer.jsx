import React from 'react';
import ContentLoader from 'react-content-loader';

const UserInfoShimmer = () => (
	<div style={{ width: '260px' }}>
		<ContentLoader
			height={70}
			width={260}
			speed={2}
			primaryColor="#282828"
			secondaryColor="#404040"
		>
			<circle cx="227" cy="36" r="30" />
			<rect x="11" y="13" rx="4" ry="4" width="175.54" height="13" />
			<rect x="106.75" y="32" rx="4" ry="4" width="80.5" height="9.12" />
			<rect x="125.5" y="47.27" rx="6" ry="10" width="60" height="13" />
		</ContentLoader>
	</div>
);

export default UserInfoShimmer;
