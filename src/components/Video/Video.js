import  '../Video/Video.css';
import posterImage from '../../images/posterImage.jpg'
import backgroundVideo from '../../images/background-video.mp4';

export default function Video() {
  return(
    <div className='video-container'>
      <video className='video-container__background-video' autoPlay loop muted playsInline webkit-playinginline="true" poster={posterImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="video-container__text">
        <h1 className="video-container__title">CAKES-COURSES</h1>
        <p className="video-container__subtitle">by Julia</p>
        <button className='video-container__button'>Подобрать техкарту</button>
      </div>
    </div>
  )
}
