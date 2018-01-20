import React from 'react';
import DatetimeFilter from 'components/field-filter/datetime-filter';
import UnlimitedIntegerFilter from 'components/field-filter/unlimited-integer-filter';
import LimitedIntegerFilter from 'components/field-filter/limited-integer-filter';
import ListFilter from 'components/field-filter/list-filter';
import FieldFilter from 'components/field-filter';
import {
	shallow
} from 'enzyme';
import moment from 'moment';

const filters = {
	filters: [{
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
	}]
};

describe('DatetimeFilter component', () => {
			it('should render properly', () => {
				const datetimeFilter = shallow( < DatetimeFilter spec = {
						{
							name: 'Date field'
						}
					}
					/>);
					expect(datetimeFilter).toMatchSnapshot();
				}); it('should merge date and time', () => {
					let lastChangedDate;

					const onChange = (value) => {
						lastChangedDate = value;
					};
					const datetimeFilter = shallow( < DatetimeFilter spec = {
							{
								name: 'Date field'
							}
						}
						onChange = {
							onChange
						}
						/>);
						expect(lastChangedDate).toBeUndefined();

						const dateMoment = moment({
							years: 2018,
							month: 10,
							date: 15
						});
						const hourMoment = moment({
							minutes: 40,
							hours: 10
						}); datetimeFilter.instance().onChange('date', dateMoment.toDate()); datetimeFilter.instance().onChange('time', hourMoment.toDate());

						expect(lastChangedDate).not.toBeUndefined(); expect(lastChangedDate).toBe('2018-11-15T10:40:00-02:00');
					});
			});