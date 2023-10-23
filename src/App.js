import './App.css';
import Cards from './Components/Cards/Cards';
import Cards2 from './Components/Cards2/Cardds2';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import HeadOfKite from './Components/HeadOfKite/HeadOfKite';
import HeroSection from './Components/HeroSection/HeroSection';
import PosterMain from './Components/PosterCard/Poster';
import ProjectExpo from './Components/ProjectExpo/ProjectExpo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
  <HomePage />
    <Router>
    <Routes>
      <Route path="/home" element={<HeroSection />} />
      <Route path="/poster" element={<PosterMain />} />
      <Route path="/head" element={<HeadOfKite />} />
      <Route path="/event" element={<Cards />} />
      <Route path="/event2" element={<Cards2 />} />
      <Route path="/event3" element={<ProjectExpo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/footer" element={<Footer /> } />

    </Routes>
  </Router>
   </div>
  );
}

export default App;
