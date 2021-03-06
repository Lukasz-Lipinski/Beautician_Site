import { useMemo, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import dataContext from '../Data/dataContext';



export default function MenuLinks() {
  const active = useMemo(() => ({ color: '#8cd425' }), []);

  const data = useContext(dataContext);
  const { linksName, classess } = data;

  return (
    <div className={`${classess.menuNav}__links`}>
      {linksName.map((link, index) => {
        if (link.componentName === 'Reservation') {
          return <NavLink reservation activeStyle={active} key={`listName-link-${index}`} to={`/${link.src}`}>{link.link}</NavLink>
        }
        return <NavLink activeStyle={active} key={`listName-link-${index}`} to={`/${link.src}`}>{link.link}</NavLink>
      })}
    </div>
  )
}