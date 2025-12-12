'use client'

import { useState } from 'react';
import CommunityForm from './CommunityForm';

const CommunitySection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <CommunityForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <section className="py-6 sm:py-8 md:py-10 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] text-center">
            Join The Health
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] text-center mb-4 sm:mb-6 md:mb-8 lg:mb-14">
            Community
          </h2>

          <div className="relative flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            {/* left */}
            <div className='relative flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-5 w-full lg:w-1/2'>
              <p className='text-[12px] sm:text-[12px] md:text-lg lg:text-[22px] max-w-full lg:max-w-[450px] leading-[100%] sm:leading-[100%] md:leading-relaxed lg:leading-relaxed font-normal'>
                Connect with our health community. Get support form the healers and our App users,  share experiences, and receive valuable health tips.
              </p>

              <div className='relative w-full'>
                <div className='w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[420px] ml-auto'>
                  <img src="/images/Community1.png" alt="Community 1" className="w-full" />
                </div>
              </div>
            </div>

            {/* right */}
            <div className='flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-9 w-full lg:w-1/2 justify-start items-center'>

              <div className='w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[410px] flex justify-center'>
                <img src="/images/Community2.png" alt="Community 2" className="w-full" />
              </div>

              <div className='flex justify-center gap-4'>
                <button
  onClick={() => setIsFormOpen(true)}
  className="join-in-button font-semibold text-center w-[106px] sm:w-[106px] md:w-[180px] lg:w-[200px] h-[36px] sm:h-[36px] md:h-[60px] lg:h-[68px] text-xs sm:text-xs md:text-xl lg:text-[21px] transition-all duration-300"
  style={{
    background: '#000000',
    color: '#D8F7A9',
    borderRadius: '60px',
    opacity: 1,
  }}
>
  Join in
  <style jsx>{`
    .join-in-button:hover {
      background: #CBF696 !important;
      color: #000000 !important;
    }
  `}</style>
</button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunitySection;