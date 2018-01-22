import React from 'react';
import PropTypes from 'prop-types';

import './user-info.css';

const UserInfo = ({ user, onLogout }) => {
	if (!user) return '';

	const {
		info: {
			images,
			display_name,
			external_urls,
			followers
		}
	} = user;

	return (
		<div className="user-info" >
			<div className="user-info__data">
				<div className="user-info__name">{display_name}</div>
				<div className="user-info__followers">{`${followers.total} followers`}</div>
				<button
					className="user-info__logout"
					onClick={(e) => {
						e.stopPropagation();
						onLogout();
					}}
				>
					Logout
				</button>
			</div>
			<a
				className="user-info__image"
				href={external_urls.spotify}
				target="_blank"
			>
				<img src={images[0].url} alt={display_name} />
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
		}).isRequired
	}),
	onLogout: PropTypes.func.isRequired
};

export default UserInfo;
