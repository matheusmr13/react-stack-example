import React from 'react';
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
	/>
);

export default ListFilter;
