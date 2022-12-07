import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
import { memo } from 'react';

const DistortionCarousel = ({
  displacmentImage = "/assets/images/distortions/1.jpg",
  images,
}) => {
  const { ref, next } = useDistortionEffectCarousel({
    images,
    displacmentImage,
    resizeDebounce: 150,
    backgroundSize: "cover",
    easing: "easeInOut",
    speed: 1.1,
    commonAngle: Math.PI / 3
  });

  return (
    <div
      className='rounded-md cursor-pointer'
      onClick={() => next()}

      style={{
        height: '100vh',
        opacity: 0.99
      }}
      ref={ref}
    />
  );
};

export default memo(DistortionCarousel);