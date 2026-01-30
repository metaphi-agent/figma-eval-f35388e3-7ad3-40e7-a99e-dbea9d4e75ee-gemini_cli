import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-6 relative z-50 bg-white">
      <div className="container-custom flex items-center justify-between">
        <div className="font-display font-bold text-2xl tracking-tighter text-brand-dark">
          Brainwave.io
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-[15px] text-brand-dark">
          <a href="#" className="hover:text-brand-blue transition-colors">Demos</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Pages</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Support</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Contact</a>
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" size="sm" className="bg-brand-blue">Get started free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden border-t">
            <a href="#" className="font-bold p-2 hover:bg-gray-50 rounded">Demos</a>
            <a href="#" className="font-bold p-2 hover:bg-gray-50 rounded">Pages</a>
            <a href="#" className="font-bold p-2 hover:bg-gray-50 rounded">Support</a>
            <a href="#" className="font-bold p-2 hover:bg-gray-50 rounded">Contact</a>
            <Button variant="primary" size="sm" className="w-full">Get started free</Button>
        </div>
      )}
    </header>
  );
};
