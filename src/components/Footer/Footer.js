import '../../styles/footer.scss';
import { GoClock, GoLocation } from "react-icons/go";
import { BiPhone } from 'react-icons/bi';
import { IoMailOutline, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';

export default function Footer(props) {
  const { className } = props;

  return (
    <footer className={`${className}`}>
      <div className={`${className}__information`}>
        <div>
          <span><GoLocation /></span>
          <span>TSU</span>
          <span>ul. Wrocławska 1234/231</span>
          <span>53-100, Wrocław</span>
        </div>
        <div>
          <span><GoClock /></span>
          <span>Pon-Pt: 8:00-21:00</span>
          <span>Sb: 8:00-15:00</span>
        </div>
        <div>
          <span><BiPhone /></span>
          <span>Fryzjer:</span>
          <span>+48 222 333 111</span>
          <span>Kosmetologia:</span>
          <span>+48 11 222 444</span>
        </div>
        <div>
          <span><IoMailOutline /></span>
          <span>fryzjer@tsu.example.com</span>
          <span>kosmetologia@tsu.example.com</span>
        </div>
      </div>
      <div className={`${className}__icons`}>
        <div>
          <span><IoLogoFacebook id="logoFacebook" /></span>
        </div>
        <div>
          <span><IoLogoInstagram id="logoInstagram" /></span>
        </div>
      </div>
    </footer>
  )
}