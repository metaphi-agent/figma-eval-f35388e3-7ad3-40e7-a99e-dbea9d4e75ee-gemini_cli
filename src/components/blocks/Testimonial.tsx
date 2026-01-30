import React from 'react';

const testimonials = [
  {
    quote: "“You made it so simple”",
    text: "My new site is so much faster and easier to work with than my old site.",
    name: "Corey Valdez",
    role: "Founder at Zenix",
    avatar: "./assets/images/avatar-corey.png"
  },
  {
    quote: "“Simply the best”",
    text: "Better than all the rest. I’d recommend this product to beginners.",
    name: "Ian Klein",
    role: "Digital Marketer",
    avatar: "./assets/images/avatar-ian.png"
  }
];

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
               <h3 className="font-display font-bold text-2xl mb-4 text-brand-dark">{t.quote}</h3>
               <p className="text-gray-500 mb-8 max-w-md text-[19px] leading-relaxed opacity-70">
                 {t.text}
               </p>
               <div className="flex flex-col items-center gap-1">
                 <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-3" />
                 <div className="font-bold text-brand-dark text-lg">{t.name}</div>
                 <div className="text-gray-500 text-[15px] opacity-70">{t.role}</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
