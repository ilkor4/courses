import { cardsArray } from '../../utils/constants';
import Card from '../Card/Card';

import '../Carousel/Carousel.css';

export default function Carousel(props) {
  return(
    <section className='carousel' id='carousel'>
      <h2 className='section-title'>ТЕХ-КАРТЫ</h2>
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
    </section>
  )
}
