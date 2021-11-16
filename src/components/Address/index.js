
import { GoClock, GoLocation } from "react-icons/go";
import { BiPhone } from 'react-icons/bi';
import { IoMailOutline } from 'react-icons/io5';

export default () => {
  return (
    <>
      <h2>TSU</h2>
      <div>
        <span><GoLocation /></span>
        <div>
          <p>ul. Wrocławska 1234/231</p>
          <p>53-100, Wrocław</p>
        </div>
      </div>

      <div>
        <span><GoClock /></span>
        <div>
          <p>Pon-Pt: 8:00-21:00</p>
          <p>Sb: 8:00-15:00</p>
        </div>
      </div>

      <div>
        <span><BiPhone /></span>
        <div>
          <p>Fryzjer:</p>
          <p>+48 222 333 111</p>
          <p>Kosmetologia:</p>
          <p>+48 11 222 444</p>
        </div>
      </div>

      <div>
        <span><IoMailOutline /></span>
        <div>
          <p>fryzjer@tsu.example.com</p>
          <p>kosmetologia@tsu.example.com</p>
        </div>
      </div>
    </>
  )
}