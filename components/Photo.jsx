'use client';
import { motion, px } from 'framer-motion';
import Image from 'next/image';

function Photo() {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className='w-[258px] h-[258px] xl:w-[500px] xl:h-[400px] mix-blend-overlay absolute top-5 left-6 xl:top-7 xl:left-0 z-10'
        >
          <Image
            src='/JeremyHeadshot.png'
            priority
            quality={100}
            fill
            sizes='(max-width: 1279px) 298px, 498px'
            alt='photo of jeremy'
            className='object-contain rounded-full'
          />
        </motion.div>

        {/* CIRCLE */}
        <motion.svg
          className='w-[300px] xl:w-[506px] h-[300px] xl:h-[500px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#00ff99'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            inital={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
