'use client'

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', sectionId: 'hero-section' },
    { id: 'about', label: 'About', sectionId: 'services-section' },
    { id: 'vendors', label: 'Vendors', sectionId: 'vendor-section' },
    { id: 'waitlist', label: 'Waitlist', sectionId: 'waitlist-section' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingItem = navItems.find(item => item.sectionId === entry.target.id);
          if (matchingItem) {
            setActiveItem(matchingItem.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach(item => {
      const section = document.getElementById(item.sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleItemClick = (item, sectionId) => {
    setActiveItem(item);
    setMobileMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 90;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-8 pb-3 bg-gradient-to-b from-white via-white to-transparent">
      <nav className="max-w-[1100px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 bg-white/95 backdrop-blur-md border border-[#51A658] rounded-[18px] sm:rounded-[24px] lg:rounded-[30px] shadow-sm">
        <div className="flex justify-between items-center h-16 md:h-[85px] bg-transparent relative">
          {/* Logo */}
          <div className="flex items-center z-10 flex-shrink-0">
            <div className="w-12 h-12 md:w-[68px] md:h-[68px] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png" 
                alt="Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div 
              className="flex items-center justify-center px-3 md:px-6 font-bold bg-[#F5F5F5]"
              style={{
                width: 'min(450px, 90%)',
                height: '62px',
                borderRadius: '31px',
              }}
            >
              <div className="flex items-center justify-between w-full max-w-md">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`px-3 py-2.5 lg:px-5 lg:py-3 rounded-full font-semibold transition-all duration-200 whitespace-nowrap text-xs lg:text-sm ${
                      activeItem === item.id
                        ? 'bg-white text-[#275D2C] shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => handleItemClick(item.id, item.sectionId)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:block z-10 flex-shrink-0">
            <button className="bg-black text-[#CBF696] pl-4 pr-2 lg:pl-5 lg:pr-2.5 py-2 lg:py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 whitespace-nowrap flex items-center gap-2 text-xs lg:text-sm">
              Download 
              <span className="bg-[#CBF696] rounded-full flex items-center justify-center" style={{ width: '38px', height: '38px' }}>
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 z-10 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-b-2xl mx-4">
            <div className="py-3 px-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`block w-full text-left px-3 py-3 rounded-xl font-medium transition-all duration-200 text-sm ${
                    activeItem === item.id
                      ? 'bg-[#275D2C] text-white shadow-sm'
                      : 'bg-[#F5F5F5] text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleItemClick(item.id, item.sectionId)}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-black text-[#CBF696] px-3 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 mt-3 flex items-center justify-center gap-2 text-sm">
                Download APP
                <span className="bg-[#CBF696] rounded-full flex items-center justify-center" style={{ width: '32px', height: '32px' }}>
                  <ArrowRight className="w-4 h-4 text-black" />
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;