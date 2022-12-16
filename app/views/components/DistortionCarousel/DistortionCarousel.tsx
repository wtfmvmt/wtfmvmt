import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
import { memo, useEffect } from 'react';

const DistortionCarousel = ({
  displacmentImage = "/assets/images/distortions/1.jpg",
  images,
}) => {
  const { ref, next, prev } = useDistortionEffectCarousel({
    images,
    displacmentImage,
    resizeDebounce: 100,
    backgroundSize: "cover",
    easing: "easeInOut",
    speed: 1.1,
    commonAngle: Math.PI / 3
  });

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        next()
      }, 7000)
    }, 3000)

  }, [next])

  return (
    <div
      className='rounded-md cursor-pointer'
      onClick={() => prev()}

      style={{
        height: '100vh',
        opacity: 0.99
      }}
      ref={ref}
    />
  );
};

export default memo(DistortionCarousel);