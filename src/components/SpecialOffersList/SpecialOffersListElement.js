import { useContext } from 'react';
import dataContext from '../Data/dataContext';

export default function SpecialOffersListElement(props) {
  const data = useContext(dataContext);
  const { classess } = data;
  const { specialoffers } = classess;

  const { index, firstDescription, secondDescription, firstPrice, secondPrice } = props;

  return (
    <div className={`${specialoffers}--content--specialOffersList`} style={{ border: '1px solid black' }}>
      <p>{index}</p>
      {!index % 2 ? <img className={`${specialoffers}--specialOffersList__left${index}`} alt={`imageRight--${index}`} /> : <span>{firstDescription}</span>}

      {index % 2 ? <img className={`${specialoffers}--specialOffersList__middle${index}`} alt={`imageMiddle--${index}`} /> : <span>{firstDescription}</span>}

      {!index % 2 ? <img className={`${specialoffers}--specialOffersList__right${index}`} alt={`imageLeft--${index}`} /> : <span>{secondDescription}</span>}
    </div>
  )
}