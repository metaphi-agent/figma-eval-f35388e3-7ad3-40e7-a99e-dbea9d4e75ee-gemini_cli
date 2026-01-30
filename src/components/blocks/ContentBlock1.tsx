import React from 'react';
import { Button } from '../ui/Button';

export const ContentBlock1: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Left */}
          <div>
            <h2 className="font-rubik font-bold text-3xl sm:text-4xl text-[#161C2D] mb-6 leading-tight">
              Getting started with Albino is easier than ever
            </h2>
            <p className="text-lg text-[#161C2D] opacity-70 mb-8 leading-relaxed">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
            </p>
            <Button size="lg">Get it now</Button>
          </div>

          {/* Image Right */}
          <div className="relative">
            <img
              src="./assets/images/content-01.png"
              alt="Getting Started"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};