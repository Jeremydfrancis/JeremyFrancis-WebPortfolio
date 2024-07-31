'use client';

import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Head from 'next/head';

const services = [
  {
    title: 'Custom Website Design and Development',
    
  },
  {
    title: 'Responsive Web Design',
    
  },
  {
    title: 'E-Commerce Solutions',
    
  },
  {
    title: 'Content Management Systems (CMS)',
    
  },
  {
    title: 'Performance Optimization',
    
  },
  {
    title: 'Website Maintenance and Updates',
   
  }
];

const WebDev = () => {
  return (
    <>
      <Head>
        <title>Web Development Services | Custom Websites, E-Commerce, CMS</title>
        <meta
          name="description"
          content="Professional web development services including custom website design, responsive web design, e-commerce solutions, CMS implementation, performance optimization, and website maintenance."
        />
        <meta
          name="keywords"
          content="web development, custom websites, e-commerce, CMS, responsive design, performance optimization, website maintenance"
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
            {/* TEXT */}
            <div className='text-center xl:text-left order-1 xl:order-none'>
              <span className='text-xl'>Web Development Services</span>
              <h1 className='h1 mb-6'>
                Transform Your <br />
                <span className='text-accent'>Digital Presence</span>
              </h1>
              <p className='max-w-[569px] mb-9 text-white/60'>
                Elevate your online footprint with expert web development services
                tailored to meet your unique needs. As a seasoned web developer, I
                specialize in creating stunning, high-performance websites that
                not only capture your brand's essence but also deliver measurable
                results. With a comprehensive skill set spanning multiple
                programming languages and a relentless pursuit of innovation, I
                push the boundaries of what's possible in web development to help
                your business stand out and thrive in the digital world.
              </p>
            </div>
            {/* Services */}
            <div className='order-2 xl:order-none mb-8 xl:mb-0 text-left'>
              <ul className='max-w-[569px] h-fit grid grid-cols-1 gap-8 text-lg'>
                {services.map((service, index) => (
                  <li key={index} className='flex flex-row gap-4 items-center'>
                    <FaCheck className='text-accent text-2xl' />
                    <div>
                      <h2>{service.title}</h2>
                      
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default WebDev;
