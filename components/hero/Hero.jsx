'use client'

import Image from "next/image"

import CountdownTimer from '@/components/myTimer/Counter'

import { motion, Variants, animate } from "framer-motion";

import Stripes from '@/public/assets/icons/stripes.webp'
import Kidney from '@/public/assets/icons/kidney.webp'
import BigCow from '@/public/assets/images/big-cow.webp'
import CoolCow from '@/public/assets/images/cool-cow.webp'
import BigCoin from '@/public/assets/icons/big-coin.webp'
import Flipped from '@/public/assets/icons/flipped-coin.webp'
import Star from '@/public/assets/icons/star.webp'

const imageVariantsBigCowDesktop = {
  initial: {
    y: 700,
    opacity: 0
  },
  animate: {
    y: 490,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const imageVariantsBigCowMobTab = {
  initial: {
    y: 400,
    opacity: 0
  },
  animate: {
    y: 245,
    x: 15,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const imageVariantsCoolCowDesk = {
  initial: {
    y: 750,
    opacity: 0
  },
  animate: {
    y: 705,
    x: 0,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.7,
      duration: 1.2
    }
  }
};

const imageVariantsCoolCowMobTab = {
  initial: {
    y: 400,
    opacity: 0
  },
  animate: {
    y: 245,
    x: 0,
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.7
    }
  }
};

const imageVariantsKidney = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.4,
    }
  },
};

const imageVariantsBigCoin = {
  initial: {
    x: -200,
    opacity: 0,
    scale: 0.5,
    rotate: -70,
  },
  animate: {
    x: 0,
    y: -85,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.4,
    }
  },
};

const imageVariantsBigCoinMob = {
  initial: {
    x: -200,
    opacity: 0,
    scale: 0.5,
    rotate: -70,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.4,
    }
  },
};

const imageVariantsFlippedCoin = {
  initial: {
    x: 200,
    opacity: 0,
    scale: 0.5,
    rotate: 70,
  },
  animate: {
    x: 0,
    y: 515,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.4,
    }
  },
};

const imageVariantsFlippedCoinMob = {
  initial: {
    x: 200,
    opacity: 0,
    scale: 0.5,
    rotate: 70,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.4,
    }
  },
};

const starVariants = {
  shine: {
    opacity: [0.7, 1, 1.5, 1, 0.7],
    scale: [0.7, 1, 1.2, 1, 0.7],
    rotate: 360,
    transition: {
      duration: 7,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const starVariantsTwo = {
  shine: {
    opacity: [0.5, 1, 1.7, 1, 0.5],
    scale: [0.7, 1, 1.2, 1, 0.7],
    rotate: 360,
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const starVariantsThree = {
  shine: {
    opacity: [0.7, 1, 1.5, 1, 0.7],
    scale: [0.7, 1, 1.2, 1, 0.7],
    rotate: -360,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Hero = () => {

  return (
    <section className="hero relative rounded-[39px] md:rounded-[59px] bg-[#36343C] pt-[70px] px-0 pb-[180px] lg:pt-[190px] lg:pb-[170px] m-[12px] md:mx-0">
      {/* BG Images - Stripes */}
      <div className="bg-images-container absolute top-0 left-0 w-full h-full">
        <Image
          src={Stripes}
          alt=""
          quality={100}
          className="opacity-[0.1] z-0 absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="container max-w-[1150px] px-4 lg:px-0 mx-auto relative">
        {/* Cool Cow Image, Kidney, Big Cow  */}
        <div className="coolCow-container">
          <motion.div 
            className="hidden lg:block z-[2] relative"
            initial="initial"
            animate="animate"
            variants={imageVariantsCoolCowDesk}
          >
          <Image 
            src={CoolCow}
            alt=""
            className="absolute bottom-[-210px] lg:bottom-[-41%] left-[20px] lg:left-0 z-[2] w-[81px] lg:w-[221px]"
          />
          </motion.div>
          <motion.div 
            className="lg:hidden z-[2] relative"
            initial="initial"
            animate="animate"
            variants={imageVariantsCoolCowMobTab}
          >
          <Image 
            src={CoolCow}
            alt=""
            className="absolute bottom-[-210px] lg:bottom-[-41%] left-[20px] lg:left-0 z-[2] w-[81px] lg:w-[221px]"
          />
          </motion.div>
          <motion.div 
            initial="initial" 
            animate="animate"
            variants={imageVariantsKidney}
            className=""
          >
            <Image
              src={Kidney}
              alt=""
              quality={100}
              className="absolute object-contain top-[-110px] left-[60px] xl:top-[-110px] xl:left-[195px] z-0 hidden lg:block"
            />
          </motion.div>
          {/* Big Cow Animation Desktop */}
          <motion.div 
            className="hidden lg:block"
            initial="initial"
            animate="animate"
            // viewport={{ once: true, amount: 0.3 }}
            variants={imageVariantsBigCowDesktop}
          >
            <Image 
              src={BigCow}
              alt=""
              className="absolute  right-[0]  bottom-[-180px] left-auto lg:right-auto lg:bottom-[-170px] lg:left-[360px] w-[195px] lg:w-[569px]"
            />
          </motion.div>
          {/* Big Cow Animation Mob/Tablet */}
          <motion.div 
            className="lg:hidden"
            initial="initial"
            animate="animate"
            // viewport={{ once: true, amount: 0.1 }}
            variants={imageVariantsBigCowMobTab}
          >
            <Image 
              src={BigCow}
              alt=""
              className="absolute  right-[0]  bottom-[-180px] left-auto md:bottom-[-210px] lg:right-auto lg:bottom-[-170px] lg:left-[360px] w-[195px] lg:w-auto"
            />
          </motion.div>
        </div>
        {/* Stars Icons */}
        <div className="stars-container absolute w-[856px] max-w-[856px] h-[656px] max-h-[656px] top-[-110px] left-[195px]">
          <motion.div 
            className="star-conntainer absolute w-[25px] max-w-[25px] h-[25px] top-[125px] left-[100px] lg:left-[150px]"
            variants={starVariantsTwo}
            animate="shine"
          >
            <Image 
              src={Star}
              alt=""
              className=""
            />
          </motion.div>
          <motion.div 
            className="star-conntainer absolute w-[36px] lg:w-[42px] lg:h-[42px] top-[90px] lg:top-[80px] right-[97%] lg:right-[0]"
            variants={starVariants}
            animate="shine"
          >
            <Image 
              src={Star}
              alt=""
              className=""
            />
          </motion.div>
          <motion.div 
            className="star-conntainer absolute w-[25px] max-w-[25px] h-[25px] bottom-[95px] left-[45px]"
            variants={starVariantsThree}
            animate="shine"
          >
            <Image 
              src={Star}
              alt=""
              className=""
            />
          </motion.div>
        </div>
        <div className="flex flex-row flex-wrap justify-between z-50">
          <div className="basis-full lg:basis-5/12">
            <div className="title-container relative z-30">
              <h1 className="text-[#AD89B1] text-[48px] md:text-[64px]">MoonTourus</h1>
              <p className="text-[#E7DBED] md:text-[18px] pb-6">During the presale, you’ll have an excellent opportunity to secure your share of the MNTR token. Get in early and join the meme revolution! </p>
              <a className="btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-[#34313A] hover:text-[#ffffff] bg-[#E7DBED] hover:bg-[#AD89B1] transition-all pt-[18px] px-[54px] pb-[19px] lg:pt-[16px] lg:px-[54px] lg:pb-[18px] min-w-[184px]" href="#">Buy Now</a>
            </div>
          </div>
          <div className="basis-full relative lg:basis-5/12 md:mt-[45px]">
            {/* Coins Icons */}
            <motion.div 
              className="coins-container"
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="hidden lg:block"
                variants={imageVariantsBigCoin}
              >
                <Image 
                  src={BigCoin}
                  alt=""
                  className="absolute top-[10px] left-[-10px] lg:top-[-19%] lg:left-[-21%] w-[80px] lg:w-[210px] z-0"
                />
              </motion.div>
              <motion.div
                className="lg:hidden"
                variants={imageVariantsBigCoinMob}
              >
                <Image 
                  src={BigCoin}
                  alt=""
                  className="absolute top-[10px] left-[-10px] lg:top-[-19%] lg:left-[-21%] w-[80px] lg:w-[210px] z-0"
                />
              </motion.div>
              <motion.div
                className="hidden lg:block"
                variants={imageVariantsFlippedCoin}
              >
                <Image 
                  src={Flipped}
                  alt=""
                  className="absolute right-[0] bottom-[0] lg:right-[-13%] lg:bottom-[-16%] w-[62px] lg:w-[145px] z-0"
                />
              </motion.div>
              <motion.div
                className="lg:hidden"
                variants={imageVariantsFlippedCoinMob}
              >
                <Image 
                  src={Flipped}
                  alt=""
                  className="absolute right-[0] bottom-[0] lg:right-[-13%] lg:bottom-[-16%] w-[62px] lg:w-[145px] z-0"
                />
              </motion.div>
            </motion.div>
            <div className="presale-timer-container relative bg-[#E7DBED] shadow-normal rounded-[59px] px-[30px] py-[80px] text-center z-20 hidden lg:block">
              <h3 className="text-[#332010] text-[32px] md:text-[36px]">PRESALE</h3>
              <CountdownTimer />
              <a className="btn inline-block text-[16px] lg:text-[18px] rounded-[30px] text-white bg-[#332010] hover:bg-[#AD89B1] transition-all pt-[16px] px-[30px] pb-[18px] lg:px-[40px] min-w-[160px] lg:min-w-[184px]" href="#">How To Buy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero