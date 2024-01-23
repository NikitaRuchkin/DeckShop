import Header from "../../components/header/Header";
import Error from "../../pages/Error/Error";
import Footer from "../../components/footer/Footer";
import React, {ReactElement} from "react";

interface IProp {
  children: ReactElement;
}

export default function HeaderFooterWrapper({children}:IProp){
  return         <div className="App">
    <div className='Header'>
      <Header />
    </div>
    <div className='main'>
      {children}
    </div>
    <Footer/>
  </div>
}