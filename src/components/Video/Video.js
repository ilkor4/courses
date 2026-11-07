// Секция бэкграунд-видео - вступительный блок с фоновым видео

import posterImage from '../../images/posterImage.jpg'
import backgroundVideo from '../../images/background-video.mp4';

import  '../Video/Video.css';

export default function Video() {
  const handleCatalogClick = () => {
    document.getElementById('carousel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return(
    <section className='video-container' id='main' aria-labelledby='hero-title'>
      <video className='video-container__background-video' autoPlay loop muted playsInline webkit-playinginline="true" poster={posterImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="video-container__text">
        <p className="video-container__eyebrow"><span aria-hidden="true" /> BLACK FRIDAY · CAKES BY JULIA</p>
        <h1 className="video-container__title" id="hero-title">
          <span>Чёрная</span>
          <span>пятница</span>
        </h1>
        <p className="video-container__subtitle">Тех-карты, которые хочется испечь</p>
      </div>
      <div className="video-container__stamp" aria-label="Скидка 50 процентов на всё">
        <span className="video-container__stamp-value">−50%</span>
        <span className="video-container__stamp-caption">на всё</span>
      </div>
      <div className="video-container__action">
        <button type="button" onClick={handleCatalogClick} className="video-container__button">
          Выбрать тех-карту
          <span className="video-container__button-arrow" aria-hidden="true">↗</span>
        </button>
      </div>
      <span className="video-container__side-note" aria-hidden="true">Авторская кондитерская · Волгоград</span>
    </section>
  )
}
