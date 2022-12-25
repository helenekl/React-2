import React from 'react';
import './App.css';
import MainCarousel from './Components/MainCarousel/idex';
import Navigation from './Components/Navigation/index';
import Content from './Components/Content/index';
import Footer from './Components/Footer';

function App () {
  return (
    <div className="App">
      <Navigation />
      <MainCarousel />
      <Content />
      <Footer />
    </div>
  );
}

export default App;