'use client'

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      image: "/images/Cart.png",
      title: "E-Commerce",
      description: "Services For Medication Provision",
      href: "/services/ecommerce",
    },
    {
      id: 2,
      image: "/images/Herb.png",
      title: "Herb Exploration",
      description: "Traditional Herb Library",
      href: "/services/herbs",
    },
    {
      id: 3,
      image: "/images/consulting.png",
      title: "Online Consulting",
      description: "Booking Online Healers Services",
      href: "/services/consulting",
    },
    {
      id: 4,
      image: "/images/AI.png",
      title: "AI Diagnose",
      description: "AI Assistant to Diagnose Symptoms",
      href: "/services/ai-diagnose",
    },
  ];

  const ServiceCard = ({ image, title, description, href }) => (
    <div
      className="relative group rounded-[20px] sm:rounded-[30px] bg-white flex flex-col justify-center items-center text-center transition-all duration-300 hover:shadow-lg min-h-[200px] sm:min-h-[340px] p-4 sm:p-10"
      style={{ border: '1px solid #265C2D' }}
    >
      <div
        className="w-10 h-10 sm:w-20 sm:h-20 border border-[#75B67C] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6"
        style={{
          background: 'linear-gradient(115.44deg, rgba(203, 246, 150, 0.8) 15.54%, rgba(84, 225, 99, 0.64) 80.46%)'
        }}
      >
        <img src={image} alt={title} className="w-5 h-5 sm:w-10 sm:h-10 object-contain" />
      </div>

      <h3
        className="font-bold text-base sm:text-[32px] capitalize whitespace-nowrap"
        style={{ fontFamily: 'DM Sans' }}
      >
        {title}
      </h3>

      <p
        className="text-gray-600 text-xs sm:text-lg mt-1 sm:mt-2 sm:max-w-xs px-2 sm:px-0 capitalize"
        style={{
          fontFamily: 'DM Sans',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'center',
          verticalAlign: 'middle'
        }}
      >
        {description}
      </p>

      {/* Hover Layer */}
      <div
        className="absolute inset-0 rounded-[20px] sm:rounded-[30px] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[40px] p-4 sm:p-10"
        style={{
          boxShadow: '3px 2px 11.3px 0px #265C2D80',
          border: '1px solid',
          borderImageSource:
            'linear-gradient(114.57deg, #CBF696 13.18%, #5FA767 83.54%)',
          background:
            'linear-gradient(115.44deg, rgba(203, 246, 150, 0.8) 15.54%, rgba(84, 225, 99, 0.64) 80.46%)',
        }}
      >
        <div className="w-10 h-10 sm:w-20 sm:h-20 bg-white border border-[#75B67C] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6">
          <img src={image} alt={title} className="w-5 h-5 sm:w-10 sm:h-10 object-contain" />
        </div>

        <h3
          className="font-bold text-base sm:text-[32px] capitalize whitespace-nowrap"
          style={{ fontFamily: 'DM Sans' }}
        >
          {title}
        </h3>

        <p
          className="text-gray-600 text-xs sm:text-lg mt-1 sm:mt-2 sm:max-w-xs px-2 sm:px-0 capitalize"
          style={{
            fontFamily: 'DM Sans',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '100%',
            letterSpacing: '0%',
            textAlign: 'center',
            verticalAlign: 'middle'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <p
          className="font-weight-[400] text-center mb-6 sm:mb-16 text-2xl sm:text-5xl md:text-[70px]  leading-tight"
          style={{ fontFamily: 'DM Sans' }}
        >
          Main Services
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-10 max-w-6xl mx-auto">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;