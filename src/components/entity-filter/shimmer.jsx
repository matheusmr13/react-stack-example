import React from 'react';
import FieldShimmer from 'components/field-filter/shimmer';

const EntityFilterShimmer = () => Array(4).fill(0).map((e, i) => <FieldShimmer key={i} />);

export default EntityFilterShimmer;
