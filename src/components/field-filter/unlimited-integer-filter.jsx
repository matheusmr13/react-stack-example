import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterPropType } from 'services/playlist-filter/proptype';

class UnlimitedIntegerFilter extends Component {
	state = {
		count: 0
	}

	onDownClick = () => {
		this.onChangeValue(-1);
	}

	onUpClick = () => {
		this.onChangeValue(1);
	}

	onChangeValue = (diff) => {
		const { count } = this.state;
		const { onChange } = this.props;
		const newCount = Math.max(0, count + diff);
		this.setState({ count: newCount });
		onChange(newCount);
	}

	render() {
		const { count } = this.state;
		const { spec } = this.props;
		return (
			<div>
				<div>
					{spec.name}
				</div>
				<div>
					{ count ?
						<button onClick={this.onDownClick}>-</button> :
						null
					}
					<span>{count}</span>
					<button onClick={this.onUpClick}>+</button>
				</div>
			</div>
		);
	}
}

UnlimitedIntegerFilter.defaultProps = {
	onChange: () => {}
};

UnlimitedIntegerFilter.propTypes = {
	onChange: PropTypes.func,
	spec: PropTypes.shape(FilterPropType).isRequired
};

export default UnlimitedIntegerFilter;
