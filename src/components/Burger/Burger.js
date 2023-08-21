import { HashLink as Link } from 'react-router-hash-link';

import headerLogo from '../../images/logo.png';
import '../Burger/Burger.css';

export default function Burger(props) {
  const handleCloseOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) props.onClose();
    else return;
  }

  return(
    <div className={
      props.isOpen
        ? 'burger burger_opened'
        : 'burger'
      }
      onClick={handleCloseOnOverlay}>
        <div className='burger__container'>
          <div className='burger__close-button'
            onClick={ () => props.onClose() }>
          </div>
          <nav className='burger__menu'>
            <ul className='burger__links'>
              <li>
                <Link
                onClick={ () => props.onClose() }
                  to='#carousel'
                  className='burger__link'>Тех-карты
                </Link>
              </li>
              <li>
                <Link
                  onClick={ () => props.onClose() }
                  to='#about'
                  className='burger__link'>Описание
                </Link>
              </li>
              <li>
                <Link
                  onClick={ () => props.onClose() }
                  to='#reviews'
                  className='burger__link'>Отзывы
                </Link>
              </li>
              <li>
                <Link
                  onClick={ () => props.onClose() }
                  to='#questions'
                  className='burger__link'>Частые вопросы
                  </Link>
              </li>
              <li>
                <Link
                  onClick={ () => props.onClose() }
                  to='#contacts'
                  className='burger__link'>Контакты
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            onClick={ () => props.onClose() }
            to='#main'
            className='burger__link'>
              <img className="header__logo" src={headerLogo} alt="Логотип кондитерского бренда" />
          </Link>
        </div>
    </div>
  )
}
