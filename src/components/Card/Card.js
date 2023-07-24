import '../Card/Card.css';

export default function Card(props) {
  return(
    <>
      <div className="card__description">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__text">{props.text}</p>
      </div>
      <img className="card__image" src={props.link} alt={props.alt}/>
    </>
  )
}
