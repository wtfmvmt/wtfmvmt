import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
import { memo, useEffect } from 'react';

const DistortionCarousel = ({
  displacmentImage = "/assets/images/distortions/1.jpg",
  images,
}) => {
  const { ref, next, prev } = useDistortionEffectCarousel({
    images,
    displacmentImage,
    resizeDebounce: 250,
    backgroundSize: "cover",
    easing: "easeInOut",
    speed: 1.3,
    commonAngle: Math.PI / 3
  });

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        next()
      }, 8000)
    }, 2000)

  }, [next])

  return (
    <div
      className='cursor-pointer'
      onClick={() => prev()}
      style={{
        height: '100vh',
      }}
      ref={ref}
    />
  );
};

export default memo(DistortionCarousel);