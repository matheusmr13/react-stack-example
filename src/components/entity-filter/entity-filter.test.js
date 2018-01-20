import React from 'react';
import EntityFilter from 'components/entity-filter';
import FieldFilter from 'components/field-filter';
import {
	shallow
} from 'enzyme';

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
	id: 'country',
	name: 'País',
	values: [{
		value: 'AU',
		name: 'Australia'
	}, {
		value: 'DE',
		name: 'Alemanhã'
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

describe('EntityFilter component', () => {
	it('should render properly', () => {
		const entityFilter = shallow(<EntityFilter filters={filters} />);
		expect(entityFilter.find(FieldFilter)).toHaveLength(5);
		expect(entityFilter).toMatchSnapshot();
	});
	it('should record all entity filter after change', () => {
		let actualFilters;
		const onChange = (newFilters) => {
			actualFilters = newFilters;
		};
		const entityFilter = shallow(<EntityFilter filters={filters} onChange={onChange} />);
		entityFilter.instance().onChange('offset', 1);
		expect(actualFilters).toEqual({ offset: 1 });

		entityFilter.instance().onChange('limit', 2);
		expect(actualFilters).toEqual({ offset: 1, limit: 2 });

		entityFilter.instance().onChange('timestamp', '2018-10-10T10:10:00');
		expect(actualFilters).toEqual({ offset: 1, limit: 2, timestamp: '2018-10-10T10:10:00' });
	});
});
