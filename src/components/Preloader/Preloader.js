// Компонент прелоудер - крутящийся логотип

import '../Preloader/Preloader.css';

export default function Preloader(props) {
  return(
    <div className={props.isOpen
      ? 'preloader preloader_open'
      : 'preloader'
    } aria-hidden={!props.isOpen}>
      <div className="preloader__logo"></div>
      <p className='preloader__label'>Cakes by Julia</p>
    </div>
  )
}
