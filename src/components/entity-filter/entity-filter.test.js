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
	}, {
		value: 'pt_BR',
		name: 'pt_BR'
	}, {
		value: 'fr_FR',
		name: 'fr_FR'
	}, {
		value: 'en_US',
		name: 'en_US'
	}, {
		value: 'es_AR',
		name: 'es_AR'
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
	}, {
		value: 'BR',
		name: 'Brasil'
	}, {
		value: 'PT',
		name: 'Portugal'
	}, {
		value: 'en_US',
		name: 'EUA'
	}, {
		value: 'RU',
		name: 'Rússia'
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
		expect(entityFilter).toMatchSnapshot();
	});
	it('should has correct fields on created filter', () => {
		const entityFilter = shallow(<EntityFilter filters={filters} />);
		expect(entityFilter.find(FieldFilter)).toHaveLength(5);
	});
});
