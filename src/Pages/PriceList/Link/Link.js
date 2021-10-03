import React, { memo } from 'react';

function Link(props) {
  const { label, idIndecatedByLabel } = props;

  return (
    <a href={idIndecatedByLabel}>{label}</a>
  )
}

export default memo(Link);