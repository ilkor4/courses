// Компонент шапка

import headerLogo from '../../images/logo.png';
import '../Header/Header.css';

export default function Header(props) {
  return(
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип кондитерского бренда" />
      <button
        className='header__menu-button'
        type='button'
        aria-label='Открыть меню'
        onClick={ () => props.onOpen() }>
      </button>
    </header>
  )
}
