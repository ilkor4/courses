// Компонент карусель - слайдер товаров

import { cardsArray } from '../../utils/constants';
import Card from '../Card/Card';

import '../Carousel/Carousel.css';

export default function Carousel(props) {
  return(
    <section className='carousel' id='carousel'>
      <header className='carousel__header'>
        <div className='carousel__eyebrow'>
          <span>КАТАЛОГ · BLACK FRIDAY</span>
          <span>{String(cardsArray.length).padStart(2, '0')} ТЕХ-КАРТ</span>
        </div>
        <h2 className='carousel__title'>Тех-карты</h2>
        <div className='carousel__intro'>
          <p>Подробные рецепты авторских десертов</p>
          <span className='carousel__swipe-hint'>Листайте <span aria-hidden='true'>↔</span></span>
        </div>
      </header>
      <div className='carousel__container'>
        <ul className='carousel__cards'>
          {cardsArray.map((card, index) => {
            return (
            <li
              className='carousel__card'
              key={index}
              onClick={ () => props.onOpen(card) }>
                <Card card={card} />
            </li>)
          }
          )}
        </ul>
      </div>
    </section>
  )
}
