import React from 'react';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl text-left">
          <h2 className="font-display font-bold text-4xl md:text-[40px] mb-4 text-brand-dark tracking-tight">Build your next landing page</h2>
          <p className="text-[19px] text-gray-500 opacity-70">
            With lots of unique blocks, you can easily build a page without coding.
          </p>
        </div>
        <div className="flex gap-4 flex-shrink-0">
           <Button variant="primary" size="lg" className="bg-brand-green hover:bg-green-600 shadow-green-500/30 text-white min-w-[180px]">Get started free</Button>
           <Button variant="secondary" size="lg" className="bg-gray-100 text-brand-dark hover:bg-gray-200 shadow-none min-w-[160px]">Learn more</Button>
        </div>
      </div>
    </section>
  );
};
