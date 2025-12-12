'use client'

import { useState, useEffect } from 'react';

const HealthcareSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({
    isLarge: false,
    isMedium: false
  });

  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      setDimensions({
        isLarge: window.innerWidth >= 1024,
        isMedium: window.innerWidth >= 768
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      title: "Secure & Private",
      description: "Get personalized tips and predictions for better health.",
      hasGreenBorder: true,
    },
    {
      title: "Outstanding Healer",
      description:
        "Connect With Top Holistic Healers And Herbal Vendors Worldwide.",
      hasGreenBorder: false,
    },
    {
      title: "Instant Appointments",
      description: "Book In Seconds With Our Scheduling System.",
      hasGreenBorder: false,
    },
    {
      title: "All–In–One Super App",
      description:
        "Medicine Provision, Consultations, AI Diagnose – Everything In One App.",
      hasGreenBorder: false,
    },
  ];

  if (!isMounted) {
    return (
      <section className="w-full bg-white py-10 md:py-14 lg:py-21 px-2">
        <div className="lg:hidden flex flex-col gap-5">
          <div className="w-full flex items-start justify-center px-4">
            <img
              src="/images/image.png"
              alt="Health App Screenshot"
              className="w-full max-w-[265px] sm:max-w-sm md:max-w-md"
              style={{ height: "auto" }}
            />
          </div>

          <div className="w-full">
            <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-weight-400 text-center text-black leading-snug px-4">
              Health Care, Anytime, <br />
              <span className="text-[#265C2D] text-center font-weight-400">Anywhere</span>
            </h2>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-col space-y-2.5 md:space-y-3.5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`w-full px-5 py-5 md:px-7 md:py-7 cursor-pointer transition-all ${
                    feature.hasGreenBorder ? 'border-2 border-[#265C2D]' : ''
                  } hover:border-2 hover:border-[#265C2D]`}
                  style={{
                    background: feature.hasGreenBorder ? "#FFFFFF" : "#F8F8F8",
                    height: "auto",
                    borderRadius: "23px",
                  }}
                >
                  <h3
                    className="font-semibold mb-2 md:mb-2.5 text-left"
                    style={{
                      fontWeight: 600,
                      fontSize: "19px",
                      lineHeight: "25px",
                      color: "#000000",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-left"
                    style={{
                      fontWeight: 300,
                      fontSize: "15px",
                      lineHeight: "21px",
                      textTransform: "capitalize",
                      color: "#000000",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex max-w-[full] mx-auto flex-col items-center justify-center gap-5 md:gap-7 lg:gap-9">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-weight-400 text-center text-black leading-snug pb-5 md:pb-7 lg:pb-9 px-4 lg:px-0">
            Health Care, Anytime, <br />
            <span className="text-[#265C2D] text-center font-weight-400">Anywhere</span>
          </h2>

          <div className="flex flex-col lg:flex-row item-start justify-center gap-5 md:gap-7 lg:gap-9 w-full max-w-[1100px] px-4 lg:px-0">
            <div className="w-full lg:w-[45%] my-auto">
              <div className="flex flex-col justify-between" style={{ height: "675px" }}>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`w-full cursor-pointer flex flex-col justify-center items-start text-left transition-all ${
                      feature.hasGreenBorder ? 'border-2 border-[#265C2D]' : ''
                    } hover:border-2 hover:border-[#265C2D]`}
                    style={{
                      background: feature.hasGreenBorder ? "#FFFFFF" : "#F8F8F8",
                      height: "155px",
                      borderRadius: "28px",
                      padding: "22px 26px",
                    }}
                  >
                    <h3
                      className="font-semibold mb-3 text-left"
                      style={{
                        fontWeight: 600,
                        fontSize: "22.5px",
                        lineHeight: "28.5px",
                        color: "#000000",
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="text-left"
                      style={{
                        fontWeight: 300,
                        fontSize: "17px",
                        lineHeight: "23px",
                        textTransform: "capitalize",
                        color: "#000000",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex w-full lg:w-[55%] items-center justify-center">
              <img
                src="/images/image.png"
                alt="Health App Screenshot"
                className="w-full max-w-[630px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-21 px-2 font-family-['DM_Sans']">
      {/* SM/MD Layout - 3 divs in column */}
      <div className="lg:hidden flex flex-col gap-5">
        {/* Div 1: Image Section */}
        <div className="w-full flex items-start justify-center px-4">
          <img
            src="/images/image.png"
            alt="Health App Screenshot"
            className="w-full max-w-[265px] sm:max-w-sm md:max-w-md"
            style={{ height: "auto" }}
          />
        </div>

        {/* Div 2: Main Heading */}
        <div className="w-full">
          <h2 className="text-[22px] sm:text-[28px] md:text-[36px] font-weight-400 text-center text-black leading-snug px-4">
            Health Care, Anytime, <br />
            <span className="text-[#265C2D] text-center font-weight-400">Anywhere</span>
          </h2>
        </div>

        {/* Div 3: 4 Feature Cards in column */}
        <div className="w-full px-4">
          <div className="flex flex-col space-y-2.5 md:space-y-3.5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`w-full px-5 py-5 md:px-7 md:py-7 cursor-pointer transition-all ${
                  feature.hasGreenBorder ? 'border-2 border-[#265C2D]' : ''
                } hover:border-2 hover:border-[#265C2D]`}
                style={{
                  background: feature.hasGreenBorder ? "#FFFFFF" : "#F8F8F8",
                  height: "auto",
                  borderRadius: "23px",
                }}
              >
                <h3
                  className="font-semibold mb-2 md:mb-2.5 text-left"
                  style={{
                    fontWeight: 600,
                    fontSize: "19px",
                    lineHeight: "25px",
                    color: "#000000",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-left"
                  style={{
                    fontWeight: 300,
                    fontSize: dimensions.isMedium ? "17px" : "15px",
                    lineHeight: dimensions.isMedium ? "23px" : "21px",
                    textTransform: "capitalize",
                    color: "#000000",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LG Layout - Original */}
      <div className="hidden lg:flex max-w-[full] mx-auto flex-col items-center justify-center gap-5 md:gap-7 lg:gap-9">

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-weight-400 text-center text-black leading-snug pb-5 md:pb-7 lg:pb-9 px-4 lg:px-0">
          Health Care, Anytime, <br />
          <span className="text-[#265C2D] text-center font-weight-400">Anywhere</span>
        </h2>

        <div className="flex flex-col lg:flex-row item-start justify-center gap-5 md:gap-7 lg:gap-9 w-full max-w-[1100px] px-4 lg:px-0">

          {/* Left Section - 4 divs in 1 column on sm */}
          <div className="w-full lg:w-[45%] my-auto">
            <div className="flex flex-col justify-between" style={{ height: "675px" }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`w-full cursor-pointer flex flex-col justify-center items-start text-left transition-all ${
                    feature.hasGreenBorder ? 'border-2 border-[#265C2D]' : ''
                  } hover:border-2 hover:border-[#265C2D]`}
                  style={{
                    background: feature.hasGreenBorder ? "#FFFFFF" : "#F8F8F8",
                    height: "155px",
                    borderRadius: "28px",
                    padding: "22px 26px",
                  }}
                >
                  <h3
                    className="font-semibold mb-3 text-left"
                    style={{
                      fontWeight: 600,
                      fontSize: "22.5px",
                      lineHeight: "28.5px",
                      color: "#000000",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-left"
                    style={{
                      fontWeight: 300,
                      fontSize: "17px",
                      lineHeight: "23px",
                      textTransform: "capitalize",
                      color: "#000000",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (Screenshot) - Hidden on sm, visible on lg */}
          <div className="hidden lg:flex w-full lg:w-[55%] items-center justify-center">
            <img
              src="/images/image.png"
              alt="Health App Screenshot"
              className="w-full max-w-[630px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HealthcareSection;