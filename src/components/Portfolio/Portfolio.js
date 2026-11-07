// Секция портфолио - комонент с слайдером отзывов

import { portfolioArray } from '../../utils/constants';

import '../Portfolio/Portfolio.css';

export default function Portfolio() {
  return(
    <section className='portfolio' id='reviews'>
      <header className='portfolio__header'>
        <div className='portfolio__eyebrow'>
          <span>ВПЕЧАТЛЕНИЯ УЧЕНИКОВ</span>
          <span>{String(portfolioArray.length).padStart(2, '0')} ОТЗЫВОВ</span>
        </div>
        <h2 className='portfolio__title'>Отзывы</h2>
        <div className='portfolio__intro'>
          <p>Слова и результаты тех, кто уже готовил по тех-картам.</p>
          <span className='portfolio__swipe-hint'>Листайте <span aria-hidden='true'>↔</span></span>
        </div>
      </header>
      <div className='portfolio__container'>
        <ul className='portfolio__cards'>
          {portfolioArray.map((item, index) => {
            return(
              <li key={index} className='portfolio__image-container'>
                <figure className='portfolio__figure'>
                  <img src={item.link} className='portfolio__image' alt={item.alt}/>
                  <figcaption className='portfolio__caption'>
                    <span>{item.alt}</span>
                    <span>{String(index + 1).padStart(2, '0')} / {String(portfolioArray.length).padStart(2, '0')}</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='decor'>
        <div className='decor__item'></div>
      </div>
    </section>
  )
}
