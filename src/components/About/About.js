// Секция описание тех-карты

import techcardImage from '../../images/techard-preview.jpg'
import '../About/About.css';

export default function About() {
  return(
    <section className='about' id='about'>
      <h2 className='section-title section-title_light'>Описание</h2>
      <div className='about__container'>
        <h3 className='about__container-title'>
            Из чего состоит тех-карта?
        </h3>
        <div className='about__description'>
          <div className='about__image-container'>
            <img className='about__image' src={techcardImage} alt='Превью тех-карты'/>
          </div>
          <ul className='about__text-container'>
            <li className='about__item'>
              <h4 className='about__title'>
                Инструкция
              </h4>
              <p className='about__text'>Подробная пошаговая инструкция приготовления каждого элемента десерта</p>
            </li>
            <li className='about__item'>
              <h4 className='about__title'>
                Рецепт
              </h4>
              <p className='about__text'>Список ингридиентов в граммах и миллилитрах для каждого слоя</p>
            </li>
          </ul>
          <div className='about__item'>
              <h4 className='about__title'>
                Идеи
              </h4>
              <p className='about__text'>Идеи для вашего вдохговения и вкусовые сочетания</p>
            </div>
          <div className='about__item'>
            <h4 className='about__title'>
              Советы
            </h4>
            <p className='about__text'>Небольшие, но очень важные советы из моего рабочего опыта</p>
          </div>
        </div>
      </div>
      <div className='decor decor_dark'>
        <div className='decor__item decor__item_light'></div>
      </div>
    </section>
  )
}
