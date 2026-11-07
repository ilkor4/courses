// Секция контакты

import iphoneImage from '../../images/phone.png';

import '../Contacts/Contacts.css';

export default function Contacts() {
  return(
    <section className='contacts' aria-label='Секция контакты' id='contacts'>
      <header className='contacts__header'>
        <div className='contacts__eyebrow'>
          <span>НА СВЯЗИ</span>
          <span>CAKES BY JULIA · ВОЛГОГРАД</span>
        </div>
        <h2 className='contacts__title'>Контакты</h2>
        <p className='contacts__intro'>Помогу выбрать тех-карту и отвечу на вопросы. Напишите, как вам удобнее.</p>
      </header>
      <div className='contacts__container'>
        <nav className='contacts__social-icons' aria-label='Способы связи'>
          <a className='contacts__social-link' href='https://wa.me/79093872327' target='_blank' rel='noreferrer'>
            <span className='contacts__social-icon contacts__social-icon_whatsApp' aria-hidden='true' />
            <span>WhatsApp</span><span className='contacts__social-arrow' aria-hidden='true'>↗</span>
          </a>
          <a className='contacts__social-link' href='https://www.instagram.com/cakesby.julia' target='_blank' rel='noreferrer'>
            <span className='contacts__social-icon contacts__social-icon_inst' aria-hidden='true' />
            <span>Instagram</span><span className='contacts__social-arrow' aria-hidden='true'>↗</span>
          </a>
          <a className='contacts__social-link' href='https://t.me/cakesby_julia' target='_blank' rel='noreferrer'>
            <span className='contacts__social-icon contacts__social-icon_telegram' aria-hidden='true' />
            <span>Telegram</span><span className='contacts__social-arrow' aria-hidden='true'>↗</span>
          </a>
        </nav>
        <img className='contacts__image' src={iphoneImage} alt='Профиль Cakes by Julia в Instagram на экране телефона'/>
      </div>
    </section>
  )
};
