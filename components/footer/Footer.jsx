'use client'

import React, { useEffect, useState, useRef } from 'react';

import Image from 'next/image'
import Link from 'next/link'

import { motion, useAnimation, useInView } from 'framer-motion';

import LogoFooter from '@/public/assets/icons/MainLogo.webp'
import CoolCowFooter from '@/public/assets/images/Kennylais_ILLUST_FOOTER.webp'
import PhoneIcon from '@/public/assets/icons/phone-ring.png'
import Facebook from '@/public/assets/icons/facebook-fill.webp'
import Twitter from '@/public/assets/icons/twitter.webp'
import Youtube from '@/public/assets/icons/youtube.webp'
import Linkedin from '@/public/assets/icons/linkedin-alt.webp'

const socials = [
  { link: '#facebook', icon: Facebook, alt: 'Facebook' },
  { link: '#twitter', icon: Twitter, alt: 'Twitter' },
  { link: '#youtube', icon: Youtube, alt: 'Youtube' },
  { link: '#linkedin', icon: Linkedin, alt: 'Linkedin' },
]

const Footer = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, // Trigger animation when half of the element is visible
  });

  useEffect(() => {
    console.log("inView:", inView); // Debugging line to check if inView is triggered

    if (inView) {
      // Stagger animation
      controls.start({
        opacity: 1,
        scale: [1, 1.2, 1], // Scale animation for stagger effect
        rotate: [-5, 5, -5], // Rotate animation for stagger effect
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
        },
      }).then(() => {
        // Fly off animation
        controls.start({
          x: '-50vw',
          y: '-50vh',
          opacity: 0,
          transition: {
            duration: 1,
            ease: 'easeInOut',
          },
        }).then(() => {
          // Delayed reappear animation
          setTimeout(() => {
            controls.start({
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotate: 0,
              transition: {
                duration: 1,
                ease: 'easeInOut',
              },
            });
          }, 2000); // Adjust delay time as needed
        });
      });
    }
  }, [inView, controls]);

  return (
    <motion.section 
      id='footer' 
      className='footer relative mt-24 rounded-t-[39px] md:rounded-[59px] bg-[#232127] pt-[135px] pb-4 md:pt-[70px]'
      ref={ref}
    >
      <div className="container max-w-[1150px] px-4 lg:px-0 mx-auto relative">
        <div className='footer_top'>
          <div className="flex flex-row flex-wrap items-start jusify-between">
            <div className="basis-full md:basis-3/12 mb-10 md:mb-0">
              {/* Logo */}
              <Link href="/">
                <Image src={LogoFooter} alt="MoonTourus" width={143} height={33} />
              </Link>
              <p className='text-[#E7DBED] my-6'>Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.</p>
              <a className='phone-num text-[#E7DBED] hover:text-[#ffffff]' href="tel:+012 (345) 678 99">
                <div className='flex flex-row flex-no-wrap items-center'>
                  <Image 
                    src={PhoneIcon}
                    alt=''
                    className='mr-4'
                  />
                  +012 (345) 678 99
                </div>
              </a>
            </div>
            <div className="basis-full md:basis-3/12 h-0 md:h-full">
              <div className='mt-[-460px] ml-[18%] md:mt-[-134px] md:ml-auto'>
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  animate={controls}
                  exit={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image 
                    src={CoolCowFooter}
                    alt=''
                    className=''
                  />
                </motion.div>
              </div>
            </div>
            <div className="basis-full md:basis-6/12">
              <div className="flex flex-row flex-wrap items-start justify-between">
                <div className="basis-1/2 md:basis-4/12 mb-6 md:mb-0">
                  <p className='text-[#E7DBED] font-medium mb-8'>Resources</p>
                  <ul>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2 md:basis-4/12 mb-6 md:mb-0">
                  <p className='text-[#E7DBED] font-medium mb-8'>Company</p>
                  <ul>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Contact & Support</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Success History</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Setting & Privacy</a>
                    </li>
                  </ul>
                </div>
                <div className="basis-full md:basis-4/12">
                  <p className='text-[#E7DBED] font-medium mb-8'>Quick Links</p>
                  <ul>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Premium Support</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Our Services</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Know Our Team</a>
                    </li>
                    <li className='mb-4'>
                      <a className='text-[#E7DBED]/50 hover:text-[#E7DBED] transition-all' href="#">Lorem Ipsum</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom bg-[#34313A] rounded-[39px] md:rounded-[59px] py-4 md:py-7 mt-12 md:mt-10 mx-4'>
        <div className="container max-w-[1150px] px-4 lg:px-0 mx-auto relative">
          <div className="flex flex-row flex-wrap items-center justify-between">
            <div className="basis-full md:basis-1/2 flex items-center justify-between md:justify-normal">
              <p className='text-[#E7DBED] font-medium mr-2 md:mr-6'>Follow Us On</p>
              <ul className='flex flex-row items-center justify-between'>
                {socials.map((social, index) => (
                  <li 
                    key={index}
                    className='bg-[#E7DBED]/[0.11] hover:bg-[#E7DBED]/[0.3] rounded-full w-[32px] h-[32px] flex items-center justify-center mr-2 md:mr-4'
                  >
                    <a href={social.link}>
                      <Image 
                        src={social.icon}
                        alt={social.alt}
                        className='relative z-50 hover:scale-125 transition-all'
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-full md:basis-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
              <p className='text-[#E7DBED]/[.39]'>© 2024 Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Footer