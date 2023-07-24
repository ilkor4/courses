import { portfolioArray } from '../../utils/constants';

import '../Portfolio/Portfolio.css';

export default function Portfolio() {
  return(
    <section className='portfolio' aria-label='Секция портфолио'>
      <h2 className='section-title'>ПОРТФОЛИО</h2>
      <ul className='portfolio__container'>
        {portfolioArray.map((item, index) => {
          return(
           <li id={index}><img src={item.link} className='portfolio__image' alt={item.alt}/></li>
          );
        })}
      </ul>
    </section>
  )
}
