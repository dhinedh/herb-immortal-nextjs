'use client'

import Link from 'next/link';

const VendorPartnership = () => {
    return (
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 bg-white font-family-['DM_Sans']">

            {/* SM/MD Layout */}
            <div className="lg:hidden">
                {/* 1. Main Heading */}
                <div className="text-center mb-8">
                    <h2
                        className="vendor-heading"
                        style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '25px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            textTransform: 'capitalize',
                        }}
                    >
                        Vendor Partnership Opportunities
                    </h2>
                </div>

                {/* 2. Three Images in a Row (without overlapping) */}
                <div className="flex flex-row justify-center items-end gap-4 mb-8">
                    <img
                        src="/images/PartnerPhone2.png"
                        alt="Vendor Form Screen"
                        className="object-cover"
                        style={{
                            width: '146px',
                            height: '300px',
                            borderRadius: '20px'
                        }}
                    />
                    <img
                        src="/images/PartnerPhone1.png"
                        alt="Vendor Onboarding Screen"
                        className="object-cover"
                        style={{
                            width: '177px',
                            height: '368px',
                            borderRadius: '20px'
                        }}
                    />
                    <img
                        src="/images/PartnerPhone3.png"
                        alt="Contact Form Screen"
                        className="object-cover"
                        style={{
                            width: '146px',
                            height: '301px',
                            borderRadius: '20px'
                        }}
                    />
                </div>

                {/* 3. Two Divs in a Row: Bullet Points + Phone4 with Button */}
                <div className="flex flex-row gap-4 mb-8">
                    {/* Left: Bullet Points */}
                    <div className="w-2/3 flex items-center">
                        <ul className="space-y-1 text-left w-full">
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0 w-1 h-1 bg-black rounded-full"></span>
                                <span
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontWeight: 500,
                                        fontStyle: 'normal',
                                        fontSize: '12px',
                                        lineHeight: '22px',
                                        letterSpacing: '0%',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Connect With Consumers
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0 w-1 h-1 bg-black rounded-full"></span>
                                <span
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontWeight: 500,
                                        fontStyle: 'normal',
                                        fontSize: '12px',
                                        lineHeight: '22px',
                                        letterSpacing: '0%',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Expert Guidance Available
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0 w-1 h-1 bg-black rounded-full"></span>
                                <span
                                    style={{
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontWeight: 500,
                                        fontStyle: 'normal',
                                        fontSize: '12px',
                                        lineHeight: '22px',
                                        letterSpacing: '0%',
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    Become Part Of A Revolutionary Natural Health Network
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Button only */}
                    <Link href="/vendor-form">
                        <button
                            className="hover:bg-[#CBF696] hover:text-black transition-all duration-300"
                            style={{
                                background: '#000000',
                                color: '#D8F7A9',
                                padding: '0',
                                borderRadius: '9999px',
                                width: '107px',
                                height: '35px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'DM Sans, sans-serif',
                                fontWeight: 800,
                                fontStyle: 'normal',
                                fontSize: '11px',
                                lineHeight: '100%',
                                letterSpacing: '0%',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                            }}
                        >
                            Partner with
                        </button>
                    </Link>
                </div>

                {/* 4. Partners in a Row */}
                <div className="text-center">
                    <p
                        className="mb-0"
                        style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '15px',
                            lineHeight: '45px',
                            letterSpacing: '0%',
                            textAlign: 'center',
                            textTransform: 'capitalize',
                        }}
                    >
                        Trusted By Our Customers & Partners
                    </p>
                    <div className="flex flex-row justify-center gap-4">
                        <div className="bg-white flex items-center justify-center overflow-hidden"
                            style={{
                                width: '111.83px',
                                height: '52.74px',
                                borderRadius: '12px',
                                opacity: 1,
                                boxShadow: '0px 4px 4px 0px #00000040'
                            }}>
                            <img
                                src="/images/Partner1.png"
                                alt="Canada Post"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-white flex items-center justify-center p-2"
                            style={{
                                width: '111.83px',
                                height: '52.74px',
                                borderRadius: '12px',
                                opacity: 1,
                                boxShadow: '0px 4px 4px 0px #00000040'
                            }}>
                            <img
                                src="/images/Partner2.png"
                                alt="Walmart"
                                className="object-contain max-h-full"
                            />
                        </div>
                        <div className="bg-white flex items-center justify-center p-2"
                            style={{
                                width: '111.83px',
                                height: '52.74px',
                                borderRadius: '12px',
                                opacity: 1,
                                boxShadow: '0px 4px 4px 0px #00000040'
                            }}>
                            <img
                                src="/images/Partner3.png"
                                alt="CHFA"
                                className="object-contain max-h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* LG Layout - Decreased Width */}
            <div className="hidden lg:block">
                {/* Heading */}
                <div className="text-center mb-16 sm:mb-24 md:mb-32 lg:mb-44 mt-4 sm:mt-6 md:mt-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mb-6 sm:mb-8 md:mb-10">
                        Vendor Partnership
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-[60px]">Opportunities</p>
                </div>

                {/* Main Content Container - Decreased max-width from 5xl to 4xl */}
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center mb-12 sm:mb-16 md:mb-20">

                        {/* Left Side - Phone Images */}
                        <div className="w-full lg:w-[58%] relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center justify-center mb-12 lg:mb-0">
                            {/* Phone 1 - Back Left */}
                            <div className="absolute left-[-50px] sm:left-[-60px] md:left-[-70px] lg:left-[-90px] top-[-60px] sm:top-[-90px] md:top-[-130px]">
                                <img
                                    src="/images/PartnerPhone1.png"
                                    alt="Vendor Onboarding Screen"
                                    className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[360px] h-auto object-cover"
                                    style={{ borderRadius: '38px' }}
                                />
                            </div>

                            {/* Phone 2 - Center */}
                            <div className="relative z-10 bottom-[-80px] sm:bottom-[-100px] md:bottom-[-120px] lg:bottom-[-140px]">
                                <img
                                    src="/images/PartnerPhone2.png"
                                    alt="Vendor Form Screen"
                                    className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto object-cover translate-x-[10px] sm:translate-x-[15px] md:translate-x-[20px]"
                                    style={{ borderRadius: '38px' }}
                                />
                            </div>

                            {/* Phone 3 - Back Right - Moved a little more right */}
                            <div className="absolute right-[-100px] sm:right-[-110px] md:right-[-120px] lg:right-[-50px] top-[-80px] sm:top-[-110px] md:top-[-150px]">
                                <img
                                    src="/images/PartnerPhone3.png"
                                    alt="Contact Form Screen"
                                    className="w-[160px] sm:w-[220px] md:w-[240px] lg:w-[280px] h-auto object-cover"
                                    style={{ borderRadius: '38px' }}
                                />
                            </div>
                        </div>

                        {/* Right Side - Benefits & Phone 4 - Increased size and moved up */}
                        <div className="w-full lg:w-[42%] flex flex-col items-center lg:items-start px-4 sm:px-6 lg:px-0 lg:pl-16 lg:-mt-8">
                            {/* Benefits List - Increased size, moved up */}
                            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-left font-weight-500 max-w-md lg:max-w-none lg:ml-8">
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                                    <span className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal whitespace-nowrap">
                                        Connect With Consumers
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                                    <span className="text-base sm:text-lg md:text-xl lg:text-[20px] font-normal whitespace-nowrap">
                                        Expert Guidance Available
                                    </span>
                                </li>
                                <li className="flex items-start gap-2.5 sm:gap-3">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                                    <span className="text-base sm:text-lg md:text-xl lg:text-[18px] font-normal leading-snug">
                                        Become Part Of A Revolutionary<br />Natural Health Network
                                    </span>
                                </li>
                            </ul>

                            {/* Phone 4 - Customer Order */}
                            <div className="mt-6 sm:mt-8 lg:ml-8">
                                <img
                                    src="/images/PartnerPhone4.png"
                                    alt="Customer Order Screen"
                                    className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-auto object-cover"
                                    style={{ borderRadius: '38px' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Join In Button - Decreased margin bottom */}
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <Link href="/vendor-form">
                            <button className="bg-black px-8 sm:px-12 md:px-14 py-3 sm:py-4 md:py-4 rounded-full text-base sm:text-lg md:text-xl lg:text-[22px] font-semibold hover:bg-[#CBF696] hover:text-black transition-all duration-300 shadow-lg text-[#CBF696]">
                                Partner with
                            </button>
                        </Link>
                    </div>

                    {/* Partners Section - Reduced height, increased width */}
                    <div className="text-center flex gap-3 sm:gap-4 md:gap-5 flex-col items-center pt-2 sm:pt-3 md:pt-4">

                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] text-gray-800 font-normal mb-4 sm:mb-5 md:mb-6 pt-2 sm:pt-3 md:pt-4 px-4">
                            Trusted By Our Customers & Partners
                        </p>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20 w-full px-4">
                            <div className="bg-white w-full sm:w-[300px] md:w-[360px] lg:w-[420px] h-[100px] sm:h-[115px] md:h-[125px] lg:h-[135px] p-4 sm:p-5 md:p-6 lg:p-7 rounded-[24px] sm:rounded-[30px] md:rounded-[32px] flex items-center justify-center" style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <img
                                    src="/images/Partner1.png"
                                    alt="Canada Post"
                                    className="w-[420px] h-full object-cover rounded-[24px] sm:rounded-[30px] md:rounded-[32px]"
                                    style={{ clipPath: 'inset(0px 5px 0px 5px)' }}
                                />
                            </div>


                            <div className="bg-white w-full sm:w-[300px] md:w-[360px] lg:w-[420px] h-[100px] sm:h-[115px] md:h-[125px] lg:h-[135px] p-4 sm:p-5 md:p-6 lg:p-7 rounded-[24px] sm:rounded-[30px] md:rounded-[32px] flex items-center justify-center" style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <img
                                    src="/images/Partner2.png"
                                    alt="Walmart"
                                    className="object-contain max-h-full"
                                    style={{ filter: 'drop-shadow(0px 0px 0px transparent)' }}
                                />
                            </div>
                            <div className="bg-white w-full sm:w-[300px] md:w-[360px] lg:w-[420px] h-[100px] sm:h-[115px] md:h-[125px] lg:h-[135px] p-4 sm:p-5 md:p-6 lg:p-7 rounded-[24px] sm:rounded-[30px] md:rounded-[32px] flex items-center justify-center" style={{ boxShadow: '0px 4px 4px 0px #00000040' }}>
                                <img
                                    src="/images/Partner3.png"
                                    alt="CHFA"
                                    className="object-contain max-h-full"
                                    style={{ filter: 'drop-shadow(0px 0px 0px transparent)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VendorPartnership;