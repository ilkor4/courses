// Компонент карточки

import '../Card/Card.css';

export default function Card(props) {
  return(
    <article className='card'>
      <div className='card__image-wrap'>
        <img className="card__image" src={props.card.link} alt={props.card.alt}/>
        <div className='card__badges'>
          {props.card.new && <span className="card__info">Новинка</span>}
          <span className='card__discount'>−50%</span>
        </div>
      </div>
      <div className="card__content">
        <div className='card__heading-row'>
          <h3 className="card__title">{props.card.title}</h3>
          <div className='card__price' aria-label={`Цена ${props.card.newCost}, прежняя цена ${props.card.cost}`}>
            <span className="card__old-price">{props.card.cost}</span>
            <span className="card__new-price">{props.card.newCost}</span>
          </div>
        </div>
        <p className="card__text">{props.card.text}</p>
        <button type='button' className="card__button">
          Подробнее о тех-карте
          <span className='card__button-arrow' aria-hidden='true'>↗</span>
        </button>
      </div>
    </article>
  )
}
