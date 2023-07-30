import Lead from "../Lead/Lead";
import Carousel from "../Carousel/Carousel";
import Marquee from "../Marquee/Marquee";
// import Range from "../Range/Range";
import Portfolio from "../Portfolio/Portfolio";
import Contacts from "../Contacts/Contacts";


import "../Main/Main.css"

export default function Main() {
  return(
    <main className="content">
      <>
        <Marquee />
        <Carousel />
        <Portfolio />
        <Contacts />
      </>
    </main>

  )
}
