'use client'

import { useState, useEffect, useRef } from 'react';

const StickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeButton, setActiveButton] = useState('hero-section');
  const navRef = useRef(null);
  const buttonRefs = useRef({});

  useEffect(() => {
    if (activeButton && buttonRefs.current[activeButton] && navRef.current) {
      const button = buttonRefs.current[activeButton];
      const nav = navRef.current;

      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const navWidth = nav.offsetWidth;
      const scrollLeft = buttonLeft - (navWidth / 2) + (buttonWidth / 2);

      nav.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeButton]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section-container-mobile');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsSticky(window.scrollY > heroHeight);
      }

      const sections = [
        { id: 'hero-section', element: document.getElementById('hero-section') },
        { id: 'services-section', element: document.getElementById('services-section') },
        { id: 'vendor-section', element: document.getElementById('vendor-section') },
        { id: 'waitlist-section', element: document.getElementById('waitlist-section') }
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = 'hero-section';

      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = section.id;
          }
        }
      }

      setActiveButton(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveButton(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 65;
      const offsetTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`sticky-nav lg:hidden transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : 'relative'
      }`}
      style={{ zIndex: 1000, paddingTop: '20px' }}
    >
      <style>{`
        @media (max-width: 1023px) {
          .sticky-nav {
            background: #FBFAFA;
            width: 100%;
            max-width: 716px;
            height: 65px;
            opacity: 1;
            margin: 0 auto;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .sticky-nav::-webkit-scrollbar {
            display: none;
          }
          .sticky-nav-container {
            display: inline-flex;
            align-items: center;
            height: 100%;
            padding: 11.5px 20px;
            gap: 20px;
            white-space: nowrap;
          }
          .sticky-nav-button {
            font-family: 'DM Sans', sans-serif;
            font-weight: 700;
            font-style: normal;
            font-size: 20px;
            line-height: 100%;
            letter-spacing: 0%;
            color: #000000;
            background: transparent;
            border: none;
            border-radius: 38px;
            min-width: 164px;
            width: 164px;
            height: 42px;
            opacity: 1;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .sticky-nav-button:hover {
            opacity: 0.8;
          }
          .sticky-nav-button.active {
            color: #FFFFFF;
            background: linear-gradient(114.57deg, #B1EDB7 13.18%, rgba(30, 180, 46, 0.8) 48.02%, #188123 83.54%);
            opacity: 1;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }
        }
      `}</style>
      <div className="sticky-nav-container">
        <button
          ref={(el) => buttonRefs.current['hero-section'] = el}
          className={`sticky-nav-button ${activeButton === 'hero-section' ? 'active' : ''}`}
          onClick={() => scrollToSection('hero-section')}
        >
          Home
        </button>
        <button
          ref={(el) => buttonRefs.current['services-section'] = el}
          className={`sticky-nav-button ${activeButton === 'services-section' ? 'active' : ''}`}
          onClick={() => scrollToSection('services-section')}
        >
          Services
        </button>
        <button
          ref={(el) => buttonRefs.current['vendor-section'] = el}
          className={`sticky-nav-button ${activeButton === 'vendor-section' ? 'active' : ''}`}
          onClick={() => scrollToSection('vendor-section')}
        >
          Vendor
        </button>
        <button
          ref={(el) => buttonRefs.current['waitlist-section'] = el}
          className={`sticky-nav-button ${activeButton === 'waitlist-section' ? 'active' : ''}`}
          onClick={() => scrollToSection('waitlist-section')}
        >
          Waitlist
        </button>
      </div>
    </nav>
  );
};

export default StickyNav;