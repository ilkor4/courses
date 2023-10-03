// Компонент подвал

import { HashLink as Link } from 'react-router-hash-link';
import headerLogo from '../../images/logo.png';

import '../Footer/Footer.css';

export default function Footer(props) {
  return(
    <footer className='footer'>
      <div className='decor'>
        <div className='decor__item'></div>
      </div>
      <div className='footer__content'>
          <Link
            to='#main'
            className='burger__link'>
              <img className="footer__logo" src={headerLogo} alt="Логотип кондитерского бренда" />
          </Link>
        <div className='footer__text-container'>
          <ul className='footer__text-list'>
            <li className='footer__text'>ИП Саратовцева Юлия</li>
            <li className='footer__text'>Валерьевна</li>
            <li className='footer__text'>ИНН 190123177745</li>
            <li className='footer__text'>ОГРН 321774600524921</li>
          </ul>
          <button onClick={ props.onOpen} className='footer__link'><p className='footer__text'>Политика конфиденциальности</p></button>
          <Link to='https://github.com/ilkor4' target='blank' className='footer__link'>
            <p className='footer__text'>Дизайн и вёрстка сайта -</p>
            <p className='footer__text'>@ilkor</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
