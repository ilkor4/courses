import { portfolioArray } from '../../utils/constants';

import '../Portfolio/Portfolio.css';

export default function Portfolio() {
  return(
    <section className='portfolio' aria-label='Секция портфолио'>
      <div className='contacts__decor section-decor_light'></div>
      <h2 className='section-title'>Портфолио</h2>
      <ul className='portfolio__container'>
        {portfolioArray.map((item, index) => {
          return(
           <li id={index} className='portfolio__image-container'><img src={item.link} className='portfolio__image' alt={item.alt}/></li>
          );
        })}
      </ul>
    </section>
  )
}
