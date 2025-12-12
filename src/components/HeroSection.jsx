'use client'

import Navbar from "./Navbar";
import Magnet from './Magnet';

export default function HeroSection() {
  return (
    <>
      <style>{`
        @media (max-width: 639px) {
          .hero-section-container-mobile {
            height: 540px !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      <div className="hero-section-container-mobile font-dm w-full max-w-[400px] sm:max-w-[92%] lg:max-w-[1150px] mx-auto relative px-3 sm:px-4 md:px-5 lg:px-9 py-2.5 sm:py-3.5 md:py-5 sm:overflow-hidden mt-[70px] sm:mt-[85px] md:mt-[105px]">
      {/* Mobile Gradient Container */}
      <div
        className="absolute bottom-0 left-0 w-full h-[320px] sm:hidden rounded-b-[75px] z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(203, 246, 150, 0) 0%, rgba(118, 222, 127, 0.2) 35.1%, #BDEDC2 100%)",
        }}
      ></div>

      {/* Desktop Gradient Background */}
      <div
        className="hidden sm:block absolute inset-0 rounded-b-[75px] lg:rounded-[38px] z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(203, 246, 150, 0) 0%, rgba(118, 222, 127, 0.2) 35.1%, #BDEDC2 100%)",
        }}
      ></div>

      {/* SM/MD - Just Logo */}
      <div className="lg:hidden relative z-20 flex justify-center items-center" style={{ marginTop: '22px', transform: 'translateY(-7px)' }}>
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            width: '38px',
            height: '35px',
          }}
        />
      </div>

      {/* LG - Full Navbar */}
      <div className="hidden lg:block relative z-20">
        <Navbar />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 lg:gap-5.5 items-center max-w-5xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-3.5 sm:gap-4.5 lg:gap-5.5 text-center lg:text-left px-2 lg:pr-7 relative z-30">
            <h1 className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[52px] xl:text-[56px] font-semibold leading-[1.1] sm:leading-tight text-gray-900">
              Download The Super App Now
            </h1>

            <p className="text-[15px] sm:text-[19px] md:text-[21px] lg:text-[23px] xl:text-[24px] text-gray-600 leading-relaxed">
              Access Personalized Wellness Solutions
            </p>

            <div className="flex flex-row justify-center lg:justify-start gap-2.5 sm:gap-3 lg:gap-3.5">
              <style>{`
                @media (max-width: 1023px) {
                  .hero-button-sm {
                    width: 140px !important;
                    height: 48px !important;
                    padding: 0 !important;
                  }
                }
              `}</style>
              <button className="hero-button-sm flex items-center justify-center gap-1.5 sm:gap-2 rounded-[14px] sm:rounded-[17px] bg-black text-white px-3.5 sm:px-4.5 py-2 sm:py-2.5 hover:bg-gray-800 transition-all shadow-lg w-full sm:w-auto lg:px-4.5 lg:py-2.5">
                <img src="/images/Apple-logo.png" alt="App Store" className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
                <div className="text-left">
                  <div className="text-sm sm:text-base font-semibold">App Store</div>
                </div>
              </button>

              <button className="hero-button-sm flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-gray-900 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-[14px] sm:rounded-[17px] border-2 border-black hover:border-gray-400 transition-all shadow-lg w-full sm:w-auto lg:px-4.5 lg:py-2.5">
                <img src="/images/Playstore.png" alt="Google Play" className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" />
                <div className="text-left">
                  <div className="text-sm sm:text-base font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex justify-center lg:justify-end mt-3.5 sm:mt-4.5 lg:mt-0 min-h-[460px] sm:min-h-[440px] lg:min-h-0">
            {/* Phone Image - Made Bigger and Moved Down */}
            <div className="relative w-[185px] h-[275px] sm:w-[275px] sm:h-auto md:w-[320px] lg:w-[380px] xl:w-[410px] sm:translate-y-8 lg:translate-y-10 left-[9px] sm:left-[-37px] lg:left-[-65px] z-0">
              <img
                src="/images/HeroPhone.png"
                alt="App Screenshot"
                className="w-full h-full sm:h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating Category Card - Made Bigger and Moved Down */}
            <div className="absolute top-[35px] left-[0px] sm:top-[10%] sm:left-[-9%] lg:top-[18%] lg:left-[-25%] z-20 lg:max-w-[350px]">
              <style>{`
                @media (max-width: 1023px) {
                  .top-category-card-sm {
                    width: 172px !important;
                    height: 84px !important;
                  }
                }
              `}</style>
              {/* Mobile/Tablet - No Magnet */}
              <div
                className="top-category-card-sm lg:hidden bg-white rounded-[20px] sm:rounded-3xl p-2.5 sm:p-3 shadow-lg"
                style={{
                  boxShadow: '0px 3.5px 11px 0px rgba(0, 0, 0, 0.13)'
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
                <h2 className="top-categories-heading-sm font-bold text-gray-900 mb-1.5 sm:mb-2 text-[10.5px] sm:text-[13.5px]">
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
                      className="flex flex-col items-center gap-0.5 sm:gap-1"
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
                      <span className="category-label-sm text-[7px] sm:text-[8.5px] text-gray-900 text-center font-semibold leading-tight">
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
                      boxShadow: '0px 6.5px 21px 0px rgba(0, 0, 0, 0.13)'
                    }}
                  >
                  <h2 className="font-bold text-gray-900 mb-2.5 text-[14px]">
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
                        <div className={`w-[48px] h-[48px] ${idx === 0 ? 'bg-[#CBF696]' : 'bg-gray-100'} rounded-3xl flex items-center justify-center p-2`}>
                          <img
                            src={item.img}
                            alt={item.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[9.5px] text-gray-900 text-center font-semibold leading-tight">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Magnet>
              </div>
            </div>

            {/* Doctor Profile Card - Made Bigger and Moved Down */}
            <div className="absolute top-[24%] left-[160px] sm:top-[560px] sm:left-[220px] lg:top-[44%] lg:left-auto lg:right-[-4.5%] z-20 lg:max-w-[310px]">
              <style>{`
                @media (max-width: 1023px) {
                  .doctor-card-sm {
                    width: 178px !important;
                    height: 98px !important;
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
              <div className="doctor-card-sm lg:hidden bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 shadow-xl" style={{ boxShadow: '0px 3.5px 11px 0px rgba(0, 0, 0, 0.13)' }}>
                <div className="doctor-profile-section-sm flex items-start gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="bg-gray-200 rounded-full flex-shrink-0 w-[43px] h-[43px]"></div>
                  <div className="doctor-info-sm flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-0.5 leading-tight" style={{ fontSize: '9px', width: '88px', height: '13px' }}>
                      Dr. Charlie Dettman
                    </h4>
                    <p className="text-gray-600 mb-0.5 flex items-center gap-0.5" style={{ fontSize: '7px' }}>
                      <span>👤</span>
                      <span style={{ width: '63px', height: '14px' }}>
                        Neurologist
                      </span>
                    </p>
                    <span className="inline-flex items-center justify-center px-2 py-0.5 bg-[#265C2D] text-white font-semibold rounded-full" style={{ width: '38px', height: '13px', fontSize: '6.5px' }}>
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
                      height: 21px !important;
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
                <div className="doctor-price-container-sm flex items-center justify-between border border-[#265C2D] rounded-xl px-2 sm:px-2.5 py-0.5 sm:py-1" style={{ width: '156px', height: '21px' }}>
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
                  <button className="bg-[#265C2D] text-white font-semibold whitespace-nowrap rounded-xl" style={{ width: '88px', height: '12px', fontSize: '6.5px' }}>
                    Book Online Session
                  </button>
                </div>
              </div>

              {/* Desktop - With Magnet */}
              <div className="hidden lg:block">
                <Magnet padding={100} disabled={false} magnetStrength={5}>
                  <div className="bg-white rounded-3xl p-4 w-[330px] shadow-2xl" style={{ boxShadow: '0px 6.5px 21px 0px rgba(0, 0, 0, 0.13)' }}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-[80px] h-[80px] bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-[16px] mb-1 leading-tight">
                          Dr. Charlie Dettman
                        </h4>
                        <p className="text-[10px] text-gray-600 mb-1.5 flex items-center gap-1">
                          👤 <span>Neurologist</span>
                        </p>
                        <span className="inline-block px-2.5 py-0.5 bg-green-700 text-white text-[9px] rounded-full font-semibold">
                          Verified
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border border-[#265C2D] rounded-xl px-3 py-2">
                      <div>
                        <div className="text-[11px] text-gray-500">
                          Price
                        </div>
                        <div className="text-[14px] font-extrabold text-gray-900">
                          C$43
                        </div>
                      </div>
                      <button className="bg-[#265C2D] h-[28px] px-3 text-white rounded-xl text-[9px] font-semibold whitespace-nowrap">
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