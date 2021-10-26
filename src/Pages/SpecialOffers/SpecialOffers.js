import { useContext } from 'react';
import dataContext from '../../components/Data/dataContext';
import '../../styles/specialloffers.scss';

export default function SpecialOffers() {
  const data = useContext(dataContext);
  const { classess } = data;
  const { specialoffers } = classess;

  return (
    <div className={specialoffers}>
      <h1>Promocje</h1>
      <p>Sprawdź co dla Ciebie przygotowaliśmy w okazyjnych cenach!</p>
      <div className={`${specialoffers}--content`}>
        <img alt="logo" />
          <div>
            opcja 1
            <span> zdjecie </span>
            opcja2
          </div>

          <div>
            zdjecie
            <span> opcja3 </span>
            zdjecie
          </div>
          
      </div>
    </div>
  )
}