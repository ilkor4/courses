import Lead from "./Lead";
import Marquee from "./Marquee";
import Range from "./Range";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import "../styles/Main.css"

export default function Main() {
  return(
    <main className="content">
      <>
        <Lead />
        <Marquee />
        <Range />
        <Portfolio />
        <Contacts />
      </>
    </main>

  )
}
