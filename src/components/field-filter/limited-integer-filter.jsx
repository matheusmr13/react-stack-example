import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterPropType from 'services/playlist-filter/proptype';

import Slider from 'material-ui/Slider';

import './limited-integer-filter.css';

class LimitedIntegerFilter extends Component {
	constructor(props) {
		super(props);
		const { validation } = props.spec;
		this.state = {
			value: parseInt((validation.min + validation.max) / 2, 10)
		};
	}

	onChange = (e, value) => {
		this.setState({ value });
		this.props.onChange(value);
	}
	render() {
		const { spec: { validation, name } } = this.props;
		const { value } = this.state;
		return (
			<div className="li-filter">
				<div>{name}: {value}</div>
				<Slider
					value={value}
					min={validation.min}
					max={validation.max}
					step={1}
					onChange={this.onChange}
				/>
			</div>
		);
	}
}

LimitedIntegerFilter.defaultProps = {
	onChange: () => {}
};

LimitedIntegerFilter.propTypes = {
	onChange: PropTypes.func,
	spec: PropTypes.shape(FilterPropType).isRequired
};

export default LimitedIntegerFilter;
