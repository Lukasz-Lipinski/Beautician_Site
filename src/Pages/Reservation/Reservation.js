import { useContext } from 'react';
import { Address } from '../../components';

import dataContext from '../../components/Data/dataContext';
import FormHOC from '../../components/HOC-Sites/FormHOC';

import '../../styles/reservation.scss';

function Reservation(props) {
  const data = useContext(dataContext);
  const { classess } = data;
  const { reservation, contact } = classess;

  const {
    onChangeNameAndSurname,
    valueNameAndSurname,
    onChangeEmail,
    valueEmail,
    onSubmit,
    onChangeDate,
    valueDate,
    dateIsRequired,
    nameAndSurnameIsRequired,
    emailIsRequired } = props;

  return (
    <>
      <form onSubmit={onSubmit} className={reservation}>
        <div>
          <label htmlFor='#NameAndSurname'>Imię i nazwisko:</label>
          <input className={`isValid--${nameAndSurnameIsRequired}`} id="NameAndSurname" type="text" onChange={onChangeNameAndSurname} value={valueNameAndSurname} />
          {nameAndSurnameIsRequired ? null : <p>Pole wymagane</p>}
        </div>

        <div>
          <label htmlFor='#emailAddress'>Adres email:</label>
          <input className={`isValid--${emailIsRequired}`} id="emailAddress" type="text" onChange={onChangeEmail} value={valueEmail} />
          {emailIsRequired ? null : <p>Pole wymagane</p>}
        </div>

        <div>
          <label htmlFor='#reservationDay'>Dzień wizyty:</label>
          <input className={`isValid--${dateIsRequired}`} id="reservationDays" type="date" onChange={onChangeDate} value={valueDate} />
          {dateIsRequired ? null : <p>Pole wymagane</p>}
        </div>


        <div>
          <button type="submit">Wyślj</button>
        </div>
      </form>

      <div className={`${contact.container}--${contact.address}`}>
        <Address />
      </div>

    </>
  )
};

export default FormHOC(Reservation);