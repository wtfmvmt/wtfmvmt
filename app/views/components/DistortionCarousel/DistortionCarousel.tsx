"use client"

import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
import React, { useEffect } from 'react';



const DistortionCarousel = ({
  displacmentImage = `/assets/images/distortions/1.jpg`,
  images,
}) => {

  const { ref, next, prev } = useDistortionEffectCarousel({
    images,
    displacmentImage,
    resizeDebounce: 500,
    backgroundSize: "cover",
    easing: "easeInOut",
    speed: 1.5,
    commonAngle: Math.PI / 3
  });


  useEffect(() => {
    setInterval(() => {
      next()
    }, 6000)
  }, [next])


  return (
    <div
      className='cursor-pointer'
      onClick={() => prev()}
      style={{
        height: '100vh',
        opacity: 0.97,
        objectFit: 'contain',
      }}
      ref={ref}
    />
  );
};

export default React.memo(DistortionCarousel);