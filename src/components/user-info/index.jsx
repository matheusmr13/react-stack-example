import React from 'react';
import PropTypes from 'prop-types';

import UserInfoShimmer from './shimmer';
import './user-info.css';

const UserInfo = ({ user, onLogout }) => {
	if (!user || !user.info) {
		return <UserInfoShimmer />;
	}

	const {
		info
	} = user;

	const {
		images,
		external_urls,
		followers
	} = info;

	return (
		<div className="user-info" >
			<div className="user-info__data">
				<div className="user-info__name">{info.display_name}</div>
				<div className="user-info__followers">{`${followers.total} followers`}</div>
				<button
					className="user-info__logout"
					onClick={onLogout}
				>
					Logout
				</button>
			</div>
			<a
				className="user-info__image"
				href={external_urls.spotify}
				target="_blank"
			>
				<img src={images[0].url} alt={info.display_name} />
			</a>
		</div>
	);
};

UserInfo.defaultProps = {
	user: null
};

UserInfo.propTypes = {
	user: PropTypes.shape({
		info: PropTypes.shape({
			images: PropTypes.arrayOf(PropTypes.shape({
				url: PropTypes.string.isRequired
			})).isRequired,
			display_name: PropTypes.string.isRequired,
			external_urls: PropTypes.shape({
				spotify: PropTypes.string.isRequired
			}).isRequired,
			followers: PropTypes.shape({
				total: PropTypes.number.isRequired
			}).isRequired
		})
	}),
	onLogout: PropTypes.func.isRequired
};

export default UserInfo;
