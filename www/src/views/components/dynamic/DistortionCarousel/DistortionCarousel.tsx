import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
import { useEffect } from 'react';

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
    speed: 1.3,
    commonAngle: Math.PI / 3
  });

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        next()
      }, 7000)
    }, 2000)

  }, [next])

  return (
    <div
      className='cursor-pointer z-50'
      onClick={() => prev()}
      style={{
        height: '100vh',
        objectFit: 'contain'
      }}
      ref={ref}
    />
  );
};

export default DistortionCarousel