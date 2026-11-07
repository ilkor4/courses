// Секция описание тех-карты

import techcardImage from '../../images/techard-preview.jpg'
import '../About/About.css';

export default function About() {
  return(
    <section className='about' id='about'>
      <header className='about__header'>
        <div className='about__eyebrow'>
          <span>ПОДРОБНО И ПОШАГОВО</span>
          <span>СОДЕРЖАНИЕ ТЕХ-КАРТЫ</span>
        </div>
        <h2 className='about__headline'>Больше, чем<br />просто рецепт</h2>
        <p className='about__intro'>Понятный план работы с десертом — от списка ингредиентов до советов из практики.</p>
      </header>
      <div className='about__container'>
        <figure className='about__image-container'>
          <div className='about__image-frame'>
            <img className='about__image' src={techcardImage} alt='Пример тех-карты на торт «Сникерс»'/>
            <span className='about__image-label'>ПРИМЕР ТЕХ-КАРТЫ</span>
            <span className='about__image-stamp'><strong>04</strong><small>РАЗДЕЛА</small></span>
          </div>
          <figcaption className='about__image-caption'>Тех-карта «Сникерс»<span>01 / 04</span></figcaption>
        </figure>
        <ul className='about__text-container'>
          <li className='about__item'>
            <div className='about__item-heading'>
              <span className='about__number'>01</span>
              <h3 className='about__title'>Процесс</h3>
            </div>
            <p className='about__text'>Пошаговое приготовление каждого элемента десерта.</p>
          </li>
          <li className='about__item'>
            <div className='about__item-heading'>
              <span className='about__number'>02</span>
              <h3 className='about__title'>Рецепт</h3>
            </div>
            <p className='about__text'>Точный список ингредиентов в граммах и миллилитрах.</p>
          </li>
          <li className='about__item'>
            <div className='about__item-heading'>
              <span className='about__number'>03</span>
              <h3 className='about__title'>Идеи</h3>
            </div>
            <p className='about__text'>Вкусовые сочетания для вашего вдохновения.</p>
          </li>
          <li className='about__item'>
            <div className='about__item-heading'>
              <span className='about__number'>04</span>
              <h3 className='about__title'>Советы</h3>
            </div>
            <p className='about__text'>Практические нюансы из кондитерского опыта.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
