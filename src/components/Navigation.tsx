import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigateToPayment: () => void;
}

export default function Navigation({ onNavigateToPayment }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/final_logo.png" alt="Try2Fly logo" className="h-12 w-12 object-contain" />
            <h1 className="text-2xl font-bold text-amber-500">
              Try2Fly
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-amber-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-amber-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('internships')}
              className="text-white hover:text-amber-500 transition-colors"
            >
              Internship
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-amber-500 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onNavigateToPayment}
              className="bg-amber-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-amber-500 py-2 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-amber-500 py-2 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('internships')}
              className="block w-full text-left text-white hover:text-amber-500 py-2 transition-colors"
            >
              Internship
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-amber-500 py-2 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onNavigateToPayment}
              className="block w-full bg-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-all mt-4"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
