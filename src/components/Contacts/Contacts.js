import { Link } from 'react-router-dom';
import iphoneImage from '../../images/phone.png';

import '../Contacts/Contacts.css';

export default function Contacts() {
  return(
    <section className='contacts' aria-label='Секция контакты' id='contacts'>
      <div className='contacts__decor'></div>
      <h2 className='section-title section-title_light'>КОНТАКТЫ</h2>
      <div className='contacts__container'>
        <nav className='contacts__social-icons'>
          <Link  to="https://wa.me/" target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_whatsApp'></div></Link>
          <Link  to="https://www.instagram.com/" target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_inst'></div></Link>
          <Link  to="https://t.me/ " target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_telegram'></div></Link>
        </nav>
        <img className='contacts__image' src={iphoneImage} alt="Изображение айфона с социальной сетью"></img>
      </div>
    </section>
  )
};
