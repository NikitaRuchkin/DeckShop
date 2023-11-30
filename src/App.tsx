import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from "./components/footer/Footer";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Motivation from "./components/Motivation/Motivation";
import Banner from "./components/banner/Banner";
import CarouselComponent from "./components/carousel/CarouselComponent";
import {data, preparedData} from './components/carousel/data'


function App() {
    const [products] = useState<any[]>(preparedData(data))
  return (
    <div className="App">
      <div className='Header'>
          <Header />
      </div>
      <CompanyInfo/>
      <Motivation/>
      <CarouselComponent special='Wood materials' title='Decking products, wood, lumber' products={products}/>
      <CarouselComponent special='Deck accessories' title='Fasteners, railings, other accessories' products={products}/>
      <CarouselComponent special='Lighting accessories' title='LEDs, hubs, controllers & more' products={products}/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
