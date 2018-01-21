import React from 'react';
import PropTypes from 'prop-types';
import { FilterPropType } from 'services/playlist-filter/proptype';

import Slider from 'material-ui/Slider';

const LimitedIntegerFilter = ({ spec: { validation }, onChange }) => (
	<Slider
		defaultValue={(validation.min + validation.max) / 2}
		min={validation.min}
		max={validation.max}
		step={1}
		onChange={(a, value) => onChange(value)}
	/>
);

LimitedIntegerFilter.defaultProps = {
	onChange: () => {}
};

LimitedIntegerFilter.propTypes = {
	onChange: PropTypes.func,
	spec: PropTypes.shape(FilterPropType).isRequired
};

export default LimitedIntegerFilter;
