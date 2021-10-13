import React, { useContext, useState } from 'react';
import dataContext from '../../../../components/Data/dataContext';

import { AiOutlinePlus } from 'react-icons/ai';

export default function ServicesListItem({ procedure, key }) {
  const [isHidden, setIsHidden] = useState(true);
  const { classess } = useContext(dataContext);
  const { pricelist } = classess;

  const accordionAction = () => {
    setIsHidden(!isHidden);
  }

  return (
    <li key={key} className={pricelist.serviceListItem}>
      <div><span>{procedure.name} {`${procedure.price} zł`}</span> <a onClick={accordionAction}><AiOutlinePlus /></a></div>
      {isHidden ? null : <div>{procedure.description}</div>}
    </li>
  );
}