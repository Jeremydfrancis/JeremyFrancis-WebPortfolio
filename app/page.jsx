import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

// components
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import Link from 'next/link';

function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className=' flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* TEXT */}
          <div className='text-center xl:text-left order-2 xl:order-none '>
            <span className='text-xl  '>Web Developer</span>
            <h1 className='h1 mb-6'>
              Hello I'm <br />
              <span className='text-accent'>Jeremy Francis</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I’m an experienced web developer known for building beautiful and
              functional websites. Proficient in multiple programming languages,
              I’m always on the hunt to learn more and push the boundaries of
              what’s possible in web development.
            </p>
            {/* BUTTONS and SOCIAL */}
            <div className='flex flex-col xl:flex-row items-center gap-8 '>
              <Link href='/Res-Jeremy.pdf'
              alt='my resume'
              target='_blank'
              rel='noopener norefferer'>
              <Button
                variant='outline'
                size='lg'
                aria-labelledby='Download CV Button'
                className='uppercase flex items-center gap-2 '
              >
                <span>Resume</span>
                <FiDownload className='text-xl' />
              </Button>
              </Link>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
                   hover:bg-accent/60 hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* PHOTO */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0 '>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
