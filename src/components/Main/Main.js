import Marquee from "../Marquee/Marquee";
import Carousel from "../Carousel/Carousel";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
// import Range from "../Range/Range";
import Questions from "../Questions/Questions";
import Contacts from "../Contacts/Contacts";


import "../Main/Main.css"

export default function Main(props) {
  return(
    <main className="content">
      <>
        <Marquee />
        <Carousel onOpen={props.onOpen}/>
        <About />
        <Portfolio />
        <Questions />
        <Contacts />
      </>
    </main>
  )
}
