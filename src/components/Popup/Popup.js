// Компонент попап - модальное окно с информацией о товаре

import { Link } from 'react-router-dom';

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
            <div className='popup__image-container'>
              <img className="popup__image" src={ props.popupCard && props.popupCard.link } alt={ props.popupCard && props.popupCard.alt }/>
              <div className='popup__price'>{ props.popupCard.cost && props.popupCard.cost }</div>
            </div>
            <div className="popup__description">
              <h3 className="popup__description-title">Состав:</h3>
              <ul className='popup__description-list'>
                {props.popupCard.description && props.popupCard.description.map((item) => <li className='popup__description-text'>{item}</li>)}
              </ul>
              <Link className='popup__link' to={`https://wa.me/79093872327?text=${props.popupCard.linkText}`} target='_blank'>
                <button className="popup__button">
                  <img src={decorImage} alt='Декоративное изображение' className="popup__button-image rotate" />Купить
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
