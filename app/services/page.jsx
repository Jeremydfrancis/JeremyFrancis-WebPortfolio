'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: 1,
    title: 'Web Development',
    description: 'Building responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js.',
    href: '/services/webdevelopment',
  },
  {
    num: 2,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on user experience. Using tools like Figma to bring designs to life.',
    href: '/services/uiuxdesign',
  },
  {
    num: 3,
    title: 'Responsive Design',
    description: 'Ensuring your website looks great and functions well on all devices, from desktops to mobile phones, with responsive design techniques.',
    href: '/services/responsivedesign',
  },
  {
    num: 4,
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines through effective SEO strategies, driving more organic traffic to your site.',
    href: '/services/seooptimization',
  },
];

function Services() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex flex-1 flex-col justify-center gap-6 group'
              >
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold group-hover:text-accent transition-all duration-500 '>
                    {service.num}.
                  </div>
                  <Link
                    aria-label='Learn more about my services'
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 '
                  >
                    <BsArrowDownRight className='text-3xl text-primary' />
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 '>
                  {service.title}
                </h2>
                <p className='text-white/60 '>{service.description}</p>
                <div className='border-b border-white/20 w-full '></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;