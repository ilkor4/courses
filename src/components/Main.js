import Lead from "./Lead";
import Marquee from "./Marquee";
import Range from "./Range";
import "../styles/Main.css"

export default function Main() {
  return(
    <main className="content">
      <>
        <Lead />
        <Marquee />
        <Range />
        <Marquee />
      </>
    </main>

  )
}
