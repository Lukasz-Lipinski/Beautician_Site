import { useContext } from 'react';
import dataContext from '../../components/Data/dataContext';
import FormHOC from '../../components/HOC-Sites/FormHOC';

import '../../styles/reservation.scss';

function Reservation(props) {
  const data = useContext(dataContext);
  const { classess } = data;
  const { reservation } = classess;

  const {
    onChangeNameAndSurname,
    valueNameAndSurname,
    onChangeEmail,
    valueEmail,
    onSubmit,
    onChangeDate,
    valueDate
  } = props;

  return (
    <form onSubmit={onSubmit} className={reservation}>
      <div>
        <label htmlFor='#NameAndSurname'>Imię i nazwisko:</label>
        <input id="NameAndSurname" type="text" onChange={onChangeNameAndSurname} value={valueNameAndSurname} />
      </div>

      <div>
        <label htmlFor='#emailAddress'>Adres email:</label>
        <input id="emailAddress" type="text" onChange={onChangeEmail} value={valueEmail} />
      </div>

      <div>
        <label htmlFor='#reservationDay'>Dzien wizyty:</label>
        <input id ="reservationDays" type="date" onChange={onChangeDate} value={valueDate} />
      </div>


      <button type="send">Send</button>
    </form>
  )
};

export default FormHOC(Reservation);