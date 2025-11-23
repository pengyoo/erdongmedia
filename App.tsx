import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;