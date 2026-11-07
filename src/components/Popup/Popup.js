// Компонент попап - модальное окно с информацией о товаре

import { useEffect } from 'react';

import './Popup.css';

export default function Popup({ isOpen, onClose, popupCard }) {
  const card = popupCard || {};
  const whatsappUrl = `https://wa.me/79093872327?text=${encodeURIComponent(card.linkText || '')}`;

  // Закрытие по оверлэю
  const handleCloseOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
    else return;
  }

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleEscape = (evt) => {
      if (evt.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return(
    <div className={
      isOpen
        ? 'popup popup_opened'
        : 'popup'
      }
      aria-hidden={!isOpen}
      onClick={handleCloseOnOverlay}>
        <section className='popup__container' role='dialog' aria-modal={isOpen} aria-labelledby='popup-title'>
          <button className='popup__close-button' type='button' aria-label='Закрыть окно' onClick={onClose}>×</button>
          <div className='popup__card'>
            <header className='popup__header'>
              <p className='popup__eyebrow'>ТЕХ-КАРТА · СОСТАВ И ЦЕНА</p>
              <h2 className="popup__title" id='popup-title'>{card.title}</h2>
            </header>
            <div className='popup__image-container'>
              <img className="popup__image" src={card.link} alt={card.alt || ''}/>
              <span className='popup__image-stamp'>−50%</span>
            </div>
            <div className="popup__description">
              <div className='popup__price' aria-label={`Цена ${card.newCost}, прежняя цена ${card.cost}`}>
                <span className='popup__old-price'>{card.cost}</span>
                <strong>{card.newCost}</strong>
              </div>
              <h3 className="popup__description-title">Что входит</h3>
              <ul className='popup__description-list'>
                {card.description && card.description.map((item, index) => <li className='popup__description-text' key={index}>{item}</li>)}
              </ul>
              <a className='popup__button' href={whatsappUrl} target='_blank' rel='noreferrer'>
                Купить в WhatsApp <span aria-hidden='true'>↗</span>
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}
