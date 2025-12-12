'use client'

import { useState, useEffect } from 'react';

const Footer = () => {
  const [dimensions, setDimensions] = useState({
    gradientWidth: '1100px',
    gradientHeight: '520px',
    gradientRadius: '110px',
    phoneWidth: '420px',
    phoneHeight: '445px'
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 1024) {
        setDimensions({
          gradientWidth: '381px',
          gradientHeight: '186px',
          gradientRadius: '44px',
          phoneWidth: '154px',
          phoneHeight: '163px'
        });
      } else {
        setDimensions({
          gradientWidth: '1100px',
          gradientHeight: '520px',
          gradientRadius: '110px',
          phoneWidth: '420px',
          phoneHeight: '445px'
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-36 pb-6 sm:pb-8 lg:pb-12 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Follow Us Section */}
        <div className="max-w-[950px] mx-auto flex flex-row items-center justify-center lg:justify-start gap-2 lg:gap-7 mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-[40px] lg:leading-[50px]" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 800,
            letterSpacing: '0%',
            textTransform: 'capitalize',
            opacity: 1
          }}>Follow Us</h2>
          <div className="flex gap-2 lg:gap-12">
            <a href="#" className="flex items-center w-[30px] lg:w-[52px] justify-center hover:opacity-80 transition">
              <img src="/images/Facebook.png" alt="Facebook" className="w-full h-auto" />
            </a>
            <a href="#" className="flex items-center w-[28px] lg:w-[48px] justify-center hover:opacity-80 transition">
              <img src="/images/Linkedin.png" alt="LinkedIn" className="w-full h-auto" />
            </a>
            <a href="#" className="flex items-center w-[36px] lg:w-[62px] justify-center hover:opacity-80 transition">
              <img src="/images/YouTube.png" alt="YouTube" className="w-full h-auto" />
            </a>
            <a href="#" className="flex items-center w-[28px] lg:w-[48px] justify-center hover:opacity-80 transition">
              <img src="/images/Twitter.png" alt="Twitter" className="w-full h-auto" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div style={{
          width: '100%',
          maxWidth: '1050px',
          height: '0px',
          borderTop: '1px solid #BBBBBB',
          opacity: 1,
          margin: '0 auto 2rem auto'
        }} className="lg:mb-24"></div>

        {/* Main Footer Content Container */}
        <div className="relative lg:scale-100 origin-top">
          {/* Gradient Background Div */}
          <div className="p-4 lg:p-8 mx-auto" style={{
            background: 'linear-gradient(115.44deg, #CBF696 15.54%, rgba(84, 225, 99, 0.8) 80.46%)',
            width: dimensions.gradientWidth,
            maxWidth: '100%',
            height: dimensions.gradientHeight,
            opacity: 1,
            borderRadius: dimensions.gradientRadius,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="grid grid-cols-2 lg:grid-cols-2 my-15" style={{ height: '100%' }}>
              {/* Text content - Left half */}
              <div className="flex flex-col justify-center ml-1 lg:ml-8 mt-0 lg:mt-10">
                <h2 className='text-[10px] lg:text-[34px] leading-tight lg:leading-[42px] lg:ml-4 lg:w-[320px] lg:mb-4 mb-1' style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  opacity: 1
                }}>
                  Your Trusted Hub<br />
                  For Holistic<br />
                  Wellness Solutions
                </h2>
                <p className='text-[8px] lg:text-[16px] leading-tight lg:leading-[26px] lg:ml-4 lg:w-[280px] lg:mb-4' style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  opacity: 1,
                  color: '#111827'
                }}>
                  Discover the power of simplicity and speed with our app.
                </p>

                {/* Download Buttons - Inside gradient div for lg screens */}
                <div className="hidden lg:flex flex-wrap gap-3 mt-16 ml-4">
                  <button className="bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition" style={{
                    width: '155px',
                    height: '56px',
                    opacity: 1,
                    borderRadius: '16px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '17px',
                    lineHeight: '100px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    textTransform: 'capitalize'
                  }}>
                    <img src="/images/Apple-logo.png" alt="Apple Store" className="brightness-0 invert" style={{
                      width: '28px',
                      height: '34px',
                      opacity: 1
                    }} />
                    Download
                  </button>
                  <button className="bg-white text-gray-900 flex items-center justify-center gap-2 border-2 border-black hover:border-gray-400 transition" style={{
                    width: '155px',
                    height: '56px',
                    opacity: 1,
                    borderRadius: '16px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '17px',
                    lineHeight: '100px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    textTransform: 'capitalize'
                  }}>
                    <img src="/images/GooglePlay.png" alt="Google Play" className="object-contain" style={{
                      width: '28px',
                      height: '34px',
                      opacity: 1
                    }} />
                    Download
                  </button>
                </div>
              </div>

              {/* Phone image - Right half on small, absolute on lg */}
              <div style={{ position: 'absolute', bottom: 0, right: '20px' }} className="lg:right-20">
                <img
                  src="/images/FooterPhone.png"
                  alt="App preview"
                  style={{
                    width: dimensions.phoneWidth,
                    height: dimensions.phoneHeight,
                    maxWidth: '100%',
                    opacity: 1,
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Download Buttons - Outside gradient div for small screens */}
          <div className="flex lg:hidden gap-2 mt-4 ml-4">
            <button className="bg-black text-white flex items-center justify-center gap-1 hover:bg-gray-800 transition" style={{
              width: '120px',
              height: '50px',
              opacity: 1,
              borderRadius: '15px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0%',
              textTransform: 'capitalize'
            }}>
              <img src="/images/Apple-logo.png" alt="Apple Store" className="brightness-0 invert" style={{
                width: '20px',
                height: '24px',
                opacity: 1
              }} /> 
              Download
            </button>
            <button className="bg-white text-gray-900 flex items-center justify-center gap-1 border-2 border-black hover:border-gray-400 transition" style={{
              width: '120px',
              height: '50px',
              opacity: 1,
              borderRadius: '15px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0%',
              textTransform: 'capitalize'
            }}>
              <img src="/images/GooglePlay.png" alt="Google Play" className="object-contain" style={{
                width: '20px',
                height: '24px',
                opacity: 1
              }} />
              Download
            </button>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-8">
          <p className="text-sm lg:text-[18px]" style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 200,
            lineHeight: '1.5',
            letterSpacing: '0%',
            textTransform: 'capitalize',
            maxWidth: '480px',
            opacity: 1,
            margin: '0 auto'
          }}>
            copyright © 2025 Herb Immortal Inc. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
