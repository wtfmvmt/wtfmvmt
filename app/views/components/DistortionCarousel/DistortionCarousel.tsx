import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
import React from 'react';



const DistortionCarousel = ({
  displacmentImage="/assets/images/distortions/1.jpg",
  images,
}) => {

  const { ref, next } = useDistortionEffectCarousel({
    images,
    displacmentImage
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