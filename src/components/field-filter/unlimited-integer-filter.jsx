import React, { Component } from 'react';

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
		const newCount = Math.max(0, count + diff);
		this.setState({ count: newCount });
		this.props.onChange(newCount);
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				{ count ?
					<button onClick={this.onDownClick}>-</button> :
					null
				}
				<span>{count}</span>
				<button onClick={this.onUpClick}>+</button>
			</div>
		);
	}
}

export default UnlimitedIntegerFilter;
