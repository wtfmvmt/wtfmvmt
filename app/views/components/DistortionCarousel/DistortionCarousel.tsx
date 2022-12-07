"use client"

import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
import React from 'react';



const DistortionCarousel = ({
  displacmentImage = "/assets/images/distortions/1.jpg",
  images,
}) => {

  const { ref, next } = useDistortionEffectCarousel({
    images,
    displacmentImage,
    resizeDebounce: 750,
    backgroundSize: "cover",
    easing: "easeInOut",
    speed: 1.1,
    commonAngle: Math.PI / 3
  });

  return (
    <div
      className='cursor-pointer rounded-md'
      onClick={() => next()}

      style={{
        height: '100vh',
        opacity: 0.99
      }}
      ref={ref}
    />
  );
};

export default React.memo(DistortionCarousel);