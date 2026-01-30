import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className="font-rubik font-bold text-4xl sm:text-5xl lg:text-[52px] leading-tight text-[#161C2D] mb-6">
              Get things done by awesome remote team
            </h1>
            <p className="text-lg text-[#161C2D] opacity-70 mb-10 leading-relaxed">
              We share common trends and strategies for improving your rental income and making sure you stay in high demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">Get started for free</Button>
              <Button variant="ghost" size="lg">Learn more</Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="./assets/images/hero-image.png"
              alt="Hero Dashboard"
              className="w-full h-auto rounded-lg shadow-2xl relative z-10"
            />
            {/* Decor elements could go here */}
          </div>
        </div>
      </div>
    </section>
  );
};