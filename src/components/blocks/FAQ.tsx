import React from 'react';
import { ChevronRight } from 'lucide-react';

const faqs = [
  { q: "Can I use Albino for my clients?", a: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." },
  { q: "Does it work with WordPress?", a: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." },
  { q: "Do I get free updates?", a: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." },
  { q: "Will you provide support?", a: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre." },
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-[#EBF2FF] flex items-center justify-center text-[#473BF0] font-bold text-xs">
                  ?
                </div>
              </div>
              <div>
                <h4 className="font-rubik font-bold text-xl text-[#161C2D] mb-3">
                  {faq.q}
                </h4>
                <p className="text-[#161C2D] opacity-70 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center font-bold text-[#161C2D] hover:text-[#473BF0] transition-colors">
            Haven’t got your answer? Contact our support now
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};