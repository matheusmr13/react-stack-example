import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterPropType from 'services/playlist-filter/proptype';

import './unlimited-integer-filter.css';

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
			<div className="ui-filter">
				<div className="ui-filter__name">
					{spec.name}
				</div>
				<div className="ui-filter__input">
					<button
						onClick={this.onDownClick}
						className="ui-filter__button"
						disabled={!count}
					>
						-
					</button>
					<span className="ui-filter__counter">{count}</span>
					<button
						onClick={this.onUpClick}
						className="ui-filter__button"
					>
						+
					</button>
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
