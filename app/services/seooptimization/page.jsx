'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';

const SeoOpt = () => {
  return (
    <>
      <Head>
        <title>SEO Optimization Services | Boost Your Website Visibility</title>
        <meta
          name="description"
          content="Enhance your website's visibility with targeted SEO optimization services. Improve rankings, drive organic traffic, and maintain a strong online presence with our expert SEO strategies."
        />
        <meta
          name="keywords"
          content="SEO optimization, search engine optimization, improve website ranking, drive organic traffic, keyword research, content enhancement, technical optimizations, backlink development"
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
              <h1 className='text-xl mb-2'>SEO Optimization</h1>
              <h2 className='mb-6 h1'>
                Boost <br />
                <span className='text-accent'>Your Visibility</span>
              </h2>
              <p className='max-w-[569px] mb-9 text-white/60 leading-relaxed'>
                Boost your website's visibility with our targeted SEO optimization
                services. I focus on improving your site’s ranking and driving
                organic traffic by implementing the latest SEO strategies tailored
                to your specific needs. From keyword research and content
                enhancement to technical optimizations and backlink development,
                I cover all aspects of SEO to ensure your site not only climbs the
                search engine rankings but also maintains a strong presence.
                Partner with me to make your website not just seen, but also
                preferred by your target audience. Let's maximize your online
                potential and turn searches into valuable traffic.
              </p>
            </article>
            {/* Photo Section */}
            <div className='relative group flex justify-center items-center'>
              <div className='relative w-full h-full'>
                <Image
                  src='/seo-optimization.jpg'
                  alt='Search Engine Optimization'
                  width={569}
                  height={569}
                  sizes='(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  srcSet='/seo-optimization.jpg 569w, /seo-optimization@2x.jpg 1138w'
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

export default SeoOpt;

