// Компонент бургер-меню

import { HashLink as Link } from 'react-router-hash-link';

import headerLogo from '../../images/logo.png';
import '../Burger/Burger.css';

export default function Burger(props) {
  // Закрытие по оверлэю
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
          <div className='burger__content'>
            <nav className='burger__menu'>
              <Link
                onClick={ () => props.onClose() }
                to='#main'
                className='burger__link'>
                  <img className="header__logo" src={headerLogo} alt="Логотип кондитерского бренда" />
              </Link>
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
            <ul className='burger__caption'>
              <li className='burger__text'>Кондитерская мастерская "Cakes by Julia"</li>
              <li className='burger__text'>г. Волгоград</li>
            </ul>
            <div className='burger__social-icons'>
              <Link  to="https://wa.me/79093872327" target='_blank' rel='noreferrer'><div className='burger__social-icon burger__social-icon_whatsApp'></div></Link>
              <Link  to="https://www.instagram.com/cakesby.julia" target='_blank' rel='noreferrer'><div className='burger__social-icon burger__social-icon_inst'></div></Link>
              <Link  to="https://t.me/cakesby_julia" target='_blank' rel='noreferrer'><div className='burger__social-icon burger__social-icon_telegram'></div></Link>
            </div>
          </div>
        </div>
    </div>
  )
}
