import React from 'react'
import './index.css'
import Hero from '../src/components/Hero';
import Sidebar from '../src/components/Sidebar';
import Footer from '../src/components/Footer';
import ProductCarousel from './components/ProductCarousel';

function HomePage() {
  return (
    <div className="">
      <Sidebar />
      <Hero />
      <ProductCarousel />
      <Footer />
    </div>
  );
}


export default HomePage;