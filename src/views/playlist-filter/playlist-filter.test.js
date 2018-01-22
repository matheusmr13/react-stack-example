import React from 'react';
import { shallow } from 'enzyme';
import EntityFilter from 'components/entity-filter';
import PlaylistFilter from './index';

const filters = [{
	id: 'locale',
	name: 'Locale',
	values: [{
		value: 'en_AU',
		name: 'en_AU'
	}, {
		value: 'de_DE',
		name: 'de_DE '
	}]
}, {
	id: 'timestamp',
	name: 'Data e Horário',
	validation: {
		primitiveType: 'STRING',
		entityType: 'DATE_TIME',
		pattern: 'yyyy-MM-ddTHH:mm:ss'
	}
}, {
	id: 'limit',
	name: 'Quantidade',
	validation: {
		primitiveType: 'INTEGER',
		min: 1,
		max: 50
	}
}, {
	id: 'offset',
	name: 'Página',
	validation: {
		primitiveType: 'INTEGER'
	}
}];

describe('PlaylistFilter component', () => {
	const fetchFilters = jest.fn();
	const onFilterChange = jest.fn();
	const playlistList = shallow(<PlaylistFilter
		fetchFilters={fetchFilters}
		onFilterChange={onFilterChange}
		loadingFilters
		selectedFilters={{}}
		possibleFilters={[]}
	/>);
	it('should render loading properly', () => {
		expect(playlistList).toMatchSnapshot();
	});
	it('should render filters properly', () => {
		playlistList.setProps({
			fetchFilters,
			loadingFilters: false,
			selectedFilters: {},
			possibleFilters: filters
		});
		expect((playlistList).find(EntityFilter)).toHaveLength(1);
		expect(fetchFilters).toHaveBeenCalled();
		expect(playlistList).toMatchSnapshot();
	});
});
