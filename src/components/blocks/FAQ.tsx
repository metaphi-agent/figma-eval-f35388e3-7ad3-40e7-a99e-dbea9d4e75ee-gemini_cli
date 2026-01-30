import React from 'react';

const faqs = [
  { q: 'Can I use this template for commercial purposes?', a: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.' },
  { q: 'Do I need to pay for updates?', a: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.' },
  { q: 'Is there a money back guarantee?', a: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.' },
  { q: 'How long is the license valid?', a: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.' },
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {faqs.map((f, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center text-sm font-bold mt-1">
                ?
              </div>
              <div>
                <h3 className="font-display font-bold text-[21px] mb-3 text-brand-dark">{f.q}</h3>
                <p className="text-[17px] text-gray-500 leading-relaxed opacity-70">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center border-t border-gray-100 pt-10">
          <p className="text-[17px] text-gray-500">Haven’t got your answer? <a href="#" className="text-brand-green font-bold hover:underline ml-1">Contact our support now</a></p>
        </div>
      </div>
    </section>
  );
};
