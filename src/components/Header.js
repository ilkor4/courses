import headerLogo from '../images//logo.png';
import '../styles/Header.css';

export default function Header() {
  return(
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип кондитерского бренда" />
      <button className='header__menu-button'></button>
    </div>
  )
}
