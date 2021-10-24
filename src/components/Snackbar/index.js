import { useContext } from 'react';
import dataContext from '../Data/dataContext';

import { AiOutlineArrowUp } from 'react-icons/ai';

import '../../styles/backToTop.scss';

export default () => {
  const data = useContext(dataContext);
  const { classess } = data;

  return (
    <div className={classess.backToTop}>
      <a href="#top"><AiOutlineArrowUp /></a>
    </div>
  )
}