import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-20 bg-white text-center">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="font-display font-bold text-5xl md:text-[52px] tracking-tight mb-6 leading-tight text-brand-dark">
            Get things done by awesome remote team
          </h1>
          <p className="text-[19px] text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto opacity-70">
            We share common trends and strategies for improving your rental income and making sure you stay in high demand.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="primary" size="lg">Get started for free</Button>
            <Button variant="outline" size="lg">Learn more</Button>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
           <img 
             src="./assets/images/hero-image.png" 
             alt="App Dashboard" 
             className="w-full h-auto rounded-xl shadow-2xl border border-gray-100"
             loading="eager"
           />
        </div>
      </div>
    </section>
  );
};
