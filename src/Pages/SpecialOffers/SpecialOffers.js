import React, { useContext } from 'react';
import dataContext from '../../components/Data/dataContext';
import '../../styles/specialloffers.scss';

import { SpecialOffersListElement } from '../../components/';

export default function SpecialOffers() {
  const data = useContext(dataContext);
  const { classess, specialOffersListElement } = data;
  const { specialoffers } = classess;

  return (
    <div className={specialoffers}>
      <h1>Promocje</h1>
      <p>Sprawdź co dla Ciebie przygotowaliśmy w okazyjnych cenach!</p>
      <div className={`${specialoffers}--content`}>
        <img className={`${specialoffers}--content__logo`} alt="logo" />

        {
          specialOffersListElement.map((el, index) => (
            <SpecialOffersListElement
              index={index}
              firstDescription={el.firstDescription}
              secondDescription={el.secondDescription}
              firstPrice={el.firstPrice}
              secondPrice={el.secondPrice}
            />
          ))
        }

      </div>
    </div>
  )
}