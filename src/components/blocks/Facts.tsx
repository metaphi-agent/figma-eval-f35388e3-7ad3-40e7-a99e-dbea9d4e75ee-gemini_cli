import React from 'react';

const stats = [
  { value: "1M+", label: "Customers visit Albino every months" },
  { value: "93%", label: "Satisfaction rate from our customers." },
  { value: "4.9", label: "Average customer ratings out of 5.00!" },
];

export const Facts: React.FC = () => {
  return (
    <section className="py-12 border-y border-gray-100 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="px-4 py-4 md:py-0">
              <div className="font-rubik font-bold text-4xl text-[#161C2D] mb-2">
                {stat.value}
              </div>
              <p className="text-[#161C2D] opacity-70 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};