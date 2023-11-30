import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Motivation from "./components/Motivation/Motivation";
import Banner from "./components/banner/Banner";
import CarouselComponent from "./components/carousel/CarouselComponent";

function App() {
  return (
    <div className="App">
      <div className='Header'>
          <Header />
      </div>
      <CompanyInfo/>
      <Motivation/>
        <CarouselComponent special='Wood materials' title='Decking products, wood, lumber'/>
        <CarouselComponent special='Deck accessories' title='Fasteners, railings, other accessories'/>
        <CarouselComponent special='Lighting accessories' title='LEDs, hubs, controllers & more'/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
