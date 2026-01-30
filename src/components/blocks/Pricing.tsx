import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "29",
    features: ["One time purchase", "With lots of unique blocks", "100% money back guarantee"]
  },
  {
    name: "Standard",
    price: "49",
    features: ["One time purchase", "With lots of unique blocks", "100% money back guarantee"]
  },
  {
    name: "Premium",
    price: "99",
    features: ["One time purchase", "With lots of unique blocks", "100% money back guarantee"]
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-[#161C2D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-rubik font-bold text-3xl sm:text-4xl text-white mb-4">
            Pricing & Plans
          </h2>
          <p className="text-white/70 mb-8">
            With lots of unique blocks, you can easily build a page without coding.
          </p>
          
          {/* Toggle */}
          <div className="flex justify-center items-center gap-4">
            <span className={`text-sm font-bold ${!isYearly ? 'text-white' : 'text-white/50'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-white/10 rounded-full relative transition-colors focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${isYearly ? 'left-7' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-bold ${isYearly ? 'text-white' : 'text-white/50'}`}>Yearly</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-8 hover:transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-[#473BF0] font-bold text-sm uppercase tracking-wider mb-4">
                {plan.name}
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-[#161C2D]">${plan.price}</span>
                <span className="text-[#161C2D]/70 ml-2">/ month</span>
              </div>
              <p className="text-[#161C2D]/70 text-sm mb-8">
                One time purchase
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-[#161C2D]/70 text-sm">
                    {/* Placeholder check/bullet */}
                    {feature}
                  </li>
                ))}
              </ul>
              <Button fullWidth variant={index === 1 ? 'primary' : 'secondary'}>
                Get started for free
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};