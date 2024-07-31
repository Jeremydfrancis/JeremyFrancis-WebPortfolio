'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// Dynamically import components
const TooltipProvider = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipProvider), { ssr: false });
const Tooltip = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.Tooltip), { ssr: false });
const TooltipTrigger = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipTrigger), { ssr: false });
const TooltipContent = dynamic(() => import('@/components/ui/tooltip').then(mod => mod.TooltipContent), { ssr: false });
const SliderBtn = dynamic(() => import('@/components/SliderBtn'), { ssr: false });

const projects = [
  {
    num: '1',
    category: 'Frontend',
    title: 'River Run Custom Interiors',
    description: 'This website is designed to showcase the professional services of a business specializing in interior and exterior painting as well as flooring. It serves as a marketing tool to attract new clients and provides detailed information about the services offered, with an easy-to-navigate interface.',
    stack: ['Figma', 'HTML5', 'Tailwind CSS', 'Javascript', 'React JS'],
    image: '/rrci.png',
    live: '',
    github: 'https://github.com/Jeremydfrancis/RiverRun-Custom-Interiors',
  },
  {
    num: '2',
    category: 'Fullstack',
    title: 'Basic Elements Therapeutic Massage',
    description: 'This web application serves as a dynamic portal designed to enhance the client base and engagement for an orthopedic massage therapy business. It provides clients with a user-friendly platform to access personalized exercises, set wellness goals, and track their progress. Additionally, the portal integrates marketing tools and client management features to streamline operations and enhance user experience.',
    stack: ['HTML5', 'Tailwind CSS', 'Javascript', 'React JS', 'Node.js with Express.js', 'MongoDB'],
    image: '/basic-elements.png',
    live: '',
    github: 'https://github.com/Jeremydfrancis/Dani-Website-Base',
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <>
      <Head>
        <title>Jeremy Francis - Web Development Projects</title>
        <meta
          name="description"
          content="Explore the portfolio of Jeremy Francis, showcasing web development projects including River Run Custom Interiors and Basic Elements Therapeutic Massage. See how these projects demonstrate skills in frontend and fullstack development."
        />
        <meta
          name="keywords"
          content="Jeremy Francis, web development, portfolio, frontend development, fullstack development, River Run Custom Interiors, Basic Elements Therapeutic Massage, HTML, CSS, JavaScript, React, Node.js, Express.js"
        />
      </Head>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
      >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
            <div
              className='w-full xl:w-[50%] xl:h-[460px] flex flex-col
            xl:justify-between order-2 xl:order-none'
            >
              <div className=' flex flex-col gap-[30px] h-[50%]'>
                {/* OUTLINE NUMBER */}
                <div className='text-8xl leading-none font-extrabold '>
                  {project.num}.
                </div>
                {/* CATEGORY */}
                <div
                  className='text-[42px] font-bold leading none text-white
                group-hover:text-accent transition all duration-500 capitalize '
                >
                  {project.category} project
                </div>
                {/* DESCRIPTION */}
                <p className='text-white/60'>{project.description}</p>
                {/* STACK */}
                <ul className='flex gap-4 flex-col xl:flex-row'>
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className='text-accent text-xl'>
                        {item}
                        {/* IF LAST ITEM */}
                        {index !== project.stack.length - 1 && ','}
                      </li>
                    );
                  })}
                </ul>
                {/* BORDER */}
                <div className='border border-white/20 '></div>
                {/* BUTTONS */}
                <div className='flex items-center gap-4'>
                  {/* LIVE BUTTON */}
                  <Link href={project.live} target='_blank' aria-label="Visit my website!">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <div className='flex flex-row gap-4'>
                          <p className='flex justify-center items-center group capitalize text-2xl xl:hidden'>
                            Live
                          </p>
                          <TooltipTrigger aria-label='Visit my live website.' className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                            <BsArrowUpRight className='text-white text-3xl group-hover:text-accent ' />
                          </TooltipTrigger>
                        </div>

                        <TooltipContent className='bg-gray-700 hidden xl:block'>
                          Live Website
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* GitHub BUTTON */}
                  <Link href={project.github} target='_blank' aria-label="Visit my Github!">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <div className='flex flex-row gap-4'>
                          <p className='flex justify-center items-center group capitalize text-2xl xl:hidden'>
                            Github
                          </p>
                          <TooltipTrigger aria-label='Visit my Github page.' className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                            <BsGithub className='text-white text-3xl group-hover:text-accent ' />
                          </TooltipTrigger>
                        </div>

                        <TooltipContent  className='bg-gray-700 hidden xl:block'>
                          Github
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-full xl:w-[50%] ' aria-label='Swipe left or right'>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide aria-label='Swipe right to left' key={index} className='w-full'>
                      <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                        {/* OVERLAY */}
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 '></div>
                        {/* IMAGE */}
                        <div className='relative w-full h-full '>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill={true}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            className='object-cover'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* SLIDE BUTTTON */}
                <SliderBtn aria-label='Swipe left or right.' containerStyles='flex gap-2  absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 
                w-full justify-between xl:w-max xl:justify-none ' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'  />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Work;

