import React from 'react';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-rubik font-bold text-3xl sm:text-4xl text-[#161C2D] mb-4">
              Build better landing page fast
            </h2>
            <p className="text-lg text-[#161C2D] opacity-70">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-[#473BF0] text-white">Get it now</Button>
            <Button size="lg" variant="secondary">Get it now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};