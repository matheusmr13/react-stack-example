import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterPropType from 'services/playlist-filter/proptype';

import { SelectField, MenuItem } from 'material-ui';

class ListFilter extends Component {
	state = {
		value: null
	}

	onChange = (e, i, value) => {
		const { onChange } = this.props;
		this.setState({
			value
		});
		onChange(value);
	}

	render() {
		const { spec } = this.props;
		const { value } = this.state;
		return (
			<SelectField
				floatingLabelText={spec.name}
				value={value}
				onChange={this.onChange}
				fullWidth
			>
				<MenuItem value={null} primaryText="" />
				{
					spec.values
						.map(option => (
							<MenuItem
								key={option.value}
								value={option.value}
								primaryText={option.name}
							/>
						))
				}
			</SelectField>
		);
	}
}

ListFilter.defaultProps = {
	onChange: () => {}
};

ListFilter.propTypes = {
	onChange: PropTypes.func,
	spec: PropTypes.shape(FilterPropType).isRequired
};

export default ListFilter;
