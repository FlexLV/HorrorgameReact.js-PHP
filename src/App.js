import './App.js';
import Navbar from './Components/Navbar.jsx'; // Import Header once
import "./App.css"
import HeroSection from './Components/HeroSection.js';
import Cards from './Components/Cards.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
