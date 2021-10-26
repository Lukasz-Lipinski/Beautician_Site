import { useContext } from 'react';
import dataContext from '../Data/dataContext';

import { AiOutlineArrowUp } from 'react-icons/ai';

import '../../styles/snackbar.scss';

export default () => {
  const data = useContext(dataContext);
  const { classess } = data;
  const { snackbar } = classess;

  return (
    <div className={snackbar}>
      <a href="#top"><AiOutlineArrowUp /></a>
    </div>
  )
}