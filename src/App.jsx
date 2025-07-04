import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Products from './components/Products';
// import ProductFeatures from './components/ProductFeatures';
// import HowToApply from './components/HowToApply';
// import AdditionalInformation from './components/AdditionalInformation';
// import ShadeCards from './components/ShadeCards'
// import TileAndStoneImage from './components/TileAndStoneImage'
// import TilesStones from './components/TilesStones';
// import Showcase from './components/Showcase';
// import Gallery from './components/Gallery';
// import Certifications from './components/Certifications';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className='p-8'>
        <About />
        <Vision />
        <Mission />
        <Products />
        <Contact/>
              </div>
      </main>
      <Footer />

    </div>
  );
}

export default App;