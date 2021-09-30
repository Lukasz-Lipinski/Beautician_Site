import { NavLink } from 'react-router-dom';

import linksName from '../Data/linksName';

export default function Menu_links(props) {
  const { className } = props;
  const active = { color: '#8cd425' };

  return (
    <div className={`${className}`}>
      <div className={`${className}__logo`}>
        <img url='./pictures/Logo.png' alt="logo" />
      </div>
      <div className={`${className}__links`}>
        {linksName.map((link, index) => {
          if (link.componentName === 'Reservation') {
            return <NavLink activeStyle={active} key={`listName-link-${index}`} to={`/${link.src}`}><b>{link.link}</b></NavLink>
          }
          return <NavLink activeStyle={active} key={`listName-link-${index}`} to={`/${link.src}`}>{link.link}</NavLink>
        })}
      </div>
    </div>
  )
}