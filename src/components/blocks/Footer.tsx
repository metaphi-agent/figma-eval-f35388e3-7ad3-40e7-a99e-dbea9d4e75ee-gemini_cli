import React from 'react';

const links = [
  { title: 'Company', items: ['About us', 'Contact us', 'Careers', 'Press'] },
  { title: 'Product', items: ['Features', 'Pricing', 'News', 'Help desk', 'Support'] },
  { title: 'Services', items: ['Digital Marketing', 'Content Writing', 'SEO for Business', 'UI Design'] },
  { title: 'Legal', items: ['Privacy Policy', 'Terms & Conditions', 'Return Policy'] },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {links.map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-gray-400 text-[15px] mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="text-brand-dark hover:text-brand-blue transition-colors font-medium text-[17px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
             <div className="font-display font-bold text-3xl tracking-tighter text-brand-dark">
               Brainwave.io
             </div>
             <p className="text-gray-500 text-[15px] max-w-xs opacity-70">
               With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
             </p>
          </div>
          <div className="flex items-center gap-6">
             <a href="#"><img src="./assets/icons/logo-twitter.svg" alt="Twitter" className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" /></a>
             <a href="#"><img src="./assets/icons/logo-facebook.svg" alt="Facebook" className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" /></a>
             <a href="#"><img src="./assets/icons/logo-instagram.svg" alt="Instagram" className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" /></a>
             <a href="#"><img src="./assets/icons/logo-linkedin.svg" alt="LinkedIn" className="w-5 h-5 opacity-40 hover:opacity-100 transition-opacity" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
