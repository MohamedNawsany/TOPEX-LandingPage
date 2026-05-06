import React from 'react';
import Navbar from '../organisms/Navbar';
import Hero from '../organisms/Hero';
import About from '../organisms/About';
import VisionMission from '../organisms/VisionMission';
import Services from '../organisms/Services';
import Product from '../organisms/Product';
import Modules from '../organisms/Modules';
import Features from '../organisms/Features';
import Clients from '../organisms/Clients';
import Testimonials from '../organisms/Testimonials';
import CTA from '../organisms/CTA';
import Contact from '../organisms/Contact';
import Footer from '../organisms/Footer';

export default function LandingTemplate() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Product />
        <Modules />
        <Features />
        <Clients />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}