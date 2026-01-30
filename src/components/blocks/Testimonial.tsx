import React from 'react';

const testimonials = [
  {
    quote: "“You made it so simple”",
    text: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    author: "Corey Valdez",
    role: "Founder at Zenix",
    avatar: "./assets/images/avatar-corey.png"
  },
  {
    quote: "“Simply the best”",
    text: "Better than all the rest. I’d recommend this product to beginners and advanced users.",
    author: "Ian Klein",
    role: "Digital Marketer",
    avatar: "./assets/images/avatar-ian.png"
  }
];

export const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-lg text-center shadow-sm">
              <div className="flex justify-center mb-6">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="font-rubik font-bold text-2xl text-[#161C2D] mb-4">
                {item.quote}
              </p>
              <p className="text-[#161C2D] opacity-70 mb-8 leading-relaxed">
                {item.text}
              </p>
              <div>
                <div className="font-bold text-[#161C2D]">{item.author}</div>
                <div className="text-[#161C2D] opacity-70 text-sm">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};