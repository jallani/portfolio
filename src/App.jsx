import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home' 
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import './App.css'



function App() {
  return (   
             <BrowserRouter>
                <Navbar />
                  <Routes>
                      <Route index element={<Home />} />
                      <Route path='about' element={<About />} />
                      <Route path='portfolio' element={<Portfolio />} />
                      <Route path='contact' element={<Contact />} />
                  </Routes>
             </BrowserRouter>
    

 );
}

export default App
