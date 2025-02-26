import Navbar from './pages/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Tours from "./pages/Tours"

function App() {
  return (
    <>
    <Navbar />
    <div className='display'>
    <Routes>
      <Route path='/' element= { <Home />} />
      <Route path='/about' element= { <About />} />
      <Route path='/contact' element= { <Contact />} />
      <Route path='/tours' element= { <Tours />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
