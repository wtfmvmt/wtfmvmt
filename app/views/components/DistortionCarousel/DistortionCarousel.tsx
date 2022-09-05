import { useEffect } from 'react';
import { useDistortionEffectCarousel } from 'distortion-effect-carousel';
export interface DistortionCarouseProps {
  images: string[];
  displacmentImage: string;
  initalIndex?: number
}



const DistortionCarousel: React.FC<DistortionCarouseProps> = ({
  displacmentImage,
  images, initalIndex = 0
}) => {
  const { ref, next, prev } = useDistortionEffectCarousel({
    images,
    displacmentImage,
  });

  const LoopCarousel = () => {

  }

  useEffect(() => {
    setTimeout(() => {
      next()
    }, 2000)
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