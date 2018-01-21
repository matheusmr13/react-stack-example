import React from 'react';
import PropTypes from 'prop-types';
import { FilterPropType } from 'services/playlist-filter/proptype';

import AutoComplete from 'material-ui/AutoComplete';

const ListFilter = ({ spec, onChange }) => (
	<AutoComplete
		onNewRequest={selected => onChange(selected.value)}
		key={spec.id}
		floatingLabelText={spec.name}
		filter={AutoComplete.caseInsensitiveFilter}
		dataSource={spec.values}
		dataSourceConfig={{ text: 'name' }}
		openOnFocus
		fullWidth
	/>
);

ListFilter.defaultProps = {
	onChange: () => {}
};

ListFilter.propTypes = {
	onChange: PropTypes.func,
	spec: PropTypes.shape(FilterPropType).isRequired
};

export default ListFilter;
