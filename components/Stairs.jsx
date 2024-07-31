import { motion } from 'framer-motion'
// variants
const stairAnimation = {
      initial: {
          transform: 'translateY(0%)'
      },
      animate: {
          transform: 'translateY(100%)'
      },
      exit: {
          transform: ['translateY(100%)', 'translateY(0%)']
      },
  };

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
     const totalSteps = 6;
     return totalSteps - index-1;
};
function Stairs() {
  return (
      <>
    {[...Array(6)].map((_, index)=> {
      return (
      <motion.div key={index} variants={stairAnimation} initial='initial' animate='animate' exit='exit' transition ={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: 0.1 * reverseIndex(index) * 0.5,  // staggered delay  
      }}
      className='h-full w-full bg-white relative'  />
);
})}
    </>
  );
};

export default Stairs