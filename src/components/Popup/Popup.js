// Компонент попап - модальное окно с информацией о товаре

import decorImage from '../../images/buttons/decor.svg';
import './Popup.css';

export default function Popup(props) {
  // Закрытие по оверлэю
  const handleCloseOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) props.onClose();
    else return;
  }

  return(
    <div className={
      props.isOpen
        ? 'popup popup_opened'
        : 'popup'
      }
      onClick={handleCloseOnOverlay}>
        <div className='popup__container'>
          <div className='popup__close-button'
            onClick={ () => props.onClose() }>
          </div>
          <div className='popup__card'>
            <h2 className="popup__title">{ props.popupCard && props.popupCard.title }</h2>
            <img className="popup__image" src={ props.popupCard && props.popupCard.link } alt={ props.popupCard && props.popupCard.alt }/>
            <div className="popup__description">
              <h3 className="popup__description-title">Состав:</h3>
              <ul className='popup__description-list'>
                {props.popupCard.description && props.popupCard.description.map((item) => <li className='popup__description-text'>{item}</li>)}
              </ul>
              <button className="popup__button">
                <img src={decorImage} alt='Декоративное изображение' className="popup__button-image rotate" />Купить
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
