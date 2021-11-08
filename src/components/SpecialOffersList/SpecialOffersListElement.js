import { useContext } from 'react';
import dataContext from '../Data/dataContext';

export default function SpecialOffersListElement(props) {
  const data = useContext(dataContext);
  const { classess } = data;
  const { specialoffers } = classess;

  const { index, firstDescription, secondDescription, firstPrice, secondPrice } = props;

  console.log(secondDescription);

  return (
    <div className={`${specialoffers}--content--specialOffersList`} style={{ border: '1px solid black' }}>
      {index % 2 ? <img className={`${specialoffers}--content--specialOffersList__img${index}`} alt={`imageRight--${index}`} /> : <span>{firstDescription} {`cena: ${firstPrice}`}</span>}

      {!(index % 2) ? <img className={`${specialoffers}--content--specialOffersList__img${index}`} alt={`imageMiddle--${index}`} /> : <span>{firstDescription} {`cena: ${firstPrice}`}</span>}

      {index % 2 ? <img className={`${specialoffers}--content--specialOffersList__img${index+5}`} alt={`imageLeft--${index+5}`} /> : <span>{secondDescription} {`cena: ${secondPrice}`}</span>}

    </div>
  )
}