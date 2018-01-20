import React, { Component } from 'react';

class Filter extends Component {
	state = {
		selectedFilters: {}
	}
	componentDidMount() {
		this.props.fetchFilters();
	}
	onChange(field, event) {
		const { target: { value } } = event;
		const { selectedFilters } = { ...this.state };
		selectedFilters[field] = value;
		this.setState(selectedFilters);
		this.props.onFilterChange(selectedFilters);
	}

	render() {
		const { loadingFilters, selectedFilters, possibleFilters } = this.props;
		if (loadingFilters) {
			return 'Loading';
		}
		return (
			<div>
				{
					possibleFilters
						.filter(f => f.values)
						.map(filter => (
							<select key={filter.id} onChange={e => this.onChange(filter.id, e)}>
								{filter.values.map(v => <option key={v.value} value={v.value}>{v.name}</option>)}
							</select>
						))
				}
			</div>
		);
	}
}

export default Filter;
