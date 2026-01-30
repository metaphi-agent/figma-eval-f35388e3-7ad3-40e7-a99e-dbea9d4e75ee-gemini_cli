import React from 'react';

const steps = [
  { num: 1, title: 'Create a project', desc: 'With lots of unique blocks, you can easily build a page without coding.' },
  { num: 2, title: 'Assign related people', desc: 'With lots of unique blocks, you can easily build a page without coding.' },
  { num: 3, title: 'Make it done on-time', desc: 'With lots of unique blocks, you can easily build a page without coding.' },
];

export const ContentBlock2: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1 relative w-full">
           <img src="./assets/images/content-02.png" alt="Content 02" className="w-full h-auto" loading="lazy" />
        </div>
        <div className="flex-1 order-1 md:order-2 text-left">
          <div className="flex flex-col gap-10">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#473BF0] bg-opacity-10 text-[#473BF0] flex items-center justify-center font-bold text-lg">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl mb-3 text-brand-dark">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed opacity-70 text-[17px]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
