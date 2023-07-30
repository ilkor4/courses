import { cardsArray } from '../../utils/constants';
import Card from '../Card/Card';

import '../Carousel/Carousel.css';

export default function Carousel() {
  return(
    <section className='carousel'>
      <h2 className='section-title'>ТЕХ-КАРТЫ</h2>
      <ul className='carousel__cards'>
        {cardsArray.map((card, index) => <li className='carousel__card' key={index}><Card card={card}/></li>)}
      </ul>
    </section>
  )
}
