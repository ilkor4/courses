// Компонент карточки

import decorImage from '../../images/buttons/decor.svg';
import '../Card/Card.css';

export default function Card(props) {
  return(
    <>
      <img className="card__image" src={props.card.link} alt={props.card.alt}/>
      {props.card.new && <div className="card__info">Новинка</div>}
      <div className="card__main-price">{props.card.cost}</div>
      <div className="card__description">
        <h3 className="card__title">{props.card.title}</h3>
        <p className="card__text">{props.card.text}</p>
        <button className="card__button">
          <img src={decorImage} alt='Декоративное изображение' className="card__button-image rotate" />Подробнее
        </button>
      </div>
    </>
  )
}
