import React from 'react';

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

export default LimitedIntegerFilter;
