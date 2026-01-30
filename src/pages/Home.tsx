import React from 'react';
import { Header } from '../components/blocks/Header';
import { Hero } from '../components/blocks/Hero';
import { Features } from '../components/blocks/Features';
import { ContentBlock1 } from '../components/blocks/ContentBlock1';
import { Facts } from '../components/blocks/Facts';
import { ContentBlock2 } from '../components/blocks/ContentBlock2';
import { Testimonial } from '../components/blocks/Testimonial';
import { Pricing } from '../components/blocks/Pricing';
import { FAQ } from '../components/blocks/FAQ';
import { CTA } from '../components/blocks/CTA';
import { Footer } from '../components/blocks/Footer';

const Home: React.FC = () => {
  return (
    <div className="font-gilroy antialiased bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ContentBlock1 />
        <Facts />
        <ContentBlock2 />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;