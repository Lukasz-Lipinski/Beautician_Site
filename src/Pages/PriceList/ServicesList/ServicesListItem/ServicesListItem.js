import React from 'react';

export default function ServicesListItem({ procedure, key }) {

  return (
    <li key={key}>{procedure.name} {procedure.price} {procedure.description}</li>
  );
}