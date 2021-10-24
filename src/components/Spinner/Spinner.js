import { useContext } from 'react';
import dataContext from "../Data/dataContext";

import '../../styles/spinner.scss';

export default function Spinner() {
  const data = useContext(dataContext);
  const { classess } = data;

  return (
    <div className={classess.spinner}>
      Loading
    </div>
  )
}