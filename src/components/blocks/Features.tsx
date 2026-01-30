import React from 'react';

const features = [
  {
    icon: './assets/icons/icon-project-management.svg',
    title: 'Project management',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    icon: './assets/icons/icon-time-tracking.svg',
    title: 'Time tracking',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  },
  {
    icon: './assets/icons/icon-mobile-app.svg', 
    title: 'Beautiful mobile app',
    desc: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-12">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <div className="mb-6 w-12 h-12 flex items-center justify-center">
                 <img src={f.icon} alt={f.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-brand-dark">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed opacity-70 text-[17px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
