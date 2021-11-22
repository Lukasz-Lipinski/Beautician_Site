import { useState, useContext } from 'react';

import dataContext from '../Data/dataContext';

import { HiOutlineMenu } from 'react-icons/hi';
import MenuLinks from './MenuLinks';

export default () => {
  const [showLinks, setShowLinks] = useState(false);

  const data = useContext(dataContext);

  const spreadLinks = () => {
    setShowLinks(!showLinks);
  };

  const { classess } = data;

  return (
    <>
      <HiOutlineMenu onClick={spreadLinks} className={`${classess.menuNav}__toggler`} />
      {
        showLinks ?
          <MenuLinks />
          :
          null
      }
    </>
  )
}