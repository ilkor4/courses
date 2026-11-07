// Компонент бургер-меню

import { useEffect } from 'react';

import headerLogo from '../../images/logo.png';
import '../Burger/Burger.css';

export default function Burger(props) {
  const { isOpen, onClose } = props;
  const navigation = [
    { id: 'carousel', label: 'Тех-карты' },
    { id: 'about', label: 'Что внутри' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'questions', label: 'Вопросы' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const handleNavigate = (sectionId) => {
    props.onClose();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Закрытие по оверлэю
  const handleCloseOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) props.onClose();
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
      props.isOpen
        ? 'burger burger_opened'
        : 'burger'
      }
      aria-hidden={!props.isOpen}
      onClick={handleCloseOnOverlay}>
        <aside className='burger__container' role='dialog' aria-modal={props.isOpen} aria-label='Навигация по сайту'>
          <div className='burger__topline'>
            <span>МЕНЮ · 05 РАЗДЕЛОВ</span>
            <button type='button' className='burger__close-button' aria-label='Закрыть меню' onClick={props.onClose}>×</button>
          </div>
          <div className='burger__content'>
            <nav className='burger__menu'>
              <button type='button' onClick={() => handleNavigate('main')} className='burger__brand'>
                <img className='burger__logo' src={headerLogo} alt=''/>
                <span>CAKES BY JULIA</span>
              </button>
              <ul className='burger__links'>
                {navigation.map((item, index) => (
                  <li key={item.id}>
                    <button type='button' onClick={() => handleNavigate(item.id)} className='burger__link'>
                      <span className='burger__link-number'>{String(index + 1).padStart(2, '0')}</span>
                      <span className='burger__link-label'>{item.label}</span>
                      <span className='burger__link-arrow' aria-hidden='true'>↗</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='burger__social-icons'>
              <a href='https://wa.me/79093872327' target='_blank' rel='noreferrer' aria-label='WhatsApp' className='burger__social-link'><span className='burger__social-icon burger__social-icon_whatsApp'/><span>WhatsApp</span></a>
              <a href='https://www.instagram.com/cakesby.julia' target='_blank' rel='noreferrer' aria-label='Instagram' className='burger__social-link'><span className='burger__social-icon burger__social-icon_inst'/><span>Instagram</span></a>
              <a href='https://t.me/cakesby_julia' target='_blank' rel='noreferrer' aria-label='Telegram' className='burger__social-link'><span className='burger__social-icon burger__social-icon_telegram'/><span>Telegram</span></a>
            </div>
          </div>
          <p className='burger__caption'>Кондитерская мастерская · Волгоград</p>
        </aside>
    </div>
  )
}
