import { Link } from 'react-router-dom';

import linksName from '../Data/linksName';

export default function Menu_links(props) {
  const { className } = props;

  return (
    <div className={`${className}`}>
      <div className={`${className}__logo`}>
        <img src='#' alt="logo" />
      </div>
      <div className={`${className}__links`}>
        {linksName.map((link, index) => <Link key={index} to={`${link.src}`} Active>{link.link}</Link>)}
      </div>
    </div>
  )
}