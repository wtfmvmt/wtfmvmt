import { useEffect } from 'react';
import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
export interface DistortionCarouseProps {
  images: string[];
  displacmentImage?: string;
  initalIndex?: number
}

const DistortionCarousel: React.FC<DistortionCarouseProps> = ({
  displacmentImage = "/assets/images/distortions/1.jpg",
  images,
}) => {
  const { ref, next, prev } = useDistortionEffectCarousel({
    images,
    displacmentImage
  });

  useEffect(() => {
    setInterval(() => {
      next()
    }, 5000)
  }, [next])


  return (
    <div
      onClick={() => next()}
      style={{
        height: '100vh',
      }}
      ref={ref}
    />
  );
};

export default DistortionCarousel