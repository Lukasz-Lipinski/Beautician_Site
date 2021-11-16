import { useContext } from 'react';
import dataContext from '../../components/Data/dataContext';
import Form from './Form/Form';


import '../../styles/contact.scss';
import { Address } from '../../components';

export default function Contact() {
  const data = useContext(dataContext);
  const { contact } = data.classess;

  return (
    <div className={`${contact.container}`}>
      <div className={`${contact.container}--${contact.address}`}>

        <Address />

      </div>

      <Form className={`${contact.container}--${contact.contactForm}`} />
    </div>
  )
}