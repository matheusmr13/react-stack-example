import React, { Component } from 'react';

class Filter extends Component {
	state = {
		filters: {},
		loading: true
	}
	componentDidMount() {
		fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
			.then(resp => resp.json())
			.then(({ filters }) => this.setState({
				loading: false,
				filters
			}));
	}

	onChange(field, event) {
		console.info(field, event.target.value);
	}

	render() {
		const { loading, filters } = this.state;
		console.info(filters);
		if (loading) {
			return 'Loading';
		}
		return (
			<div>
				{
					filters
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