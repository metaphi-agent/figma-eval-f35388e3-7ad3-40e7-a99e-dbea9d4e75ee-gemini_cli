import React from 'react';

const socialIcons = [
  { name: "Twitter", icon: "./assets/icons/logo-twitter.svg" },
  { name: "Facebook", icon: "./assets/icons/logo-facebook.svg" },
  { name: "Instagram", icon: "./assets/icons/logo-instagram.svg" },
  { name: "LinkedIn", icon: "./assets/icons/logo-linkedin.svg" },
];

const columns = [
  {
    title: "Company",
    links: ["About us", "Contact us", "Careers", "Press"]
  },
  {
    title: "Product",
    links: ["Features", "Pricing", "News", "Help desk", "Support"]
  },
  {
    title: "Services",
    links: ["Digital Marketing", "Content Writing", "SEO for Business", "UI Design"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions", "Return Policy"]
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 bg-[#F4F7FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="font-rubik font-bold text-2xl text-[#161C2D] block mb-6">
              Brainwave.io
            </a>
            <p className="text-[#161C2D] opacity-70 text-sm mb-8">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a key={social.name} href="#" className="hover:opacity-75 transition-opacity">
                  <img src={social.icon} alt={social.name} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {columns.map((col, index) => (
            <div key={index}>
              <h4 className="font-bold text-[#161C2D] mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[#161C2D] opacity-70 hover:opacity-100 hover:text-[#473BF0] transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright or bottom line if needed, design didn't show much but usually implies it */}
      </div>
    </footer>
  );
};