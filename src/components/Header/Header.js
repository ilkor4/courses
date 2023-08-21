import headerLogo from '../../images/logo.png';
import '../Header/Header.css';

export default function Header(props) {
  return(
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип кондитерского бренда" />
      <button
        className='header__menu-button'
        onClick={ () => props.onOpen() }>
      </button>
    </div>
  )
}
