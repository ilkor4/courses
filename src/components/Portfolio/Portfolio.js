import { portfolioArray } from '../../utils/constants';

import '../Portfolio/Portfolio.css';

export default function Portfolio() {
  return(
    <section className='portfolio' id='reviews'>
      <h2 className='section-title'>Отзывы</h2>
      <svg xmlns="http://www.w3.org/2000/svg" className='gif' viewBox="0 0 320 300">
        <rect className="gif__card" x="480" width="200" height="200" rx="5" fill="rgba(255,255,255,0.3)"></rect>
        <rect className="gif__card" y="0" width="200" height="200" rx="5" fill="rgba(255,255,255,0.3)"></rect>
        <rect className="gif__card" x="240" width="200" height="200" rx="5" fill="rgba(255,255,255,0.3)"></rect>
      <path className="gif__hand" d="M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z" fill="rgba(255,255,255,1)"></path>
      </svg>
      <div className='portfolio__container'>
        <ul className='portfolio__cards'>
          {portfolioArray.map((item, index) => {
            return(
              <li id={index} className='portfolio__image-container'>
                <img src={item.link} className='portfolio__image' alt={item.alt}/>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}
