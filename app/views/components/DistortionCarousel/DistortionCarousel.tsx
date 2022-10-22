import React from 'react';
import { useDistortionEffectCarousel } from 'distortion-effect-carousel';

import type { IComponent } from '@models/typings/Component';
import type { DistortionCarouselProps } from '@typings/DistortionCarousel';


const DistortionCarousel: IComponent<DistortionCarouselProps> = ({
  displacmentImage,
  images,
}: DistortionCarouselProps) => {

  const { ref, next } = useDistortionEffectCarousel({
    images,
    displacmentImage
  });

  return (
    <div
      className='cursor-pointer'
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