import { privacyText } from "../../utils/constants";

import './Privacy.css';

export default function Privacy(props) {
  // Закрытие по оверлэю
  const handleCloseOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) props.onClose();
    else return;
  }

  return(
    <div className={
      props.isOpen
        ? 'privacy privacy_opened'
        : 'privacy'
      }
      onClick={handleCloseOnOverlay}>
        <div className='privacy__container'>
          <div className='privacy__close-button'
            onClick={ () => props.onClose() }>
          </div>
          <p className="privacy__text">{privacyText}</p>
      </div>
    </div>
  )
}
