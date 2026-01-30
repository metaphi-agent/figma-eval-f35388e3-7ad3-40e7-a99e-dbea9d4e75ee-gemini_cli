import React from 'react';

const facts = [
  { stat: '1M+', desc: 'Customers visit Albino every months' },
  { stat: '93%', desc: 'Satisfaction rate from our customers.' },
  { stat: '4.9', desc: 'Average customer ratings out of 5.00!' },
];

export const Facts: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left justify-items-center md:justify-items-start">
          {facts.map((f, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
               <h3 className="font-display font-bold text-5xl text-brand-dark tracking-tight">{f.stat}</h3>
               <p className="text-gray-500 leading-relaxed max-w-[200px] text-[17px] opacity-70 text-center md:text-left">
                 {f.desc}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
