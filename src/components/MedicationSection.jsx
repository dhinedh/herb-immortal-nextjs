'use client'

const MedicationSection = () => {
  const features = [
    {
      title: "Download The APP",
      description: "Get our myherbalshop.ai app for free on the app store or google play, start your health journey with just a tap.",
    },
    {
      title: "Choose A Service",
      description: "Purchase medicine, book an appointment, consult online, pick what you need and schedule in seconds.",
    },
    {
      title: "Get Care Fast",
      description: "Receive medicine and health care products, connect with doctors instantly, all your healthcare needs, handled efficiently.",
    }
  ];

  return (
    <section className="medication-section-outer font-family-['DM_Sans'] py-8 md:py-16 bg-white flex justify-center">
      <style>{`
        @media (max-width: 1023px) {
          .medication-section-outer {
            padding-right: 0 !important;
            margin-right: 0 !important;
            overflow-x: visible !important;
          }
          .medication-section-container {
            padding-right: 0 !important;
            margin-right: 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
      <div className="medication-section-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">

        {/* Header */}
        <div
          className="medication-header-wrapper text-center mb-8 md:mb-16 mx-auto"
          style={{
            width: '100%',
            maxWidth: '536px',
            height: 'auto',
            minHeight: '166px',
          }}
        >
          <style>{`
            @media (max-width: 1023px) {
              .medication-header-wrapper {
                margin-bottom: 20px !important;
                min-height: auto !important;
              }
              .medication-heading {
                font-family: 'DM Sans', sans-serif !important;
                font-weight: 400 !important;
                font-style: normal !important;
                font-size: 25px !important;
                line-height: 100% !important;
                letter-spacing: 0% !important;
                text-align: center !important;
                vertical-align: middle !important;
                text-transform: capitalize !important;
              }
              .medication-heading br {
                display: none !important;
              }
            }
          `}</style>
          <h2
            className="medication-heading font-medium px-4"
            style={{
              fontWeight: 500,
              fontSize: 'clamp(2.5rem, 5vw, 70px)',
              lineHeight: 'clamp(3rem, 6vw, 100px)',
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: '#000000',
            }}
          >
            All Kinds Of<br />Medication
          </h2>
        </div>

        {/* Responsive Flex container */}
        <div className="medication-flex-container flex flex-row md:flex-row lg:flex-row gap-3 md:gap-6 lg:gap-8 items-stretch justify-between min-h-[500px] lg:h-[767px]">
          <style>{`
            @media (max-width: 1023px) {
              .medication-flex-container {
                margin-right: 0 !important;
                padding-right: 0 !important;
                min-height: auto !important;
                height: auto !important;
              }
              .feature-cards-wrapper {
                width: 66.666667% !important;
                max-width: 66.666667%;
                overflow: visible;
                padding-top: 0 !important;
                padding-bottom: 0 !important;
              }
              .image-wrapper-medication {
                width: 33.333333% !important;
              }
            }
          `}</style>

          {/* Feature Cards Section - Left on sm/md, Right on lg */}
          <div className="feature-cards-wrapper w-1/2 md:w-1/2 lg:w-1/2 min-w-0 flex flex-col justify-between gap-2 md:gap-4 lg:gap-6 py-2 md:py-4 order-1 lg:order-2">
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card-medication w-full transition-all duration-300 ease-in-out hover:border-2 hover:border-[#265C2D] cursor-pointer"
                  style={{
                    background: '#F8F8F8',
                    height: 'clamp(180px, 25vw, 210px)',
                    borderRadius: 'clamp(30px, 5vw, 50px)',
                    padding: 'clamp(20px, 4vw, 35px)',
                  }}
                >
                  <style>{`
                    @media (max-width: 1023px) {
                      .feature-card-medication {
                        width: 100% !important;
                        height: 112px !important;
                        border-radius: 20px !important;
                        padding: 12px 16px !important;
                        opacity: 1;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                      }
                    }
                  `}</style>
                  {/* Title */}
                  <h3
                    className="feature-title-medication font-semibold mb-3 lg:mb-5"
                    style={{
                      fontWeight: 600,
                      fontSize: 'clamp(18px, 3vw, 32px)',
                      lineHeight: 'clamp(24px, 4vw, 28px)',
                      color: '#000000',
                    }}
                  >
                    <style>{`
                      @media (max-width: 1023px) {
                        .feature-title-medication {
                          font-size: 14px !important;
                          line-height: 18px !important;
                          margin-bottom: 8px !important;
                        }
                      }
                    `}</style>
                    {feature.title}
                  </h3>

                  {/* Description Content */}
                  <div className="w-full">
                    <p
                      className="feature-description-medication"
                      style={{
                        fontWeight: 300,
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        lineHeight: 'clamp(20px, 3vw, 24px)',
                        letterSpacing: '0%',
                        textTransform: 'capitalize',
                        color: '#000000',
                      }}
                    >
                      <style>{`
                        @media (max-width: 1023px) {
                          .feature-description-medication {
                            font-size: 10px !important;
                            line-height: 14px !important;
                          }
                        }
                      `}</style>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button only visible on lg screens */}
            <button
  className="hidden lg:block font-semibold hover:!bg-[#CBF696] hover:!text-black transition-all duration-300 self-center lg:self-start mt-2 w-full lg:w-auto text-center"
  style={{
    background: '#000000',
    color: '#D8F7A9',
    padding: 'clamp(12px, 2vw, 14px) clamp(24px, 3vw, 28px)',
    borderRadius: '9999px',
    fontSize: 'clamp(14px, 2vw, 16px)',
  }}
>
  DOWNLOAD NOW
</button>
          </div>

          {/* Image Section - Right on sm/md, Left on lg */}
          <div className="image-wrapper-medication w-1/2 md:w-1/2 lg:w-1/2 flex justify-end lg:justify-center order-2 lg:order-1" style={{paddingRight: 0, marginRight: 0}}>
            <style>{`
              @media (max-width: 1023px) {
                .image-wrapper-medication {
                  padding-right: 0 !important;
                  margin-right: 0 !important;
                  justify-content: flex-end !important;
                }
                .image-container-medication {
                  max-width: none !important;
                  margin-right: 0 !important;
                  height: auto !important;
                  max-height: calc(112px * 3 + 8px * 2) !important;
                  width: auto !important;
                  justify-content: flex-end !important;
                }
                .image-container-medication img {
                  margin-right: 0 !important;
                }
              }
              @media (min-width: 1024px) {
                .image-container-medication {
                  background: linear-gradient(135deg, #CBF696 0%, #54E163CC 100%);
                  box-shadow: 5px 0 10px rgba(0,0,0,0.05), 0 5px 10px rgba(0,0,0,0.05), 0 -5px 10px rgba(0,0,0,0.05);
                }
              }
            `}</style>
            <div
              className="image-container-medication flex items-center justify-center w-full max-w-[400px] lg:max-w-[833px] lg:items-end"
              style={{
                height: 'clamp(400px, 50vw, 767px)',
                borderRadius: 'clamp(40px, 10vw, 111px)',
                position: 'relative',
                overflow: 'hidden',
                marginRight: 0,
                paddingRight: 0,
              }}
            >
              <img
                src="/images/medication-sm.png"
                alt="Medication app interface"
                className="block md:block lg:hidden object-contain object-center"
                style={{
                  width: '153px',
                  height: '322px',
                }}
              />
              <img
                src="/images/Mask group.png"
                alt="Medication app interface"
                className="hidden lg:block w-full h-auto object-contain"
                style={{
                  position: 'relative',
                  bottom: '0',
                  maxWidth: '701px',
                  maxHeight: '1476px',
                  borderTopLeftRadius: 'clamp(40px, 10vw, 111px)',
                  borderTopRightRadius: 'clamp(40px, 10vw, 111px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Centered Download Button for sm and md screens only */}
        <div className="medication-button-wrapper flex justify-center mt-8 lg:hidden">
          <style>{`
            @media (max-width: 1023px) {
              .medication-button-wrapper {
                margin-top: 24px !important;
              }
              .download-button-medication {
                width: 114px !important;
                height: 34px !important;
                padding: 0 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-family: 'DM Sans', sans-serif !important;
                font-weight: 800 !important;
                font-style: normal !important;
                font-size: 11px !important;
                line-height: 100% !important;
                letter-spacing: 0% !important;
                text-align: center !important;
                text-transform: capitalize !important;
              }
            }
          `}</style>
          <button
  className="download-button-medication font-semibold hover:bg-[#CBF696] hover:text-black transition-all duration-300 text-center"
  style={{
    background: '#000000',
    color: '#D8F7A9',
    padding: 'clamp(12px, 2vw, 14px) clamp(24px, 3vw, 28px)',
    borderRadius: '9999px',
    fontSize: 'clamp(14px, 2vw, 16px)',
  }}
>
  DOWNLOAD NOW
</button>
        </div>
      </div>
    </section>
  );
};

export default MedicationSection;