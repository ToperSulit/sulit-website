import React from 'react';
import HeroBanner from './components/HeroBanner';
import Body from './components/Body';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';  

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <Body />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
