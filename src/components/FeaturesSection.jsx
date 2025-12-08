'use client'

const FeatureCard = ({ image, title, description, imagePosition = 'center 20%' }) => {
  return (
    <div
      className="flex flex-col items-center bg-white rounded-[40px] overflow-hidden group feature-card-hover transition-shadow duration-300"
      style={{
        border: '1px solid #265C2D',
        width: '380px',
        height: '680px',
        opacity: 1
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: '380px',
          height: '450px',
          opacity: 1,
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px'
        }}
      >
        <div
          className="absolute inset-0 z-10 transition-opacity duration-300 group-hover:opacity-0"
          style={{
            background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%)'
          }}
        ></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover relative z-0"
          style={{ objectPosition: imagePosition }}
        />
      </div>

      <div className="p-5 flex flex-col">
        <h3
          className="mb-2"
          style={{
            color: '#265C2D',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: '32px',
            letterSpacing: '0%',
            textTransform: 'capitalize',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap'
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: '#000000',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 300,
            fontSize: '14px',
            lineHeight: '22px',
            letterSpacing: '0%',
            textTransform: 'capitalize'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      image: "/images/SuperApp.png",
      title: "Super App",
      description: "Welcome to the Super App for Wellness connecting you with holistic healers and herbal vendors worldwide to create personalized wellness journeys tailored to your unique needs.",
      imagePosition: 'center 20%'
    },
    {
      image: "/images/ConnectHealer.png",
      title: "Connect Healer",
      description: "Join our community of holistic healers and herbal vendors to enhance natural wellness offerings.",
      imagePosition: 'center 5%'
    },
    {
      image: "/images/Wellness.png",
      title: "Personalized Wellness",
      description: "Access personalized wellness solutions and expert advice tailored to your unique needs.",
      imagePosition: 'center 8%'
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1600px' }}>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-2 md:mb-4 heading-line-1">
            Wellness made <span className="text-green-600">Simple<span className="and-desktop"> and</span></span>
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal heading-line-2">
             <span className="text-green-600"><span className="and-mobile">And </span>Affordable</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 md:gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              imagePosition={feature.imagePosition}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .feature-card-hover:hover {
          box-shadow: 0px 6px 6px 0px #265C2D80;
        }

        .and-mobile {
          display: none;
        }

        @media (max-width: 1023px) {
          .heading-line-1,
          .heading-line-2 {
            font-family: 'DM Sans', sans-serif !important;
            font-weight: 400 !important;
            font-size: 25px !important;
            line-height: 35px !important;
            letter-spacing: 0.02em !important;
            text-transform: capitalize !important;
            margin-bottom: 0 !important;
          }

          .and-desktop {
            display: none;
          }
          .and-mobile {
            display: inline;
          }

          .flex.flex-col.lg\\:flex-row {
            flex-direction: row !important;
            overflow-x: auto;
            justify-content: flex-start;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .flex.flex-col.lg\\:flex-row::-webkit-scrollbar {
            display: none;
          }

          .feature-card-hover {
            border: 0.6px solid #265C2D !important;
            width: 274.91px !important;
            height: 492.77px !important;
            flex-shrink: 0 !important;
          }

          .feature-card-hover > div:first-of-type {
            width: 274.91px !important;
            height: 327.85px !important;
            border-top-left-radius: 40px !important;
            border-top-right-radius: 40px !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            display: block !important;
            line-height: 0 !important;
            overflow: hidden !important;
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
            border: none !important;
          }
          .feature-card-hover > div:first-of-type > div {
            position: absolute !important;
            inset: 0 !important;
            margin: 0 !important;
            border: none !important;
          }
          .feature-card-hover > div:first-of-type img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            display: block !important;
            vertical-align: top !important;
            margin-bottom: 0 !important;
            border: none !important;
          }

          .feature-card-hover > div:last-of-type {
            padding: 1.5rem 0.75rem 0.75rem 0.75rem !important;
            margin-top: -3px !important;
            background-color: white !important;
            position: relative !important;
            z-index: 1 !important;
          }

          .feature-card-hover h3 {
            font-family: 'DM Sans', sans-serif !important;
            font-weight: 800 !important;
            font-size: 20px !important;
            line-height: 1.2 !important;
            letter-spacing: 0% !important;
            text-transform: capitalize !important;
            margin-bottom: 1rem !important;
            padding: 0 1rem !important;
            width: auto !important;
            height: auto !important;
          }

          .feature-card-hover p {
            font-family: 'DM Sans', sans-serif !important;
            font-weight: 300 !important;
            font-size: 10px !important;
            line-height: 100% !important;
            letter-spacing: 0% !important;
            text-transform: capitalize !important;
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;