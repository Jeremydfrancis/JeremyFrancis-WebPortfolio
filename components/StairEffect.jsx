'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Components
import Stairs from './Stairs';

function StairEffect() {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode='wait'>
        <div key={pathName}>
          <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex'>
            <Stairs />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: 'easeInOut'   } }}
            exit={{ opacity: 0, transition: { delay: 0.5, duration: 0.4, ease: 'easeInOut' } }}
            className='h-screen w-screen fixed top-0 pointer-events-none bg-primary z-30'
          />
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairEffect;
