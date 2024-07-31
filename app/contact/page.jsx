'use client';

import Form from '@/components/Form';
import { FaPhoneAlt, FaEnvelope, FaMapMarker } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Head from 'next/head';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 304 932 1921',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'jeremydfrancis0@gmail.com',
  },
  {
    icon: <FaMapMarker />,
    title: 'Location',
    description: 'Hurricane, WV',
  },
];

function Contact() {
  return (
    <>
      <Head>
        <title>Contact Jeremy Francis - Frontend Developer</title>
        <meta
          name="description"
          content="Get in touch with Jeremy Francis, a skilled frontend developer specializing in HTML, CSS, JavaScript, React, and more. Contact via phone, email, or visit the location in Hurricane, WV."
        />
        <meta
          name="keywords"
          content="Jeremy Francis, contact, frontend developer, web development, HTML, CSS, JavaScript, React, Hurricane WV"
        />
      </Head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className='py-6'
      >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-[30px]'>
            {/* Contact Form */}
            <div className='xl:h-[54%] order-2 xl:order-none '>
              <Form />
            </div>
            <div className='flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
              <ul className='flex flex-col gap-10 '>
                {info.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center gap-6'>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1 '>
                        <p className='text-white/60 '>{item.title}</p>
                        <h2 className='text-xl'>{item.description}</h2>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;
