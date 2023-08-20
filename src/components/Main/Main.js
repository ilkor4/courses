import Carousel from "../Carousel/Carousel";
import Marquee from "../Marquee/Marquee";
// import Range from "../Range/Range";
import Questions from "../Questions/Questions";
import Portfolio from "../Portfolio/Portfolio";
import Contacts from "../Contacts/Contacts";


import "../Main/Main.css"

export default function Main(props) {
  return(
    <main className="content">
      <>
        <Marquee />
        <Carousel onOpen={props.onOpen}/>
        <Questions />
        <Portfolio />
        <Contacts />
      </>
    </main>
  )
}
