import PropTypes from 'prop-types';

const PlaylistPropType = {
	external_urls: PropTypes.shape({
		spotify: PropTypes.string.isRequired
	}),
	id: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.shape({
		url: PropTypes.string.isRequired
	})),
	name: PropTypes.string.isRequired,
	owner: PropTypes.shape({
		external_urls: PropTypes.shape({
			spotify: PropTypes.string.isRequired
		}),
		id: PropTypes.string.isRequired
	})
};

export default PlaylistPropType;
