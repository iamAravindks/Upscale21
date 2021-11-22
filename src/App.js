import {useEffect, useRef} from 'react'
import Header from "./components/Header";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Speakers from './components/Speakers';

function App()
{
  //pass the refs to the corresponding components
  const headerRef = useRef(null)
  const infoRef = useRef(null)
  const scheduleRef = useRef(null)
  const speakerRef = useRef(null)

  
    const scrollToRef = (ref) => {
      window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
    };
  return (
    <>
      <NavBar
        scrollToRef={scrollToRef}
        headerRef={headerRef}
        infoRef={infoRef}
      />
      <Header headerRef={headerRef} />
      <Info infoRef={infoRef} />
      <Speakers/>
      <Footer />
    </>
  );
}

export default App;
