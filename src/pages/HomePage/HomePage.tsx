import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import Motivation from "../../components/Motivation/Motivation";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import Banner from "../../components/banner/Banner";
import React, {useState} from "react";
import {data, preparedData} from "../../components/carousel/data";

export default function HomePage() {
    const [products] = useState<any[]>(preparedData(data))
    return <div>
        <CompanyInfo/>
        <Motivation/>
        <CarouselComponent special='Wood materials' title='Decking products, wood, lumber' products={products}/>
        <CarouselComponent special='Deck accessories' title='Fasteners, railings, other accessories' products={products}/>
        <CarouselComponent special='Lighting accessories' title='LEDs, hubs, controllers & more' products={products}/>
        <Banner/>
    </div>
}