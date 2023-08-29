import '../Preloader/Preloader.css';

export default function Preloader(props) {
  return(
    <div className={props.isOpen
      ? 'preloader preloader_open'
      : 'preloader'
    }>
      <div className="preloader__logo"></div>
    </div>
  )
}
