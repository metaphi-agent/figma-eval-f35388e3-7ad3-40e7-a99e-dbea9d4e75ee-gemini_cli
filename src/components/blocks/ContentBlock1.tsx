import React from 'react';
import { Button } from '../ui/Button';

export const ContentBlock1: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="container-custom flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-left">
          <h2 className="font-display font-bold text-4xl md:text-[40px] mb-6 text-brand-dark leading-tight">
            Getting started with Albino is easier than ever
          </h2>
          <p className="text-[19px] text-gray-500 mb-10 leading-relaxed opacity-70">
            With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
          </p>
          <Button variant="primary" size="lg" className="bg-[#473BF0] hover:bg-blue-700 shadow-blue-500/30">Get started for free</Button>
        </div>
        <div className="flex-1 relative w-full">
           <img src="./assets/images/content-01.png" alt="Content 01" className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
