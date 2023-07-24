import iphoneImage from '../../images/phone.png';

import '../Contacts/Contacts.css';

export default function Contacts() {
  return(
    <section className='contacts' aria-label='Секция контакты'>
      <h2 className='section-title'>КОНТАКТЫ</h2>
      <div className='contacts__container'>
        <nav className='contacts__social-icons'>
          <a  href="https://wa.me/" target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_whatsApp'></div></a>
          <a  href="https://www.instagram.com/" target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_inst'></div></a>
          <a  href="https://t.me/ " target='_blank' rel='noreferrer'><div className='contacts__social-icon contacts__social-icon_telegram'></div></a>
        </nav>
        <img className='contacts__image' src={iphoneImage} alt="Изображение айфона с социальной сетью"></img>
      </div>
    </section>
  )
};
