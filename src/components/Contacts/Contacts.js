// Секция контакты

import { Link } from 'react-router-dom';
import iphoneImage from '../../images/phone.png';

import '../Contacts/Contacts.css';

export default function Contacts() {
  return(
    <section className='contacts' aria-label='Секция контакты' id='contacts'>
      <h2 className='section-title'>КОНТАКТЫ</h2>
      <div className='contacts__container'>
        <nav className='contacts__social-icons'>
          <Link  to="https://wa.me/79093872327" target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_whatsApp'></div></Link>
          <Link  to="https://www.instagram.com/cakesby.julia" target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_inst'></div></Link>
          <Link  to="https://t.me/cakesby_julia " target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_telegram'></div></Link>
        </nav>
        <img className='contacts__image' src={iphoneImage} alt="Изображение айфона с социальной сетью"></img>
      </div>
    </section>
  )
};
