import React, { useState } from 'react';
import { Button } from '../ui/Button';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    type: 'One time purchase',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    name: 'Standard',
    price: '$49',
    type: 'One time purchase',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    name: 'Premium',
    price: '$99',
    type: 'One time purchase',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-brand-gray/30">
      <div className="container-custom text-center">
        <h2 className="font-display font-bold text-4xl md:text-[40px] mb-6 text-brand-dark">Pricing & Plans</h2>
        <p className="text-[19px] text-gray-500 mb-12 max-w-2xl mx-auto opacity-70 leading-relaxed">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
        
        <div className="flex justify-center items-center gap-4 mb-16">
           <span className={`font-bold cursor-pointer select-none ${!isYearly ? 'text-brand-dark' : 'text-gray-400'}`} onClick={() => setIsYearly(false)}>Monthly</span>
           <button 
             className="w-14 h-8 bg-brand-blue rounded-full relative transition-colors cursor-pointer"
             onClick={() => setIsYearly(!isYearly)}
           >
             <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-sm ${isYearly ? 'left-7' : 'left-1'}`} />
           </button>
           <span className={`font-bold cursor-pointer select-none ${isYearly ? 'text-brand-dark' : 'text-gray-400'}`} onClick={() => setIsYearly(true)}>Yearly</span>
           <span className="bg-white text-brand-blue text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm text-brand-green">Save 25%</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-10 hover:shadow-xl transition-all duration-300 bg-white flex flex-col items-center group">
               <div className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-4">{p.name}</div>
               <div className="font-display font-bold text-5xl text-brand-dark mb-2 tracking-tight">{p.price}</div>
               <div className="text-gray-400 mb-8">{p.type}</div>
               <p className="text-[17px] text-gray-500 mb-10 leading-relaxed opacity-70">
                 {p.desc}
               </p>
               <Button variant="primary" className="w-full bg-brand-blue hover:translate-y-[-2px] transition-transform shadow-blue-500/30">Get started for free</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
