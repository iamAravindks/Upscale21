import Header from "./components/Header";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Schedule/>
      <Speakers/>
      <Info/>
      </>
  );
}

export default App;
