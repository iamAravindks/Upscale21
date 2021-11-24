import { useRef} from 'react'
import Header from "./components/Header";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Contact from "./components/contact/Contact";

function App()
{
  //pass the refs to the corresponding components
  const headerRef = useRef("home")
  const infoRef = useRef("about")
  const scheduleRef = useRef("schedule")
  const speakerRef = useRef("speaker")
  const contactRef = useRef("contactRef")
  
  const scrollToRef = (ref) =>
  {
      window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
    };
  return (
    <>
      <NavBar
        scrollToRef={scrollToRef}
        headerRef={headerRef}
        infoRef={infoRef}
        scheduleRef={scheduleRef}
        speakerRef={speakerRef}
        contactRef={contactRef}
      />
      <Header headerRef={headerRef} />
      <Info infoRef={infoRef} />
      <Schedule scheduleRef={scheduleRef} />
      <Speakers speakerRef={speakerRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}

export default App;
