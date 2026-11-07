import { privacyText } from "../../utils/constants";
import { useEffect } from 'react';

import './Privacy.css';

export default function Privacy({ isOpen, onClose }) {
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
        ? 'privacy privacy_opened'
        : 'privacy'
      }
      aria-hidden={!isOpen}
      onClick={handleCloseOnOverlay}>
        <section className='privacy__container' role='dialog' aria-modal={isOpen} aria-labelledby='privacy-title'>
          <div className='privacy__header'>
            <div>
              <p className='privacy__eyebrow'>ИНФОРМАЦИЯ</p>
              <h2 className='privacy__title' id='privacy-title'>Политика конфиденциальности</h2>
            </div>
            <button className='privacy__close-button' type='button' aria-label='Закрыть политику' onClick={onClose}>×</button>
          </div>
          <p className="privacy__text">{privacyText}</p>
        </section>
    </div>
  )
}
