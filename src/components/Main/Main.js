// Главный компонент - основной контент

import Marquee from "../Marquee/Marquee";
import Carousel from "../Carousel/Carousel";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Questions from "../Questions/Questions";
import Contacts from "../Contacts/Contacts";


import "../Main/Main.css"

export default function Main(props) {
  return(
    <main className="content">
      <>
        <Marquee />
        <Carousel onOpen={props.onOpen}/>
        <Marquee />
        <About />
        <Marquee />
        <Portfolio />
        <Marquee />
        <Questions />
        <Contacts />
      </>
    </main>
  )
}
