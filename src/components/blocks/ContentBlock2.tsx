import React from 'react';
import { Check } from 'lucide-react';

export const ContentBlock2: React.FC = () => {
  const items = [
    { title: "Create a project", desc: "With lots of unique blocks, you can easily build a page without coding." },
    { title: "Assign related people", desc: "With lots of unique blocks, you can easily build a page without coding." },
    { title: "Make it done on-time", desc: "With lots of unique blocks, you can easily build a page without coding." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Left */}
          <div className="relative order-2 lg:order-1">
            <img
              src="./assets/images/content-02.png"
              alt="Project Management"
              className="w-full h-auto"
            />
          </div>

          {/* Content Right */}
          <div className="order-1 lg:order-2">
            <h2 className="font-rubik font-bold text-3xl sm:text-4xl text-[#161C2D] mb-6 leading-tight">
              Manage your projects fast
            </h2>
            <p className="text-lg text-[#161C2D] opacity-70 mb-10 leading-relaxed">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
            
            <div className="space-y-8">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#EBF2FF] flex items-center justify-center text-[#473BF0]">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-rubik font-bold text-xl text-[#161C2D] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#161C2D] opacity-70 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};