import React from 'react';
import DatetimeFilter from 'components/field-filter/datetime-filter';
import UnlimitedIntegerFilter from 'components/field-filter/unlimited-integer-filter';
import LimitedIntegerFilter from 'components/field-filter/limited-integer-filter';
import ListFilter from 'components/field-filter/list-filter';
import FieldFilter from 'components/field-filter';
import {
	shallow
} from 'enzyme';

const listFilter = {
	id: 'locale',
	name: 'Locale',
	values: [{
		value: 'en_AU',
		name: 'en_AU'
	}]
};

const datetimeFilter = {
	id: 'timestamp',
	name: 'Data e Horário',
	validation: {
		primitiveType: 'STRING',
		entityType: 'DATE_TIME',
		pattern: 'yyyy-MM-ddTHH:mm:ss'
	}
};

const limitedIntegerFilter = {
	id: 'limit',
	name: 'Quantidade',
	validation: {
		primitiveType: 'INTEGER',
		min: 1,
		max: 50
	}
};

const unlimitedIntegerFilter = {
	id: 'offset',
	name: 'Página',
	validation: {
		primitiveType: 'INTEGER'
	}
};

describe('FieldFilter component', () => {
	it('should choose DatetimeFilter', () => {
		const fieldFilter = shallow(<FieldFilter spec={datetimeFilter} />);
		expect(fieldFilter.instance().getComponentToRender()).toBe(DatetimeFilter);
	});
	it('should choose ListFilter', () => {
		const fieldFilter = shallow(<FieldFilter spec={listFilter} />);
		expect(fieldFilter.instance().getComponentToRender()).toBe(ListFilter);
	});
	it('should choose UnlimitedIntegerFilter', () => {
		const fieldFilter = shallow(<FieldFilter spec={unlimitedIntegerFilter} />);
		expect(fieldFilter.instance().getComponentToRender()).toBe(UnlimitedIntegerFilter);
	});
	it('should choose LimitedIntegerFilter', () => {
		const fieldFilter = shallow(<FieldFilter spec={limitedIntegerFilter} />);
		expect(fieldFilter.instance().getComponentToRender()).toBe(LimitedIntegerFilter);
	});
	it('should choose null', () => {
		const fieldFilter = shallow(<FieldFilter spec={{}} />);
		expect(fieldFilter.instance().getComponentToRender()).toBeNull();
	});
});
