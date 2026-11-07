// Компонент подвал

import headerLogo from '../../images/logo.png';

import '../Footer/Footer.css';

export default function Footer(props) {
  const scrollToTop = () => {
    document.getElementById('main')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return(
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__brand'>
          <button className='footer__brand-button' type='button' onClick={scrollToTop} aria-label='Вернуться к началу сайта'>
            <img className='footer__logo' src={headerLogo} alt=''/>
            <span className='footer__brand-name'>Cakes by Julia</span>
          </button>
          <p className='footer__brand-note'>Кондитерская мастерская<br/>Волгоград</p>
        </div>
        <div className='footer__details'>
          <p className='footer__label'>Реквизиты</p>
          <ul className='footer__text-list'>
            <li className='footer__text'>ИП Саратовцева Юлия Валерьевна</li>
            <li className='footer__text'>ИНН 344708345797</li>
            <li className='footer__text'>ОГРНИП 319344300056971</li>
          </ul>
        </div>
        <div className='footer__bottom'>
          <button type='button' onClick={props.onOpen} className='footer__link'>Политика конфиденциальности</button>
          <a href='https://github.com/ilkor4' target='_blank' rel='noreferrer' className='footer__link'>Дизайн и вёрстка · @ilkor</a>
        </div>
      </div>
    </footer>
  )
}
