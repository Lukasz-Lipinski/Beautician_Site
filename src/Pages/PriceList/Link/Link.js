import React, { memo } from 'react';

function Link(props) {
  const { label, idIndicatedByLabel } = props;

  return (
    <a href={`#${idIndicatedByLabel}`}>{label}</a>
  )
}

export default memo(Link);