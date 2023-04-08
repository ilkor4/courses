import leadImage from '../images/lead.png';
import '../styles/Lead.css';

export default function Lead() {
  return(
      <section className="lead" aria-label="Секция вступления">
        <div className="section-title-container">
          <h1 className="section-title">CAKES-COURSES</h1>
          <p className="section-subtitle">by Julia</p>
        </div>
        <img className="lead__image" src={leadImage} alt="Юлия - главное лицо бренда." />
        <p className='lead__text'>КОНДИТЕРСКОЕ ИСКУССТВО: ОТ&nbsp;КАПКЕЙКОВ ДО&nbsp;МНОГОЯРУСНЫХ СВАДЕБНЫХ ТОРТОВ</p>
      </section>
  )
}
