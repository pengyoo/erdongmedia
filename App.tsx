import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
// Fix: Import CoverGenerator component
import CoverGenerator from './components/CoverGenerator';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        {/* Fix: Render CoverGenerator component */}
        <CoverGenerator />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;