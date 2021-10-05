import { useContext } from 'react';
import dataContext from '../../components/Data/dataContext';
import Form from './Form/Form';

import { GoClock, GoLocation } from "react-icons/go";
import { BiPhone } from 'react-icons/bi';
import { IoMailOutline } from 'react-icons/io5';

import '../../styles/contact.scss';


export default function Contact() {
  const data = useContext(dataContext);
  const { contact } = data.classess;

  return (
    <div className={`${contact.container}`}>
      <div className={`${contact.container}--${contact.address}`}>

        <h3>TSU</h3>
        <span>
          <GoLocation />
          <span>ul. Wrocławska 1234/231</span>
          <span>53-100, Wrocław</span>
        </span>

        <span>
          <GoClock />
          <span>Pon-Pt: 8:00-21:00</span>
          <span>Sb: 8:00-15:00</span>
        </span>

        <span>
          <BiPhone />
          <span>Fryzjer:</span>
          <span>+48 222 333 111</span>
          <span>Kosmetologia:</span>
          <span>+48 11 222 444</span>
        </span>

        <span>
          <IoMailOutline />
          <span>fryzjer@tsu.example.com</span>
          <span>kosmetologia@tsu.example.com</span>
        </span>

      </div>

        <Form className={`${contact.container}--${contact.contactForm}`} />
    </div>
  )
}