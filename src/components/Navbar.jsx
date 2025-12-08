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
      const navbarHeight = 110;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = sectionTop - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-[50px] pt-4 sm:pt-6 pb-3 bg-gradient-to-b from-white via-white to-transparent">
      <nav className="max-w-[1430px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 bg-white/95 backdrop-blur-md border border-[#51A658] rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] shadow-sm">
        <div className="flex justify-between items-center h-16 md:h-[105px] bg-transparent relative">
          <div className="flex items-center z-10 flex-shrink-0">
            <div className="w-14 h-14 md:w-[88px] md:h-[88px] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png" 
                alt="Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div 
              className="flex items-center justify-center px-4 md:px-8 font-bold bg-[#F5F5F5]"
              style={{
                width: 'min(620px, 90%)',
                height: '78px',
                borderRadius: '39px',
              }}
            >
              <div className="flex items-center justify-between w-full max-w-md lg:max-w-lg xl:max-w-xl">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`px-4 py-3 lg:px-7 lg:py-4 rounded-full font-bold transition-all duration-200 whitespace-nowrap text-sm lg:text-base ${
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

          <div className="hidden md:block z-10 flex-shrink-0">
            <button className="bg-black text-[#CBF696] pl-6 pr-3 lg:pl-7 lg:pr-3 py-2.5 lg:py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 whitespace-nowrap flex items-center gap-2.5 text-sm lg:text-base">
              Download 
              <span className="bg-[#CBF696] rounded-full flex items-center justify-center" style={{ width: '46px', height: '46px' }}>
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </button>
          </div>

          <button 
            className="md:hidden p-2 z-10 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg rounded-b-2xl mx-4">
            <div className="py-4 px-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`block w-full text-left px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                    activeItem === item.id
                      ? 'bg-[#275D2C] text-white shadow-sm'
                      : 'bg-[#F5F5F5] text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => handleItemClick(item.id, item.sectionId)}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full bg-black text-[#CBF696] px-4 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 mt-4 flex items-center justify-center gap-3">
                Download APP
                <span className="bg-[#CBF696] rounded-full flex items-center justify-center" style={{ width: '45px', height: '45px' }}>
                  <ArrowRight className="w-6 h-6 text-black" />
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