'use client'

import React, { useState } from 'react';

import Image from 'next/image'
import TokenomicsImg from '@/public/assets/images/tokenomics-img.webp'
import TokenomicsImgMobile from '@/public/assets/images/tokenomics-img-mobile.webp'

const TokenomicsSection = () => {
  const [text, setText] = useState('0xa7F4195F10F1a62B102bD683eAB131');

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div id='tokenomicsSection' className='tokenomicsSection relative xl:pb-[65px] m-[12px] md:mx-0'>
      <div className="container max-w-[1150px] lg:px-0 mx-auto relative">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <div className="basis-full xl:basis-1/2 order-last mt-[30px] xl:mt-0 xl:order-first">
            <div className='img-container flex items-center justify-center relative xl:absolute xl:top-0 xl:left-[-133px]'>
              <Image 
                src={TokenomicsImg}
                alt=''
                className='hidden xl:block'
              />
              <Image 
                src={TokenomicsImgMobile}
                alt=''
                className='xl:hidden'
              />
            </div>
          </div>
          <div className="basis-full xl:basis-1/2 xl:mt-[50px] xl:pl-[65px]">
            <h2 className='text-[#36343C] text-[32px] md:text-[48px] mb-4'>Tokenomics</h2>
            <p className='text-[#34313A]/80'>Join the MoonTaurus army today and help us reshape the financial world. Remember, we’re here to prove that greed can be good. Unleash the memes, power the revolution, and let the financial world tremble at our unstoppable meme force. Together, we'll conquer the financial world, one meme at a time. Let the movement begin!</p>

            <div className='totalSupply-container text-center rounded-[39px] md:rounded-[59px] bg-[#34313A] pt-[30px] px-[10px] pb-[32px] lg:pt-[20px] lg:px-[30px] lg:pb-[40px] mt-6'>
              <p className='text-[13px] text-[#ffffff]/80 mb-0'>Total supply of the token</p>
              <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase mb-8 lg:mb-6'>3,000,000,000 MNTR</p>

              <ul className='flex flex-row flex-nowrap items-center justify-between'>
                <li className='grid text-center'>
                  <p className='text-[13px] text-[#ffffff]/80 mb-0'>Blockchain</p>
                  <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase '>ERC20</p>
                </li>
                <li className='grid text-center'>
                  <p className='text-[13px] text-[#ffffff]/80 mb-0'>Token Symbol</p>
                  <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase '>$MBAG</p>
                </li>
                <li className='grid text-center'>
                  <p className='text-[13px] text-[#ffffff]/80 mb-0'>Token Decimals</p>
                  <p className='text-[24px] lg:text-[32px] text-[#ffffff] font-bold uppercase '>18</p>
                </li>
              </ul>

              <div className='tokenomincs_code-container relative mt-8 lg:mt-6'>
                <input
                  type="text"
                  value={text}
                  readOnly
                  className='text-[16px] text-[#ffffff] font-bold bg-[#74829A] rounded-[59px] py-[18px] pr-[120px] pl-[16px] w-full'
                />
                <button 
                  onClick={handleCopy} 
                  className='btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#36343C] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all pt-[12px] px-[20px] pb-[13px] lg:pt-[10px] lg:px-[20px] lg:pb-[12px] min-w-[75px] lg:min-w-[110px] absolute top-[6px] right-[6px]'
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsSection