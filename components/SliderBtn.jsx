'use client';

import { useSwiper } from 'swiper/react';
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi';

function SliderBtn({containerStyles, btnStyles, iconStyles}) {
      const Swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button aria-label='Swipe left' className={btnStyles} onClick={()=> Swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} aria-label='Swipe right' onClick={()=> Swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  )
}

export default SliderBtn