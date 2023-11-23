// Секция бэкграунд-видео - вступительный блок с фоновым видео

import { HashLink as Link } from 'react-router-hash-link';

import posterImage from '../../images/posterImage.jpg'
import backgroundVideo from '../../images/background-video.mp4';

import  '../Video/Video.css';

export default function Video() {
  return(
    <div className='video-container' id='main'>
      <video className='video-container__background-video' autoPlay loop muted playsInline webkit-playinginline="true" poster={posterImage}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="video-container__text">
        <Link to='#carousel'><button className='video-container__button'>Подобрать урок</button></Link>
      </div>
    </div>
  )
}
