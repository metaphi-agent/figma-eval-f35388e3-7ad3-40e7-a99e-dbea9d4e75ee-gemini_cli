import React from 'react';

const features = [
  {
    title: "Project management",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "./assets/icons/icon-project-management.svg",
  },
  {
    title: "Time tracking",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "./assets/icons/icon-time-tracking.svg",
  },
  {
    title: "Beautiful mobile app",
    description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    icon: "./assets/icons/icon-mobile-app.svg",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-6">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="font-rubik font-bold text-xl text-[#161C2D] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#161C2D] opacity-70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};