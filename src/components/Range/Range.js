import Card from '../Card/Card';
import handImage from '../../images/hand.png';
import chezeecakesImage from '../../images/techCards/cheezecakes.jpg';
import snickersImage from '../../images/techCards/snickers.jpg';
import mangoImage from '../../images/techCards/mango.jpg'

import '../Range/Range.css';

export default function Range(){
  return(
    <section className='range' aria-label="Ассортимент">
      <img className='range__image' src={handImage} alt="Декоративное изображение торта в руке" />
      <h2 className='section-title'>ТЕХ-КАРТЫ</h2>
      <ul className='cards'>
        <li className='card'><Card link={snickersImage} alt="Десерт - cникерс"  title="Сникерс" text="Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью."/></li>
        <li className='card'><Card link={chezeecakesImage} alt="Десерт - чизкейки"  title="Чизкейки" text="Most platforms are costly to develop and don’t support fashion & lifestyle business logic."/></li>
        <li className='card'><Card link={mangoImage} alt="Десерт - манго-черника"  title="Манго-черника" text="Most platforms are costly to develop and don’t support fashion & lifestyle business logic."/></li>
      </ul>
    </section>

  )
}
