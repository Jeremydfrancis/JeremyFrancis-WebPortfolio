'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Head from 'next/head';

const UiUxDes = () => {
  return (
    <>
      <Head>
        <title>UI/UX Design Services | Enhance User Experience</title>
        <meta
          name="description"
          content="Elevate user experience with custom UI/UX design services. Creating visually appealing and highly functional interfaces tailored to meet the unique demands of your audience."
        />
        <meta
          name="keywords"
          content="UI/UX design, user experience, user interface, custom design, digital interfaces, user-centered design, visual appeal, functionality"
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
              <h1 className='text-xl mb-2'>UI/UX Design</h1>
              <h2 className='mb-6 h1'>
                Enhance <br />
                <span className='text-accent'>User Experience</span>
              </h2>
              <p className='max-w-[569px] mb-9 text-white/60 leading-relaxed'>
                Elevate the user experience with our custom UI/UX design services,
                designed to meet the unique demands of your audience. I bring a
                blend of creativity and precision to every project, focusing on
                crafting interfaces that are not only visually appealing but also
                exceptionally functional. Through a deep understanding of
                user-centered design principles, I ensure that every interaction
                is streamlined and satisfying. Whether you're revamping an
                existing site or starting from scratch, I'm here to transform your
                digital presence into a journey that captures and retains user
                interest. Let’s work together to make your digital interfaces as
                engaging and effective as they can be.
              </p>
            </article>
            {/* Photo Section */}
            <div className='relative group flex justify-center items-center'>
              <div className='relative w-full h-full'>
                <Image
                  src='/ui-ux-design.jpg'
                  alt='UI/UX design'
                  width={569}
                  height={569}
                  sizes='(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  srcSet='/uiuxdesign.jpg 569w, /uiuxdesign@2x.jpg 1138w'
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

export default UiUxDes;
