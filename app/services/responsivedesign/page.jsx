'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

const RespDes = () => {
  return (
    <>
      <Head>
        <title>Responsive Design Services | Mobile-Friendly Web Development</title>
        <meta
          name="description"
          content="Enhance your online presence with responsive design services that ensure your website looks and works great on any device. Boost engagement and deliver real results with a mobile-friendly web design."
        />
        <meta
          name="keywords"
          content="responsive design, mobile-friendly, web development, flexible websites, high-performance websites, user experience, web developer"
        />
      </Head>
      <section className='h-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='container mx-auto h-full'
        >
          <div className='flex flex-col xl:flex-row items-center justify-evenly gap-8 xl:pt-8 xl:pb-24'>
            {/* Text Content */}
            <article className='text-center xl:text-left order-1 xl:order-none'>
              <h1 className='text-xl mb-2'>Responsive Design</h1>
              <h2 className='mb-6 h1'>
                Revolutionize <br />
                <span className='text-accent'>Your Online Identity</span>
              </h2>
              <p className='max-w-[569px] mb-9 text-white/60 leading-relaxed'>
                Take your online presence to the next level with responsive design
                services that ensure your website looks and works great on any
                device. As a passionate web developer, I create flexible,
                high-performance websites that remain stunning and functional,
                whether viewed on a phone, tablet, or desktop. Using the latest
                techniques and insights into how people use the web, I ensure
                your site offers a top-notch experience, boosting engagement and
                delivering real results. Let’s make your digital footprint shine
                with responsive design that keeps your audience happy and
                connected, wherever they are.
              </p>
            </article>
            {/* Photo Section */}
            <div className='relative group flex justify-center items-center'>
              <div className='relative w-full h-full'>
                <Image
                  src='/responsivedesign.jpg'
                  alt='Responsive design'
                  width={569}
                  height={569}
                  sizes='(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  srcSet='/responsivedesign.jpg 569w, /responsivedesign@2x.jpg 1138w'
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default RespDes;

