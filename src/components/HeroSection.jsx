'use client'

import Navbar from "./Navbar";
import Magnet from './Magnet';

export default function HeroSection() {
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          .hero-section-container-mobile {
            height: 550px !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      <div className="hero-section-container-mobile font-dm w-full max-w-[420px] sm:max-w-[95%] lg:max-w-[1280px] mx-auto relative px-3 sm:px-5 md:px-6 lg:px-10 py-3 sm:py-4 md:py-6 sm:overflow-hidden mt-[60px] sm:mt-[75px] md:mt-[95px]">
      {/* Mobile Gradient Container */}
      <div
        className="absolute bottom-0 left-0 w-full h-[350px] sm:hidden rounded-b-[80px] z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(203, 246, 150, 0) 0%, rgba(118, 222, 127, 0.2) 35.1%, #BDEDC2 100%)",
        }}
      ></div>

      {/* Desktop Gradient Background */}
      <div
        className="hidden sm:block absolute inset-0 rounded-b-[80px] lg:rounded-[40px] z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(203, 246, 150, 0) 0%, rgba(118, 222, 127, 0.2) 35.1%, #BDEDC2 100%)",
        }}
      ></div>

      {/* SM/MD - Just Logo */}
      <div className="lg:hidden relative z-20 flex justify-center items-center" style={{ marginTop: '25px', transform: 'translateY(-8px)' }}>
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            width: '40px',
            height: '37px',
          }}
        />
      </div>

      {/* LG - Full Navbar */}
      <div className="hidden lg:block relative z-20">
        <Navbar />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center max-w-6xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-3.5 sm:gap-5 lg:gap-6 text-center lg:text-left px-2 lg:pr-8 relative z-30">
            <h1 className="text-[30px] sm:text-[42px] md:text-[54px] lg:text-[60px] xl:text-[64px] font-semibold leading-[1.1] sm:leading-tight text-gray-900">
              Download The Super App Now
            </h1>

            <p className="text-[16px] sm:text-[20px] md:text-[23px] lg:text-[25px] xl:text-[26px] text-gray-600 leading-relaxed">
              Access Personalized Wellness Solutions
            </p>

            <div className="flex flex-row justify-center lg:justify-start gap-3 sm:gap-3.5 lg:gap-4">
              <style>{`
                @media (max-width: 1023px) {
                  .hero-button-sm {
                    width: 150px !important;
                    height: 52px !important;
                    padding: 0 !important;
                  }
                }
              `}</style>
              <button className="hero-button-sm flex items-center justify-center gap-2 sm:gap-2.5 rounded-[15px] sm:rounded-[18px] bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-gray-800 transition-all shadow-lg w-full sm:w-auto lg:px-5 lg:py-3">
                <img src="/images/Apple-logo.png" alt="App Store" className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <div className="text-base sm:text-lg font-semibold">App Store</div>
                </div>
              </button>

              <button className="hero-button-sm flex items-center justify-center gap-2 sm:gap-2.5 bg-white text-gray-900 px-4 sm:px-5 py-2.5 sm:py-3 rounded-[15px] sm:rounded-[18px] border-2 border-black hover:border-gray-400 transition-all shadow-lg w-full sm:w-auto lg:px-5 lg:py-3">
                <img src="/images/Playstore.png" alt="Google Play" className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <div className="text-base sm:text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center lg:justify-end mt-4 sm:mt-5 lg:mt-0 min-h-[480px] sm:min-h-[450px] lg:min-h-0">
            {/* Phone Image - Moved to back with z-0 */}
            <div className="relative w-[180px] h-[280px] sm:w-[280px] sm:h-auto md:w-[330px] lg:w-[400px] xl:w-[430px] sm:translate-y-5 lg:translate-y-6 left-[10px] sm:left-[-40px] lg:left-[-70px] z-0">
              <img
                src="/images/HeroPhone.png"
                alt="App Screenshot"
                className="w-full h-full sm:h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating Category Card */}
            <div className="absolute top-[30px] left-[0px] sm:top-[8%] sm:left-[-10%] lg:top-[16%] lg:left-[-27%] z-20 lg:max-w-[360px]">
              <style>{`
                @media (max-width: 1023px) {
                  .top-category-card-sm {
                    width: 175px !important;
                    height: 85px !important;
                  }
                }
              `}</style>
              {/* Mobile/Tablet - No Magnet */}
              <div
                className="top-category-card-sm lg:hidden bg-white rounded-[20px] sm:rounded-3xl p-2.5 sm:p-3.5 shadow-lg"
                style={{
                  boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)'
                }}
              >
                <style>{`
                  @media (max-width: 1023px) {
                    .top-categories-heading-sm {
                      font-family: 'Onest', sans-serif !important;
                      font-weight: 700 !important;
                      font-style: normal !important;
                      font-size: 7px !important;
                      line-height: 151% !important;
                      letter-spacing: 0% !important;
                      text-align: left !important;
                      vertical-align: middle !important;
                    }
                  }
                `}</style>
                <h2 className="top-categories-heading-sm font-bold text-gray-900 mb-1.5 sm:mb-2.5 text-[11px] sm:text-[15px]">
                  Top Categories
                </h2>
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                  {[
                    { img: "/images/hero-food.png", label: "Food" },
                    { img: "/images/hero-health.png", label: "Natural Health" },
                    { img: "/images/hero-nutrition.png", label: "Nutrition" },
                    { img: "/images/hero-health.png", label: "Health Home" },
                    { img: "/images/hero-medicine.png", label: "Medicine" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-0.5 sm:gap-1.5"
                    >
                      <style>{`
                        @media (max-width: 1023px) {
                          .category-icon-container-sm {
                            width: 26px !important;
                            height: 26px !important;
                            border-radius: 9999px !important;
                          }
                        }
                      `}</style>
                      <div
                        className={`category-icon-container-sm ${idx === 0 ? 'bg-[#CBF696]' : 'bg-gray-100'} rounded-2xl sm:rounded-3xl flex items-center justify-center p-1 sm:p-1.5`}
                      >
                        <img
                          src={item.img}
                          alt={item.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <style>{`
                        @media (max-width: 1023px) {
                          .category-label-sm {
                            font-family: 'Onest', sans-serif !important;
                            font-weight: 700 !important;
                            font-style: normal !important;
                            font-size: 5.5px !important;
                            line-height: 107% !important;
                            letter-spacing: 0% !important;
                            text-align: center !important;
                            vertical-align: middle !important;
                          }
                        }
                      `}</style>
                      <span className="category-label-sm text-[7px] sm:text-[9px] text-gray-900 text-center font-semibold leading-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop - With Magnet */}
              <div className="hidden lg:block">
                <Magnet padding={100} disabled={false} magnetStrength={5}>
                  <div
                    className="bg-white rounded-3xl p-4 shadow-xl"
                    style={{
                      boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                  <h2 className="font-bold text-gray-900 mb-2.5 text-[15px]">
                    Top Categories
                  </h2>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { img: "/images/hero-food.png", label: "Food" },
                      { img: "/images/hero-health.png", label: "Natural Health" },
                      { img: "/images/hero-nutrition.png", label: "Nutrition" },
                      { img: "/images/hero-health.png", label: "Health Home" },
                      { img: "/images/hero-medicine.png", label: "Medicine" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className={`w-[50px] h-[50px] ${idx === 0 ? 'bg-[#CBF696]' : 'bg-gray-100'} rounded-3xl flex items-center justify-center p-2`}>
                          <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[10px] text-gray-900 text-center font-semibold leading-tight">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Magnet>
              </div>
            </div>

            {/* Doctor Profile Card */}
            <div className="absolute top-[22%] left-[170px] sm:top-[582px] sm:left-[220px] lg:top-[42%] lg:left-auto lg:right-[-5%] z-20 lg:max-w-[310px]">
              <style>{`
                @media (max-width: 1023px) {
                  .doctor-card-sm {
                    width: 180px !important;
                    height: 100px !important;
                  }
                }
              `}</style>
              {/* Mobile/Tablet - No Magnet */}
              <style>{`
                @media (max-width: 1023px) {
                  .doctor-info-sm h4 {
                    margin-bottom: 0.5px !important;
                  }
                  .doctor-info-sm p {
                    margin-bottom: 0.5px !important;
                  }
                  .doctor-profile-section-sm {
                    margin-bottom: 5px !important;
                  }
                  .doctor-card-sm {
                    padding-bottom: 5px !important;
                  }
                }
              `}</style>
              <div className="doctor-card-sm lg:hidden bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 shadow-xl" style={{ boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.15)' }}>
                <div className="doctor-profile-section-sm flex items-start gap-1.5 sm:gap-2.5 mb-1.5 sm:mb-2.5">
                  <div className="bg-gray-200 rounded-full flex-shrink-0 w-[44px] h-[44px]"></div>
                  <div className="doctor-info-sm flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-0.5 sm:mb-1 leading-tight" style={{ fontSize: '9px', width: '90px', height: '13px' }}>
                      Dr. Charlie Dettman
                    </h4>
                    <p className="text-gray-600 mb-0.5 sm:mb-1.5 flex items-center gap-1" style={{ fontSize: '7px' }}>
                      <span>👤</span>
                      <span style={{ width: '65px', height: '15px' }}>
                        Neurologist
                      </span>
                    </p>
                    <span className="inline-flex items-center justify-center px-2.5 py-0.5 bg-[#265C2D] text-white font-semibold rounded-full" style={{ width: '38px', height: '14px', fontSize: '6.5px' }}>
                      Verified
                    </span>
                  </div>
                </div>

                <style>{`
                  @media (max-width: 1023px) {
                    .doctor-price-container-sm {
                      padding-left: 8px !important;
                      padding-right: 8px !important;
                      padding-top: 0 !important;
                      padding-bottom: 0 !important;
                      display: flex !important;
                      align-items: center !important;
                      height: 22px !important;
                      gap: 4px !important;
                    }
                    .doctor-price-inner-sm {
                      display: flex !important;
                      flex-direction: column !important;
                      justify-content: center !important;
                      align-items: flex-start !important;
                      gap: 0 !important;
                      line-height: 1 !important;
                    }
                    .doctor-price-label-sm, .doctor-price-value-sm {
                      margin: 0 !important;
                      padding: 0 !important;
                    }
                  }
                `}</style>
                <div className="doctor-price-container-sm flex items-center justify-between border border-[#265C2D] rounded-xl px-2 sm:px-2.5 py-1 sm:py-1.5" style={{ width: '160px', height: '22px' }}>
                  <div className="doctor-price-inner-sm flex flex-col justify-center">
                    <style>{`
                      @media (max-width: 1023px) {
                        .doctor-price-label-sm {
                          font-family: 'Open Sans', sans-serif !important;
                          font-weight: 600 !important;
                          font-style: normal !important;
                          font-size: 6.5px !important;
                          line-height: 100% !important;
                          letter-spacing: 0% !important;
                        }
                      }
                    `}</style>
                    <div className="doctor-price-label-sm text-gray-500">
                      Price
                    </div>
                    <style>{`
                      @media (max-width: 1023px) {
                        .doctor-price-value-sm {
                          font-family: 'Montserrat', sans-serif !important;
                          font-weight: 800 !important;
                          font-style: normal !important;
                          font-size: 6.5px !important;
                          line-height: 100% !important;
                          letter-spacing: 0% !important;
                        }
                      }
                    `}</style>
                    <div className="doctor-price-value-sm font-extrabold text-gray-900">
                      C$43
                    </div>
                  </div>
                  <button className="bg-[#265C2D] text-white font-semibold whitespace-nowrap rounded-xl" style={{ width: '90px', height: '12px', fontSize: '6.5px' }}>
                    Book Online Session
                  </button>
                </div>
              </div>

              {/* Desktop - With Magnet */}
              <div className="hidden lg:block">
                <Magnet padding={100} disabled={false} magnetStrength={5}>
                  <div className="bg-white rounded-3xl p-4 w-[340px] shadow-2xl" style={{ boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.15)' }}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-[85px] h-[85px] bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-[17px] mb-1 leading-tight">
                          Dr. Charlie Dettman
                        </h4>
                        <p className="text-[11px] text-gray-600 mb-1.5 flex items-center gap-1">
                          👤 <span>Neurologist</span>
                        </p>
                        <span className="inline-block px-2.5 py-0.5 bg-green-700 text-white text-[9px] rounded-full font-semibold">
                          Verified
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border border-[#265C2D] rounded-xl px-3 py-2">
                      <div>
                        <div className="text-[12px] text-gray-500">
                          Price
                        </div>
                        <div className="text-[15px] font-extrabold text-gray-900">
                          C$43
                        </div>
                      </div>
                      <button className="bg-[#265C2D] h-[30px] px-3 text-white rounded-xl text-[9px] font-semibold whitespace-nowrap">
                        Book Online Session
                      </button>
                    </div>
                  </div>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}