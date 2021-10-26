import { useContext } from 'react';
import dataContext from '../Data/dataContext';

export default function SpecialOffersList() {
  const data = useContext(dataContext);
  const { classess, specialOffersListDescription } = data;
  const { specialoffers } = classess;


  return (
    <div className={`${specialoffers}--specialOffersList`}>
      <span>opis</span>
      <span><img /></span>
      <span>opis</span>
    </div>
  )
}