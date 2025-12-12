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
    <section className="medication-section-outer font-family-['DM_Sans'] py-7 md:py-14 bg-white flex justify-center">
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
      <div className="medication-section-container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl w-full">

        {/* Header */}
        <div
          className="medication-header-wrapper text-center mb-7 md:mb-14 mx-auto"
          style={{
            width: '100%',
            maxWidth: '480px',
            height: 'auto',
            minHeight: '140px',
          }}
        >
          <style>{`
            @media (max-width: 1023px) {
              .medication-header-wrapper {
                margin-bottom: 18px !important;
                min-height: auto !important;
              }
              .medication-heading {
                font-family: 'DM Sans', sans-serif !important;
                font-weight: 400 !important;
                font-style: normal !important;
                font-size: 22px !important;
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
              fontSize: 'clamp(2.2rem, 4.5vw, 60px)',
              lineHeight: 'clamp(2.6rem, 5.5vw, 85px)',
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: '#000000',
            }}
          >
            All Kinds Of<br />Medication
          </h2>
        </div>

        {/* Responsive Flex container */}
        <div className="medication-flex-container flex flex-row md:flex-row lg:flex-row gap-3 md:gap-5 lg:gap-7 items-stretch justify-between min-h-[450px] lg:h-[670px]">
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
          <div className="feature-cards-wrapper w-1/2 md:w-1/2 lg:w-1/2 min-w-0 flex flex-col justify-between gap-2 md:gap-3 lg:gap-5 py-2 md:py-3 order-1 lg:order-2">
            <div className="space-y-2 md:space-y-2.5 lg:space-y-3.5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-card-medication w-full transition-all duration-300 ease-in-out hover:border-2 hover:border-[#265C2D] cursor-pointer"
                  style={{
                    background: '#F8F8F8',
                    height: 'clamp(160px, 23vw, 185px)',
                    borderRadius: 'clamp(26px, 4.5vw, 44px)',
                    padding: 'clamp(18px, 3.5vw, 30px)',
                  }}
                >
                  <style>{`
                    @media (max-width: 1023px) {
                      .feature-card-medication {
                        width: 100% !important;
                        height: 100px !important;
                        border-radius: 18px !important;
                        padding: 10px 14px !important;
                        opacity: 1;
                        display: flex !important;
                        flex-direction: column !important;
                        justify-content: center !important;
                      }
                    }
                  `}</style>
                  {/* Title */}
                  <h3
                    className="feature-title-medication font-semibold mb-4 lg:mb-6"
                    style={{
                      fontWeight: 600,
                      fontSize: 'clamp(16px, 2.8vw, 28px)',
                      lineHeight: 'clamp(22px, 3.5vw, 24px)',
                      color: '#000000',
                    }}
                  >
                    <style>{`
                      @media (max-width: 1023px) {
                        .feature-title-medication {
                          font-size: 12.5px !important;
                          line-height: 16px !important;
                          margin-bottom: 10px !important;
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
                        fontSize: 'clamp(14px, 2.2vw, 18px)',
                        lineHeight: 'clamp(18px, 2.8vw, 22px)',
                        letterSpacing: '0%',
                        textTransform: 'capitalize',
                        color: '#000000',
                      }}
                    >
                      <style>{`
                        @media (max-width: 1023px) {
                          .feature-description-medication {
                            font-size: 9px !important;
                            line-height: 12.5px !important;
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
                padding: 'clamp(10px, 1.8vw, 12px) clamp(22px, 2.8vw, 26px)',
                borderRadius: '9999px',
                fontSize: 'clamp(13px, 1.8vw, 15px)',
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
                  max-height: calc(100px * 3 + 8px * 2) !important;
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
                  box-shadow: 4px 0 9px rgba(0,0,0,0.05), 0 4px 9px rgba(0,0,0,0.05), 0 -4px 9px rgba(0,0,0,0.05);
                }
              }
            `}</style>
            <div
              className="image-container-medication flex items-center justify-center w-full max-w-[360px] lg:max-w-[730px] lg:items-end"
              style={{
                height: 'clamp(360px, 45vw, 670px)',
                borderRadius: 'clamp(36px, 9vw, 98px)',
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
                  width: '138px',
                  height: '290px',
                }}
              />
              <img
                src="/images/Mask group.png"
                alt="Medication app interface"
                className="hidden lg:block w-full h-auto object-contain"
                style={{
                  position: 'relative',
                  bottom: '0',
                  maxWidth: '620px',
                  maxHeight: '1300px',
                  borderTopLeftRadius: 'clamp(36px, 9vw, 98px)',
                  borderTopRightRadius: 'clamp(36px, 9vw, 98px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Centered Download Button for sm and md screens only */}
        <div className="medication-button-wrapper flex justify-center mt-7 lg:hidden">
          <style>{`
            @media (max-width: 1023px) {
              .medication-button-wrapper {
                margin-top: 20px !important;
              }
              .download-button-medication {
                width: 102px !important;
                height: 30px !important;
                padding: 0 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                font-family: 'DM Sans', sans-serif !important;
                font-weight: 800 !important;
                font-style: normal !important;
                font-size: 10px !important;
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
              padding: 'clamp(10px, 1.8vw, 12px) clamp(22px, 2.8vw, 26px)',
              borderRadius: '9999px',
              fontSize: 'clamp(13px, 1.8vw, 15px)',
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