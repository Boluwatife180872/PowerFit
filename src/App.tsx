import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initializeLegacyInteractions } from './legacyInteractions';

function App() {
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }
    initializedRef.current = true;
    const cleanup = initializeLegacyInteractions();

    return () => {
      cleanup();
      initializedRef.current = false;
    };
  }, []);

  return (
    <div>
      <div className="loading-screen" id="loadingScreen">
        <div className="loader">
          <div className="dumbbell">
            <i className="fas fa-dumbbell"></i>
          </div>
          <div className="loading-text">POWERFIT</div>
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Pricing />
        <Contact />
      </main>
      <Footer />

      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        <i className="fas fa-arrow-up"></i>
      </button>

      <div className="modal" id="videoModal" aria-hidden="true">
        <div className="modal-content">
          <span className="modal-close" aria-label="Close video">
            &times;
          </span>
          <div className="video-container">
            <iframe src="" title="PowerFit video" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
