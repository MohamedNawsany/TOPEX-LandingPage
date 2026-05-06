'use client';

import Navbar from '../components/organisms/Navbar';
import Hero from '../components/organisms/Hero';
import About from '../components/organisms/About';
import Services from '../components/organisms/Services';
import Product from '../components/organisms/Product';
import Modules from '../components/organisms/Modules';
import Features from '../components/organisms/Features';
import VisionMission from '../components/organisms/VisionMission';
import Testimonials from '../components/organisms/Testimonials';
import Clients from '../components/organisms/Clients';
import Contact from '../components/organisms/Contact';
import CTA from '../components/organisms/CTA';
import Footer from '../components/organisms/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main >
        <Hero />
        <About />
        <Services />
        <Product />
        <Modules />
        <Features />
        <VisionMission />
        <Testimonials />
        <Clients />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}