import { useContext, useState } from 'react';
import MenuLinks from './MenuLinks';

import dataContext from '../Data/dataContext';
import Toggler from './Toggler';

const useScreen = () => {
  const [width, setWidth] = useState(window.screen.width);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
  });
  return [width];
}

export default function Menu_links() {
  const [width] = useScreen();

  const data = useContext(dataContext);
  const { classess } = data;


  return (
    <div className={`${classess.menuNav}`} id="top">
      <div className={`${classess.menuNav}__logo`}>
        <img alt="logo" />
      </div>
      {
        width >= 770 ?
          <MenuLinks />
          :
          <Toggler />
      }

    </div>
  )
}