'use client'

import Image from 'next/image'
import AboutUsImg from '@/public/assets/images/aboutUsSection.webp'

const AboutUsSection = () => {
  return (
    <section id='aboutUsSection' className="aboutUsSection relative xl:pb-[65px] m-[12px] md:mx-0">
      <div className="container max-w-[1150px] lg:px-0 mx-auto relative">
        <div className="flex flex-row flex-wrap items-center-justify-center">
          <div className="basis-full xl:basis-1/2 xl:pr-[20px] xl:mt-[70px]">
            <h2 className='text-[#36343C] text-[32px] md:text-[48px] mb-4'>About MoonTaurus</h2>
            <p className='mb-4 text-[#34313A]/80'>Long before humans gazed at the stars with telescopes, when the cosmos was a vast mystery, the legend of MoonTaurus began. According to ancient astrologers, during a cosmic event of unparalleled magnitude, a brilliant shard was torn from the moon. This wasn't an ordinary piece of rock, but one imbued with the moon’s deepest energies and the shimmering light of nearby celestial bodies.</p>
            <p className='mb-4 text-[#34313A]/80'>As this luminous fragment journeyed through the cosmos, it encountered various energies and cosmic mysteries. Over eons, these forces coalesced around the shard, forging it into a majestic white bull, glowing with a soft silver light. This creature was named MoonTaurus, derived from its lunar origins and its strong, bull-like form.</p>
            <p className='text-[#34313A]/80'>MoonTaurus roamed the celestial fields across the universe, where its paths became known as lines of fortune. Wherever MoonTaurus went, it left behind a trail of stardust that turned into precious metals and stones, seeding planets with the raw materials for life and prosperity. It was said that seeing MoonTaurus in the night sky was an omen of great fortune and abundance to come.</p>

            <ul className='btn-container mt-10 flex flex-row flex-nowrap items-center justify-center md:justify-start'>
              <li className='mr-4'>
                <a className='btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#E7DBED] bg-[#36343C] hover:bg-[#AD89B1] transition-all pt-[18px] px-[30px] pb-[19px] lg:pt-[16px] lg:px-[46px] lg:pb-[18px] min-w-[160px] lg:min-w-[193px]' href="#">How To Buy</a>
              </li>
              <li>
                <a className='btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#36343C] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all pt-[18px] px-[50px] pb-[19px] lg:pt-[16px] lg:px-[62px] lg:pb-[18px] min-w-[160px] lg:min-w-[193px]' href="#">Staking</a>
              </li>
            </ul>
          </div>
          <div className="basis-full xl:basis-1/2 mt-12 xl:mt-0">
            <div className='img-container flex items-center justify-center relative right-[15px] xl:absolute xl:top-0 xl:right-[-133px]'>
              <Image 
                src={AboutUsImg}
                alt=''
                className=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection