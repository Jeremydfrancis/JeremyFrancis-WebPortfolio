'use client';

import * as React from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import Link from 'next/link';
import Head from 'next/head';

// about data
const about = {
  title: 'About me',
  description:
    'As an 8-year Combat Veteran in the West Virginia Army National Guard, where I earned an honorable discharge and multiple awards for exemplary service, including a deployment to Syria from 2019-2020, I bring a unique discipline and resilience to the tech world. As a Front-End Developer, I excel in HTML, CSS, JavaScript, and React JS, creating intuitive and dynamic user experiences. My expertise in UI/UX design and Figma, combined with a proven ability to collaborate effectively, ensures the delivery of visually appealing and functional interfaces. Eager to continuously learn and innovate, I am ready to bring my skills to a forward-thinking team and tackle new challenges in web development.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Jeremy Francis',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 304 932 1921',
    },
    {
      fieldName: 'Email',
      fieldValue: 'jeremydfrancis0@gmail.com',
    },
    {
      fieldName: 'Location',
      fieldValue: 'West Virginia, USA',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
  ],
};

// experience data
const experience = [
  {
    icon: 'insert icon',
    title: 'My experience',
    description:
      'Drawing on my dynamic background as a Combat Veteran and a Frontend Developer, I blend disciplined military strategy with innovative web design to create standout digital experiences. From conducting detailed reconnaissance missions to developing sleek, user-friendly websites, my career path has equipped me with a unique set of skills that I apply to solve complex problems with precision and creativity',
    items: [
      {
        company: 'West Virginia Army National Guard',
        position: 'Cavalry Scout',
        duration: '2015 - 2023',
      },
      {
        company: 'Front-End Developer',
        position: 'Freelance',
        duration: '2022 - Present',
      },
    ],
  },
];

// Certifications data
const certification = [
  {
    icon: 'insert icon',
    title: 'My certifications',
    description:
      'Embark on a journey through my professional development, where each certification not only enhances my technical skills but also strengthens my capabilities in delivering cutting-edge web solutions. From design fundamentals to advanced development techniques, these credentials represent a steadfast commitment to excellence and continuous learning in the ever-evolving tech landscape.',
    items: [
      {
        href: 'https://www.udemy.com/certificate/UC-f16a5fa0-576f-48c2-8155-313b3aebf5e4/',
        institution: 'Udemy',
        degree: 'Figma UI UX Design Essentials',
        date: '2024',
      },
      {
        href: 'https://www.freecodecamp.org/certification/Jeremydfrancis0/responsive-web-design',
        institution: 'freeCodeCamp',
        degree: 'Responsive Web Design',
        date: '2024',
      },
      {
        href: 'https://www.coursera.org/account/accomplishments/verify/WUXZR7SD4SEV',
        institution: 'Meta',
        degree: 'Advanced React',
        date: '2024',
      },
      {
        href: 'https://www.coursera.org/account/accomplishments/verify/WUXZR7SD4SEV',
        institution: 'Meta',
        degree: 'React Basics',
        date: '2023',
      },
      {
        href: 'https://www.coursera.org/account/accomplishments/verify/86QQWZ22S3ZS',
        institution: 'Meta',
        degree: 'HTML and CSS in depth',
        date: '2023',
      },
      {
        href: 'https://www.coursera.org/account/accomplishments/verify/KT9UAR7KTG54',
        institution: 'Meta',
        degree: 'Programming with JavaScript',
        date: '2023',
      },
      {
        href: 'https://www.coursera.org/account/accomplishments/verify/9M8CWVH4RHXD',
        institution: 'Meta',
        degree: 'Version Control',
        date: '2023',
      },
      {
        href: 'https://www.coursera.org/account/accomplishments/verify/K47CZJQWTAAQ',
        institution: 'Meta',
        degree: 'Introduction to Front-End Development',
        date: '2023',
      },
    ],
  },
];

// Skils data
const skills = {
  title: 'My skills',
  description:
    'As a Frontend Developer, I am skilled in a variety of web technologies, including HTML, CSS, JavaScript, and React JS, complemented by advanced tools like Next.js and Figma for UI/UX design. I create responsive and visually appealing websites using Bootstrap and Tailwind CSS, ensuring they work smoothly across different browsers. My background also includes practical knowledge of Node.js and Express.js, enhancing my ability to integrate front and back-end systems seamlessly. Dedicated to continuous learning and collaboration, I constantly refine my skills to deliver top-notch web solutions',
  skillList: [
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

function Resume() {
  const [open, setOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(false); // Toggle tooltip on click
  };

  return (
    <>
      <Head>
        <title>Jeremy Francis - Front-End Developer Resume</title>
        <meta
          name="description"
          content="Explore the resume of Jeremy Francis, a front-end developer with experience in HTML, CSS, JavaScript, React, and more. Learn about his background, skills, experience, and certifications."
        />
        <meta
          name="keywords"
          content="Jeremy Francis, front-end developer, HTML, CSS, JavaScript, React, web development, UI/UX design, Figma, Next.js, responsive design"
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      >
        <div className='container mx-auto'>
          <Tabs
            defaultValue='experience'
            className='flex flex-col xl:flex-row gap-[60px]'
          >
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
              <TabsTrigger value='experience'>Experience</TabsTrigger>
              <TabsTrigger value='certification'>Certifications</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
              <TabsTrigger value='about'>About me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className='min-h-[70vh] w-full'>
              {/* experience */}
              <TabsContent value='experience' className='w-full'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                  <h1 className='text-4xl font-bold'>{experience[0].title}</h1>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {experience[0].description}
                  </p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {experience[0].items.map((item, index) => (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1 '
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h2 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h2>
                          <div className='flex items-center gap-3'>
                            {/* DOT */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* certifications */}
              <TabsContent value='certification' className='w-full'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                  <h1 className='text-4xl font-bold'>{certification[0].title}</h1>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {certification[0].description}
                  </p>
                  <ScrollArea className='h-[400px]'>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                      {certification[0].items.map((item, index) => (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start gap-1 '
                        >
                          <span className='text-accent'>{item.date}</span>
                          <Link
                            href={item.href}
                            target='_blank'
                            className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'
                          >
                            {item.degree}
                          </Link>
                          <div className='flex items-center gap-3'>
                            {/* DOT */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60 italic'>
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value='skills' className='w-full h-full'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h1 className='text-4xl font-bold'>{skills.title}</h1>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                      {skills.description}
                    </p>
                  </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                onClick={handleClick}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'
                              >
                                <div className='flex flex-col gap-2'>
                                  <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                    {skill.icon}
                                  </div>
                                  <p className='xl:hidden'>{skill.name}</p>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent
                                className='hidden xl:block '
                                align='center'
                              >
                                <p className='bg-transparent capitalize'>
                                  {skill.name}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* about me */}
              <TabsContent
                value='about'
                className='w-full text-center xl:text-left'
              >
                <div className='flex flex-col gap-[30px] '>
                  <h1 className='text-4xl font-bold'>{about.title}</h1>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                    {about.description}
                  </p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='flex items-center justify-center xl:justify-start gap-4'
                        >
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
